"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/types";
import { FILE_UPLOAD } from "@/lib/constants";
import { formatFileSize } from "@/lib/formatters";
import {
  Upload,
  FileText,
  Download,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

interface FileUploadProps {
  onFileUpload: (products: Product[]) => void;
  isProcessing: boolean;
}

export function FileUpload({ onFileUpload, isProcessing }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    if (file.size > FILE_UPLOAD.maxSize) {
      return `File size must be less than ${formatFileSize(FILE_UPLOAD.maxSize)}`;
    }

    const extension = "." + file.name.split(".").pop()?.toLowerCase();
    if (!FILE_UPLOAD.allowedExtensions.includes(extension)) {
      return `File type not supported. Please use: ${FILE_UPLOAD.allowedExtensions.join(", ")}`;
    }

    return null;
  };

  const parseCSVFile = (content: string): Product[] => {
    const lines = content.split("\n").filter((line) => line.trim());
    if (lines.length < 2) {
      throw new Error(
        "File must contain at least a header row and one data row",
      );
    }

    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const products: Product[] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim());
      if (values.length < headers.length) continue;

      const product: Product = {
        id: `upload_${i}`,
        name:
          values[headers.indexOf("name")] ||
          values[headers.indexOf("product")] ||
          `Product ${i}`,
        htsCode:
          values[headers.indexOf("hts")] ||
          values[headers.indexOf("htscode")] ||
          "",
        description: values[headers.indexOf("description")] || "",
        unitCost: parseFloat(
          values[headers.indexOf("cost")] ||
            values[headers.indexOf("price")] ||
            "0",
        ),
        quantity: parseInt(
          values[headers.indexOf("quantity")] ||
            values[headers.indexOf("qty")] ||
            "0",
        ),
        weight: parseFloat(values[headers.indexOf("weight")] || "0.5"),
        supplierCountry:
          values[headers.indexOf("country")] ||
          values[headers.indexOf("supplier")] ||
          "CN",
        category: values[headers.indexOf("category")] || "",
      };

      if (product.name && product.unitCost > 0 && product.quantity > 0) {
        products.push(product);
      }
    }

    return products;
  };

  const processFile = async (file: File) => {
    try {
      setError(null);
      const content = await file.text();
      const products = parseCSVFile(content);

      if (products.length === 0) {
        throw new Error("No valid products found in file");
      }

      onFileUpload(products);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process file");
    }
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        return;
      }

      setUploadedFile(file);
      processFile(file);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        return;
      }

      setUploadedFile(file);
      processFile(file);
    }
  };

  const downloadSampleFile = () => {
    const sampleCSV = `name,hts,cost,quantity,weight,country,category,description
Wireless Headphones,8518300000,45.00,1000,0.3,CN,Electronics,Premium wireless headphones
Cotton T-Shirts,6109100010,8.50,5000,0.2,VN,Textiles,100% cotton crew neck t-shirts
LED Light Bulbs,8539500000,3.25,10000,0.1,CN,Electronics,Energy efficient LED bulbs`;

    const blob = new Blob([sampleCSV], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample-products.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6" data-oid="lsj9byz">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive
            ? "border-orange bg-orange/5"
            : "border-muted-foreground/25"
        }`}
        data-oid="3e1lv2b"
      >
        <CardContent className="p-8" data-oid="-tw2skw">
          <div
            className="text-center"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            data-oid="uho9if0"
          >
            <div
              className="mx-auto w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4"
              data-oid="c7:i:a5"
            >
              <Upload
                className="h-8 w-8 text-muted-foreground"
                data-oid="v:pejiu"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2" data-oid="9.-hom9">
              Upload Your Product File
            </h3>
            <p className="text-muted-foreground mb-4" data-oid="9ybeogi">
              Drag and drop your CSV or Excel file here, or click to browse
            </p>

            <input
              type="file"
              accept=".csv,.xls,.xlsx"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
              disabled={isProcessing}
              data-oid="ahvlh78"
            />

            <Button asChild disabled={isProcessing} data-oid="ugiwhz7">
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
                data-oid=".l1-u83"
              >
                {isProcessing ? (
                  <>
                    <div
                      className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"
                      data-oid="di-xglq"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" data-oid="3185djr" />
                    Choose File
                  </>
                )}
              </label>
            </Button>

            <div
              className="flex flex-wrap justify-center gap-2 mt-4"
              data-oid="75u:72n"
            >
              {FILE_UPLOAD.allowedExtensions.map((ext) => (
                <Badge key={ext} variant="secondary" data-oid="3m7ecup">
                  {ext}
                </Badge>
              ))}
            </div>

            <p
              className="text-xs text-muted-foreground mt-2"
              data-oid="71.5fko"
            >
              Maximum file size: {formatFileSize(FILE_UPLOAD.maxSize)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* File Status */}
      {uploadedFile && (
        <Card data-oid="3_ougoy">
          <CardContent className="p-4" data-oid="0ihupte">
            <div
              className="flex items-center justify-between"
              data-oid="deavwlp"
            >
              <div className="flex items-center space-x-3" data-oid="u7ycqjf">
                <div
                  className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center"
                  data-oid="mc58ouq"
                >
                  <CheckCircle
                    className="h-5 w-5 text-success"
                    data-oid="tn15b-s"
                  />
                </div>
                <div data-oid="i6alyko">
                  <p className="font-medium" data-oid="0ln13av">
                    {uploadedFile.name}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="rm0a_la"
                  >
                    {formatFileSize(uploadedFile.size)}
                  </p>
                </div>
              </div>
              {isProcessing && (
                <div
                  className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange"
                  data-oid="trhu.9r"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-destructive" data-oid="1ii2m-1">
          <CardContent className="p-4" data-oid="1zlh_pp">
            <div className="flex items-center space-x-3" data-oid="rd2c:.l">
              <AlertCircle
                className="h-5 w-5 text-destructive flex-shrink-0"
                data-oid="u1c5_69"
              />

              <div data-oid="_y4wv2g">
                <p className="font-medium text-destructive" data-oid="w3co1.c">
                  Upload Error
                </p>
                <p className="text-sm text-muted-foreground" data-oid="0ew-k28">
                  {error}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* File Format Help */}
      <Card data-oid="e7zjrsl">
        <CardHeader data-oid="v2my76c">
          <CardTitle className="text-lg" data-oid="qc_tcjw">
            File Format Requirements
          </CardTitle>
          <CardDescription data-oid="ep1nsmo">
            Your file should include the following columns (case-insensitive):
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="4wp23xu">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            data-oid="xvkm:.1"
          >
            <div data-oid="83gp3zr">
              <h4 className="font-medium text-success mb-2" data-oid="ssauj8y">
                Required Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="7hduhq-"
              >
                <li data-oid="i:.kbax">
                  • <strong data-oid="gsdoupd">name</strong> or{" "}
                  <strong data-oid="z.ut:8u">product</strong> - Product name
                </li>
                <li data-oid="j:xin4l">
                  • <strong data-oid="_3q7vfy">cost</strong> or{" "}
                  <strong data-oid=":qny.:u">price</strong> - Unit cost in USD
                </li>
                <li data-oid="qly70-s">
                  • <strong data-oid="pdci5df">quantity</strong> or{" "}
                  <strong data-oid="jzt6hkm">qty</strong> - Order quantity
                </li>
                <li data-oid="2mg3ps-">
                  • <strong data-oid="t7a6o5o">country</strong> or{" "}
                  <strong data-oid="roubigv">supplier</strong> - Supplier
                  country code
                </li>
              </ul>
            </div>
            <div data-oid="m.rv36_">
              <h4 className="font-medium text-info mb-2" data-oid="s3sd3bh">
                Optional Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="d54r1tn"
              >
                <li data-oid="i38800v">
                  • <strong data-oid="3-plqjb">hts</strong> or{" "}
                  <strong data-oid="tjrr57d">htscode</strong> - HTS
                  classification
                </li>
                <li data-oid="7978eyq">
                  • <strong data-oid="ix87-js">weight</strong> - Product weight
                  in kg
                </li>
                <li data-oid="pa96ul3">
                  • <strong data-oid="dxgs:hf">category</strong> - Product
                  category
                </li>
                <li data-oid="gpxba2n">
                  • <strong data-oid="6im5m-6">description</strong> - Product
                  description
                </li>
              </ul>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={downloadSampleFile}
            className="w-full"
            data-oid="p45riwd"
          >
            <Download className="h-4 w-4 mr-2" data-oid="wt:np4-" />
            Download Sample CSV Template
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
