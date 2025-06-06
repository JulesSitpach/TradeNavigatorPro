export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
        Relationships: []
      }
      user_organizations: {
        Row: {
          user_id: string
          org_id: string
          role: string
          created_at: string
        }
        Insert: {
          user_id: string
          org_id: string
          role: string
          created_at?: string
        }
        Update: {
          user_id?: string
          org_id?: string
          role?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_organizations_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_organizations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      files: {
        Row: {
          id: string
          user_id: string
          org_id: string | null
          filename: string
          storage_path: string
          status: string
          row_count: number | null
          error_message: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          org_id?: string | null
          filename: string
          storage_path: string
          status?: string
          row_count?: number | null
          error_message?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          org_id?: string | null
          filename?: string
          storage_path?: string
          status?: string
          row_count?: number | null
          error_message?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "files_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "files_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          id: string
          user_id: string
          org_id: string | null
          file_id: string | null
          name: string
          hts_code: string
          country_of_origin: string
          value_usd: number
          quantity: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          org_id?: string | null
          file_id?: string | null
          name: string
          hts_code: string
          country_of_origin: string
          value_usd: number
          quantity: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          org_id?: string | null
          file_id?: string | null
          name?: string
          hts_code?: string
          country_of_origin?: string
          value_usd?: number
          quantity?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_file_id_fkey"
            columns: ["file_id"]
            referencedRelation: "files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tariff_rates: {
        Row: {
          id: string
          hts_code: string
          country_code: string
          rate_percentage: number
          effective_date: string
          expiration_date: string | null
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          hts_code: string
          country_code: string
          rate_percentage: number
          effective_date: string
          expiration_date?: string | null
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          hts_code?: string
          country_code?: string
          rate_percentage?: number
          effective_date?: string
          expiration_date?: string | null
          description?: string | null
          created_at?: string
        }
        Relationships: []
      }
      calculations: {
        Row: {
          id: string
          user_id: string
          org_id: string | null
          file_id: string | null
          name: string
          tariff_scenario: string | null
          total_products: number
          total_value_usd: number
          total_duty_usd: number
          details: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          org_id?: string | null
          file_id?: string | null
          name: string
          tariff_scenario?: string | null
          total_products: number
          total_value_usd: number
          total_duty_usd: number
          details?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          org_id?: string | null
          file_id?: string | null
          name?: string
          tariff_scenario?: string | null
          total_products?: number
          total_value_usd?: number
          total_duty_usd?: number
          details?: Json | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calculations_file_id_fkey"
            columns: ["file_id"]
            referencedRelation: "files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculations_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reports: {
        Row: {
          id: string
          user_id: string
          org_id: string | null
          calculation_id: string
          name: string
          format: string
          config: Json | null
          storage_path: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          org_id?: string | null
          calculation_id: string
          name: string
          format: string
          config?: Json | null
          storage_path?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          org_id?: string | null
          calculation_id?: string
          name?: string
          format?: string
          config?: Json | null
          storage_path?: string | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reports_calculation_id_fkey"
            columns: ["calculation_id"]
            referencedRelation: "calculations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_org_id_fkey"
            columns: ["org_id"]
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reports_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_tariff: {
        Args: {
          product_hts_code: string
          product_country: string
          product_value: number
        }
        Returns: number
      }
      get_average_duty_percentage: {
        Args: Record<string, never>
        Returns: { average_duty: number }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  auth: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string | null
          user_metadata: Json | null
        }
      }
    }
  }
}

// Helper types for more convenient usage
export type Organization = Database['public']['Tables']['organizations']['Row']
export type UserOrganization = Database['public']['Tables']['user_organizations']['Row']
export type File = Database['public']['Tables']['files']['Row']
export type Product = Database['public']['Tables']['products']['Row']
export type TariffRate = Database['public']['Tables']['tariff_rates']['Row']
export type Calculation = Database['public']['Tables']['calculations']['Row']
export type Report = Database['public']['Tables']['reports']['Row']
export type User = Database['auth']['Tables']['users']['Row']

// Types for calculation results
export interface CalculationResult {
  product_id: string;
  product_name: string;
  hts_code: string;
  country_of_origin: string;
  value_usd: number;
  quantity: number;
  tariff_rate: number;
  tariff_amount: number;
}

export interface CalculationSummary {
  total_products: number;
  total_value: number;
  total_tariff: number;
  average_rate: number;
  highest_tariff_product?: CalculationResult;
}
