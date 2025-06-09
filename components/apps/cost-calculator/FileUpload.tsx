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
    <div className="space-y-6" data-oid="xamkhuy">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive
            ? "border-orange bg-orange/5"
            : "border-muted-foreground/25"
        }`}
        data-oid="eq2y2nc"
      >
        <CardContent className="p-8" data-oid="dreh-bb">
          <div
            className="text-center"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            data-oid="wr9k8qk"
          >
            <div
              className="mx-auto w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4"
              data-oid="m3ii73f"
            >
              <Upload
                className="h-8 w-8 text-muted-foreground"
                data-oid="gxf1esa"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2" data-oid="cikrvuq">
              Upload Your Product File
            </h3>
            <p className="text-muted-foreground mb-4" data-oid="vup0hlc">
              Drag and drop your CSV or Excel file here, or click to browse
            </p>

            <input
              type="file"
              accept=".csv,.xls,.xlsx"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
              disabled={isProcessing}
              data-oid="ydz0bw:"
            />

            <Button asChild disabled={isProcessing} data-oid="2pozky5">
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
                data-oid="sjb4-:3"
              >
                {isProcessing ? (
                  <>
                    <div
                      className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"
                      data-oid="fwznqkx"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" data-oid="orf25ax" />
                    Choose File
                  </>
                )}
              </label>
            </Button>

            <div
              className="flex flex-wrap justify-center gap-2 mt-4"
              data-oid="3.lce5y"
            >
              {FILE_UPLOAD.allowedExtensions.map((ext) => (
                <Badge key={ext} variant="secondary" data-oid="eu-52tk">
                  {ext}
                </Badge>
              ))}
            </div>

            <p
              className="text-xs text-muted-foreground mt-2"
              data-oid="jlim3ii"
            >
              Maximum file size: {formatFileSize(FILE_UPLOAD.maxSize)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* File Status */}
      {uploadedFile && (
        <Card data-oid="e0:cfyh">
          <CardContent className="p-4" data-oid="vizr0y_">
            <div
              className="flex items-center justify-between"
              data-oid="_g7bs:m"
            >
              <div className="flex items-center space-x-3" data-oid="tk7-ar3">
                <div
                  className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center"
                  data-oid="6ap.grk"
                >
                  <CheckCircle
                    className="h-5 w-5 text-success"
                    data-oid="ro6wpon"
                  />
                </div>
                <div data-oid="8d8giwk">
                  <p className="font-medium" data-oid="i8l:kxe">
                    {uploadedFile.name}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="v:6id_a"
                  >
                    {formatFileSize(uploadedFile.size)}
                  </p>
                </div>
              </div>
              {isProcessing && (
                <div
                  className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange"
                  data-oid="pl-f0.p"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-destructive" data-oid="geltkf0">
          <CardContent className="p-4" data-oid="0gkwbsd">
            <div className="flex items-center space-x-3" data-oid="i5avp15">
              <AlertCircle
                className="h-5 w-5 text-destructive flex-shrink-0"
                data-oid="lrwwit1"
              />

              <div data-oid="z9dkkbs">
                <p className="font-medium text-destructive" data-oid="-k9oe3r">
                  Upload Error
                </p>
                <p className="text-sm text-muted-foreground" data-oid="3.o9o75">
                  {error}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* File Format Help */}
      <Card data-oid="u4dh.a.">
        <CardHeader data-oid="io0bx57">
          <CardTitle className="text-lg" data-oid="948qtf2">
            File Format Requirements
          </CardTitle>
          <CardDescription data-oid="txpcbb_">
            Your file should include the following columns (case-insensitive):
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="tzq3.gj">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            data-oid="ogeymnf"
          >
            <div data-oid="rd4-5j7">
              <h4 className="font-medium text-success mb-2" data-oid="xi5a3:r">
                Required Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="5q546_7"
              >
                <li data-oid=".w:0amd">
                  • <strong data-oid="rtwoujg">name</strong> or{" "}
                  <strong data-oid="k1qur0y">product</strong> - Product name
                </li>
                <li data-oid="1bt5_6q">
                  • <strong data-oid=".ggeipp">cost</strong> or{" "}
                  <strong data-oid="myzyaoh">price</strong> - Unit cost in USD
                </li>
                <li data-oid="0xk.orx">
                  • <strong data-oid="vljm.l0">quantity</strong> or{" "}
                  <strong data-oid="5b-4sdb">qty</strong> - Order quantity
                </li>
                <li data-oid="0fvjf3w">
                  • <strong data-oid="9w-lcf8">country</strong> or{" "}
                  <strong data-oid="yr9xvj7">supplier</strong> - Supplier
                  country code
                </li>
              </ul>
            </div>
            <div data-oid="xfamb88">
              <h4 className="font-medium text-info mb-2" data-oid="8ulp7ys">
                Optional Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="r:nj_:3"
              >
                <li data-oid=":o_46p6">
                  • <strong data-oid="s5t.qjv">hts</strong> or{" "}
                  <strong data-oid="z6hzn_a">htscode</strong> - HTS
                  classification
                </li>
                <li data-oid="19n5tza">
                  • <strong data-oid="f.292k6">weight</strong> - Product weight
                  in kg
                </li>
                <li data-oid="o70fv5.">
                  • <strong data-oid="qjcelkf">category</strong> - Product
                  category
                </li>
                <li data-oid="xae1jya">
                  • <strong data-oid="x3:f3_a">description</strong> - Product
                  description
                </li>
              </ul>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={downloadSampleFile}
            className="w-full"
            data-oid="ysv-.6j"
          >
            <Download className="h-4 w-4 mr-2" data-oid="3j-ji_3" />
            Download Sample CSV Template
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
