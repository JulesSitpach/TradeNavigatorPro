-- TradeNavigatorPro Database Schema
-- This schema defines the core tables and security policies for the application

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ORGANIZATIONS (for multi-tenant support)
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- USER_ORGANIZATIONS (junction table for users-to-organizations)
CREATE TABLE user_organizations (
  user_id UUID REFERENCES auth.users NOT NULL,
  org_id UUID REFERENCES organizations NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('admin', 'member', 'viewer')),
  PRIMARY KEY (user_id, org_id),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- FILES (track uploaded CSVs)
CREATE TABLE files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  org_id UUID REFERENCES organizations,
  filename TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' 
    CHECK (status IN ('pending', 'processing', 'completed', 'error')),
  row_count INTEGER,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- PRODUCTS (from CSV uploads)
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  org_id UUID REFERENCES organizations,
  file_id UUID REFERENCES files,
  name TEXT NOT NULL,
  hts_code TEXT NOT NULL,
  country_of_origin TEXT NOT NULL,
  value_usd NUMERIC NOT NULL CHECK (value_usd >= 0),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- TARIFF_RATES (reference data for calculations)
CREATE TABLE tariff_rates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  hts_code TEXT NOT NULL,
  country_code TEXT NOT NULL,
  rate_percentage NUMERIC NOT NULL CHECK (rate_percentage >= 0),
  effective_date DATE NOT NULL,
  expiration_date DATE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (hts_code, country_code, effective_date)
);

-- CALCULATIONS (tariff impact results)
CREATE TABLE calculations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  org_id UUID REFERENCES organizations,
  file_id UUID REFERENCES files,
  name TEXT NOT NULL,
  tariff_scenario TEXT,
  total_products INTEGER NOT NULL,
  total_value_usd NUMERIC NOT NULL,
  total_duty_usd NUMERIC NOT NULL,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- REPORTS (saved report configurations)
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  org_id UUID REFERENCES organizations,
  calculation_id UUID REFERENCES calculations NOT NULL,
  name TEXT NOT NULL,
  format TEXT NOT NULL CHECK (format IN ('pdf', 'csv', 'xlsx')),
  config JSONB,
  storage_path TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ENABLE ROW LEVEL SECURITY
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE files ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE calculations ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE tariff_rates ENABLE ROW LEVEL SECURITY; -- Read-only for users

-- ROW LEVEL SECURITY POLICIES

-- Organizations: users can only see organizations they belong to
CREATE POLICY org_select_policy ON organizations 
  FOR SELECT USING (
    id IN (
      SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY org_insert_policy ON organizations 
  FOR INSERT WITH CHECK (true); -- Anyone can create an organization

-- User_Organizations: users can only see their own memberships
CREATE POLICY user_org_select_policy ON user_organizations 
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY user_org_insert_policy ON user_organizations 
  FOR INSERT WITH CHECK (
    user_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM user_organizations 
      WHERE user_id = auth.uid() AND org_id = NEW.org_id AND role = 'admin'
    )
  );

-- Files: users can see their own files or files from their organizations
CREATE POLICY files_select_policy ON files 
  FOR SELECT USING (
    user_id = auth.uid() OR 
    org_id IN (
      SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY files_insert_policy ON files 
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Products: users can see their own products or products from their organizations
CREATE POLICY products_select_policy ON products 
  FOR SELECT USING (
    user_id = auth.uid() OR 
    org_id IN (
      SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY products_insert_policy ON products 
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Calculations: users can see their own calculations or calculations from their organizations
CREATE POLICY calculations_select_policy ON calculations 
  FOR SELECT USING (
    user_id = auth.uid() OR 
    org_id IN (
      SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY calculations_insert_policy ON calculations 
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Reports: users can see their own reports or reports from their organizations
CREATE POLICY reports_select_policy ON reports 
  FOR SELECT USING (
    user_id = auth.uid() OR 
    org_id IN (
      SELECT org_id FROM user_organizations WHERE user_id = auth.uid()
    )
  );

CREATE POLICY reports_insert_policy ON reports 
  FOR INSERT WITH CHECK (user_id = auth.uid());

-- Tariff rates are public reference data
CREATE POLICY tariff_rates_select_policy ON tariff_rates 
  FOR SELECT USING (true);

-- Create indexes for performance
CREATE INDEX idx_products_user_id ON products(user_id);
CREATE INDEX idx_products_org_id ON products(org_id);
CREATE INDEX idx_products_file_id ON products(file_id);
CREATE INDEX idx_products_hts_code ON products(hts_code);
CREATE INDEX idx_calculations_user_id ON calculations(user_id);
CREATE INDEX idx_calculations_org_id ON calculations(org_id);
CREATE INDEX idx_files_user_id ON files(user_id);
CREATE INDEX idx_files_org_id ON files(org_id);
CREATE INDEX idx_tariff_rates_hts_country ON tariff_rates(hts_code, country_code);

-- Sample tariff rates for testing
INSERT INTO tariff_rates (hts_code, country_code, rate_percentage, effective_date, description)
VALUES
  ('8471.30.01', 'CN', 25.0, '2023-01-01', 'Laptops and computers from China'),
  ('8517.12.00', 'CN', 15.0, '2023-01-01', 'Mobile phones from China'),
  ('9403.20.00', 'CN', 25.0, '2023-01-01', 'Metal furniture from China'),
  ('6110.20.20', 'VN', 0.0, '2023-01-01', 'Cotton sweaters from Vietnam'),
  ('6110.20.20', 'CN', 7.5, '2023-01-01', 'Cotton sweaters from China');

-- Create a function to calculate tariff for a product
CREATE OR REPLACE FUNCTION calculate_tariff(
  product_hts_code TEXT,
  product_country TEXT,
  product_value NUMERIC
) RETURNS NUMERIC AS $$
DECLARE
  tariff_rate NUMERIC;
BEGIN
  SELECT rate_percentage INTO tariff_rate
  FROM tariff_rates
  WHERE hts_code = product_hts_code
    AND country_code = product_country
    AND CURRENT_DATE BETWEEN effective_date AND COALESCE(expiration_date, '9999-12-31'::DATE)
  ORDER BY effective_date DESC
  LIMIT 1;

  IF tariff_rate IS NULL THEN
    RETURN 0;
  END IF;

  RETURN (product_value * tariff_rate / 100);
END;
$$ LANGUAGE plpgsql;

-- Create a function to get average duty percentage
CREATE OR REPLACE FUNCTION get_average_duty_percentage()
RETURNS TABLE (average_duty NUMERIC) AS $$
BEGIN
  RETURN QUERY
  SELECT COALESCE(AVG(c.total_duty_usd / NULLIF(c.total_value_usd, 0) * 100), 0) as average_duty
  FROM calculations c
  WHERE c.user_id = auth.uid();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add storage bucket for CSV files
-- Note: This needs to be executed via Supabase dashboard or CLI
-- EXECUTE 'CREATE STORAGE BUCKET csv WITH public = false';
