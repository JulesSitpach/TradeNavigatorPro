import { NextRequest, NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import Papa from 'papaparse';

// Define types for the request data
interface CalculationResult {
  product_id: string;
  product_name: string;
  hts_code: string;
  country_of_origin: string;
  value_usd: number;
  quantity: number;
  tariff_rate: number;
  tariff_amount: number;
}

interface CalculationSummary {
  total_products: number;
  total_value: number;
  total_tariff: number;
  average_rate: number;
  highest_tariff_product?: CalculationResult;
}

interface ReportRequestData {
  format: 'pdf' | 'csv';
  data: {
    results: CalculationResult[];
    summary: CalculationSummary;
    scenarioName: string;
  };
}

// PDF Document component using React PDF
const createPDFDocument = async (data: ReportRequestData['data']) => {
  const { Document, Page, Text, View, StyleSheet } = await import('@react-pdf/renderer');
  
  // Create styles
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30,
    },
    header: {
      marginBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#004b8d',
      paddingBottom: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#004b8d',
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 14,
      color: '#666',
      marginBottom: 10,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333',
    },
    summaryGrid: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 15,
    },
    summaryItem: {
      width: '50%',
      marginBottom: 10,
    },
    summaryLabel: {
      fontSize: 10,
      color: '#666',
    },
    summaryValue: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    table: {
      display: 'flex',
      width: 'auto',
      borderWidth: 1,
      borderColor: '#eee',
      marginTop: 10,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      minHeight: 25,
      alignItems: 'center',
    },
    tableHeader: {
      backgroundColor: '#f9f9f9',
    },
    tableHeaderText: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#333',
      padding: 5,
    },
    tableCell: {
      fontSize: 9,
      padding: 5,
    },
    col1: { width: '25%' },
    col2: { width: '15%' },
    col3: { width: '15%' },
    col4: { width: '15%' },
    col5: { width: '15%' },
    col6: { width: '15%' },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 30,
      right: 30,
      fontSize: 8,
      color: '#999',
      textAlign: 'center',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 10,
    },
  });

  // Create PDF Document
  const PDFDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Tariff Impact Report</Text>
          <Text style={styles.subtitle}>{data.scenarioName} - {new Date().toLocaleDateString()}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Products</Text>
              <Text style={styles.summaryValue}>{data.summary.total_products}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Value</Text>
              <Text style={styles.summaryValue}>${data.summary.total_value.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Total Tariff</Text>
              <Text style={styles.summaryValue}>${data.summary.total_tariff.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>Average Rate</Text>
              <Text style={styles.summaryValue}>{data.summary.average_rate.toFixed(2)}%</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.tableHeader]}>
              <Text style={[styles.tableHeaderText, styles.col1]}>Product</Text>
              <Text style={[styles.tableHeaderText, styles.col2]}>HTS Code</Text>
              <Text style={[styles.tableHeaderText, styles.col3]}>Origin</Text>
              <Text style={[styles.tableHeaderText, styles.col4]}>Value (USD)</Text>
              <Text style={[styles.tableHeaderText, styles.col5]}>Tariff Rate</Text>
              <Text style={[styles.tableHeaderText, styles.col6]}>Tariff Amount</Text>
            </View>
            
            {data.results.slice(0, 50).map((item, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.col1]}>{item.product_name}</Text>
                <Text style={[styles.tableCell, styles.col2]}>{item.hts_code}</Text>
                <Text style={[styles.tableCell, styles.col3]}>{item.country_of_origin}</Text>
                <Text style={[styles.tableCell, styles.col4]}>${item.value_usd.toFixed(2)}</Text>
                <Text style={[styles.tableCell, styles.col5]}>{item.tariff_rate.toFixed(2)}%</Text>
                <Text style={[styles.tableCell, styles.col6]}>${item.tariff_amount.toFixed(2)}</Text>
              </View>
            ))}
          </View>
          
          {data.results.length > 50 && (
            <Text style={{ fontSize: 9, marginTop: 10, fontStyle: 'italic' }}>
              Showing 50 of {data.results.length} products. Export to CSV for complete data.
            </Text>
          )}
        </View>
        
        <View style={styles.footer}>
          <Text>Generated by TradeNavigatorPro on {new Date().toLocaleString()}</Text>
          <Text>This report is for informational purposes only and does not constitute legal or tax advice.</Text>
        </View>
      </Page>
    </Document>
  );

  return PDFDocument;
};

// Generate CSV data
const generateCSV = (data: ReportRequestData['data']) => {
  // Prepare data for CSV export
  const csvData = data.results.map(item => ({
    'Product Name': item.product_name,
    'HTS Code': item.hts_code,
    'Country of Origin': item.country_of_origin,
    'Value (USD)': item.value_usd.toFixed(2),
    'Quantity': item.quantity,
    'Tariff Rate (%)': item.tariff_rate.toFixed(2),
    'Tariff Amount (USD)': item.tariff_amount.toFixed(2)
  }));

  // Add summary information at the end
  csvData.push({
    'Product Name': '--- SUMMARY ---',
    'HTS Code': '',
    'Country of Origin': '',
    'Value (USD)': '',
    'Quantity': '',
    'Tariff Rate (%)': '',
    'Tariff Amount (USD)': ''
  });

  csvData.push({
    'Product Name': 'Total Products',
    'HTS Code': data.summary.total_products.toString(),
    'Country of Origin': '',
    'Value (USD)': '',
    'Quantity': '',
    'Tariff Rate (%)': '',
    'Tariff Amount (USD)': ''
  });

  csvData.push({
    'Product Name': 'Total Value',
    'HTS Code': '',
    'Country of Origin': '',
    'Value (USD)': data.summary.total_value.toFixed(2),
    'Quantity': '',
    'Tariff Rate (%)': '',
    'Tariff Amount (USD)': ''
  });

  csvData.push({
    'Product Name': 'Total Tariff',
    'HTS Code': '',
    'Country of Origin': '',
    'Value (USD)': '',
    'Quantity': '',
    'Tariff Rate (%)': '',
    'Tariff Amount (USD)': data.summary.total_tariff.toFixed(2)
  });

  csvData.push({
    'Product Name': 'Average Rate',
    'HTS Code': '',
    'Country of Origin': '',
    'Value (USD)': '',
    'Quantity': '',
    'Tariff Rate (%)': data.summary.average_rate.toFixed(2),
    'Tariff Amount (USD)': ''
  });

  // Convert to CSV string
  return Papa.unparse(csvData);
};

// Main API handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const requestData: ReportRequestData = await request.json();
    const { format, data } = requestData;

    if (!data || !data.results || !data.summary) {
      return NextResponse.json(
        { error: 'Missing required data' },
        { status: 400 }
      );
    }

    // Generate report based on format
    if (format === 'pdf') {
      // Create PDF document
      const PDFDocument = await createPDFDocument(data);
      
      // Render to stream
      const stream = await renderToStream(<PDFDocument />);
      
      // Read the stream
      const chunks: Uint8Array[] = [];
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
      
      // Combine chunks into a single buffer
      const pdfBuffer = Buffer.concat(chunks);
      
      // Return PDF with proper headers
      return new NextResponse(pdfBuffer, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="tariff-impact-report-${Date.now()}.pdf"`,
        },
      });
    } 
    else if (format === 'csv') {
      // Generate CSV
      const csvContent = generateCSV(data);
      
      // Return CSV with proper headers
      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="tariff-impact-report-${Date.now()}.csv"`,
        },
      });
    } 
    else {
      return NextResponse.json(
        { error: 'Unsupported format. Use "pdf" or "csv".' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: `Failed to generate report: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}
