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
    <div className="space-y-6" data-oid="xy.6emo">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive
            ? "border-orange bg-orange/5"
            : "border-muted-foreground/25"
        }`}
        data-oid="g3f7w-l"
      >
        <CardContent className="p-8" data-oid="wxpz9ax">
          <div
            className="text-center"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            data-oid="y.9ud7z"
          >
            <div
              className="mx-auto w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4"
              data-oid="rt6qemu"
            >
              <Upload
                className="h-8 w-8 text-muted-foreground"
                data-oid="-0pfuiz"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2" data-oid="5:t_w3z">
              Upload Your Product File
            </h3>
            <p className="text-muted-foreground mb-4" data-oid="oq3z-k_">
              Drag and drop your CSV or Excel file here, or click to browse
            </p>

            <input
              type="file"
              accept=".csv,.xls,.xlsx"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
              disabled={isProcessing}
              data-oid="qxwqo:w"
            />

            <Button asChild disabled={isProcessing} data-oid="z8z.93e">
              <label
                htmlFor="file-upload"
                className="cursor-pointer"
                data-oid="unn0zd5"
              >
                {isProcessing ? (
                  <>
                    <div
                      className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"
                      data-oid="103lbsg"
                    />
                    Processing...
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4 mr-2" data-oid="6r987-6" />
                    Choose File
                  </>
                )}
              </label>
            </Button>

            <div
              className="flex flex-wrap justify-center gap-2 mt-4"
              data-oid="d634hwm"
            >
              {FILE_UPLOAD.allowedExtensions.map((ext) => (
                <Badge key={ext} variant="secondary" data-oid="qw36up-">
                  {ext}
                </Badge>
              ))}
            </div>

            <p
              className="text-xs text-muted-foreground mt-2"
              data-oid="dce7lha"
            >
              Maximum file size: {formatFileSize(FILE_UPLOAD.maxSize)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* File Status */}
      {uploadedFile && (
        <Card data-oid="gwm:b4.">
          <CardContent className="p-4" data-oid="1rl6ch0">
            <div
              className="flex items-center justify-between"
              data-oid="50glof_"
            >
              <div className="flex items-center space-x-3" data-oid="2505bj2">
                <div
                  className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center"
                  data-oid="67_7371"
                >
                  <CheckCircle
                    className="h-5 w-5 text-success"
                    data-oid="68irmkr"
                  />
                </div>
                <div data-oid=":8tnyqe">
                  <p className="font-medium" data-oid="4elh5n9">
                    {uploadedFile.name}
                  </p>
                  <p
                    className="text-sm text-muted-foreground"
                    data-oid="p:8b7be"
                  >
                    {formatFileSize(uploadedFile.size)}
                  </p>
                </div>
              </div>
              {isProcessing && (
                <div
                  className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange"
                  data-oid="toqacii"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-destructive" data-oid="k3dpuvo">
          <CardContent className="p-4" data-oid="jiq1g_v">
            <div className="flex items-center space-x-3" data-oid="8:t1b0a">
              <AlertCircle
                className="h-5 w-5 text-destructive flex-shrink-0"
                data-oid="i6.2c8q"
              />

              <div data-oid="e9q6l2o">
                <p className="font-medium text-destructive" data-oid="8fivd3a">
                  Upload Error
                </p>
                <p className="text-sm text-muted-foreground" data-oid="-:rwc_z">
                  {error}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* File Format Help */}
      <Card data-oid="b:k7xh0">
        <CardHeader data-oid="ke159_z">
          <CardTitle className="text-lg" data-oid="gp:1sm:">
            File Format Requirements
          </CardTitle>
          <CardDescription data-oid="nbjwyyr">
            Your file should include the following columns (case-insensitive):
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="7o-5f2r">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
            data-oid="s1rqe2m"
          >
            <div data-oid="z6tlf6-">
              <h4 className="font-medium text-success mb-2" data-oid="va-r7mu">
                Required Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="u35mint"
              >
                <li data-oid="6.9v:zf">
                  • <strong data-oid="n0odu8t">name</strong> or{" "}
                  <strong data-oid="rvnex:x">product</strong> - Product name
                </li>
                <li data-oid="pmety8j">
                  • <strong data-oid="m_3a4ai">cost</strong> or{" "}
                  <strong data-oid="lgmbwdh">price</strong> - Unit cost in USD
                </li>
                <li data-oid="iwn-t18">
                  • <strong data-oid="zh8zz1j">quantity</strong> or{" "}
                  <strong data-oid="ljkfl6w">qty</strong> - Order quantity
                </li>
                <li data-oid="e58wek6">
                  • <strong data-oid="kkg4hxy">country</strong> or{" "}
                  <strong data-oid="u6ggy6y">supplier</strong> - Supplier
                  country code
                </li>
              </ul>
            </div>
            <div data-oid="c59ayfy">
              <h4 className="font-medium text-info mb-2" data-oid="3hcir2t">
                Optional Columns:
              </h4>
              <ul
                className="text-sm text-muted-foreground space-y-1"
                data-oid="houcxz_"
              >
                <li data-oid="5ultz61">
                  • <strong data-oid="jo2azn_">hts</strong> or{" "}
                  <strong data-oid="2rnbbdq">htscode</strong> - HTS
                  classification
                </li>
                <li data-oid="va3xf6p">
                  • <strong data-oid="hsbkvqq">weight</strong> - Product weight
                  in kg
                </li>
                <li data-oid="4nc.t3d">
                  • <strong data-oid="q_jfrc2">category</strong> - Product
                  category
                </li>
                <li data-oid="xokfe-.">
                  • <strong data-oid="jbbf0l3">description</strong> - Product
                  description
                </li>
              </ul>
            </div>
          </div>

          <Button
            variant="outline"
            onClick={downloadSampleFile}
            className="w-full"
            data-oid="p:q-gy:"
          >
            <Download className="h-4 w-4 mr-2" data-oid="c:u:qsz" />
            Download Sample CSV Template
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
