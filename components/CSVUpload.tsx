import React, { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';

interface CSVUploadProps {
  onUploadComplete?: (data: any[], file: File) => void;
  onError?: (error: string) => void;
  maxFileSizeMB?: number;
  allowedColumns?: string[];
  className?: string;
  endpoint?: string;
}

interface ParsedData {
  data: any[];
  errors: Papa.ParseError[];
  meta: Papa.ParseMeta;
}

const CSVUpload: React.FC<CSVUploadProps> = ({
  onUploadComplete,
  onError,
  maxFileSizeMB = 5,
  allowedColumns,
  className = '',
  endpoint = '/api/upload',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const maxSizeBytes = maxFileSizeMB * 1024 * 1024;

  const resetState = () => {
    setFile(null);
    setPreviewData([]);
    setError(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validateFile = (file: File): boolean => {
    // Check file type
    if (!file.name.endsWith('.csv')) {
      setError('Please upload a CSV file');
      onError?.('Please upload a CSV file');
      return false;
    }

    // Check file size
    if (file.size > maxSizeBytes) {
      setError(`File size exceeds the ${maxFileSizeMB}MB limit`);
      onError?.(`File size exceeds the ${maxFileSizeMB}MB limit`);
      return false;
    }

    return true;
  };

  const parseCSV = (file: File) => {
    setIsProcessing(true);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results: ParsedData) => {
        setIsProcessing(false);

        if (results.errors.length > 0) {
          const errorMsg = `CSV parsing error: ${results.errors[0].message}`;
          setError(errorMsg);
          onError?.(errorMsg);
          return;
        }

        // Validate required columns if specified
        if (allowedColumns && allowedColumns.length > 0) {
          const headers = Object.keys(results.data[0] || {});
          const missingColumns = allowedColumns.filter(col => !headers.includes(col));
          
          if (missingColumns.length > 0) {
            const errorMsg = `Missing required columns: ${missingColumns.join(', ')}`;
            setError(errorMsg);
            onError?.(errorMsg);
            return;
          }
        }

        // Show preview (first 5 rows)
        setPreviewData(results.data.slice(0, 5));
        setFile(file);
      },
      error: (error: Papa.ParseError) => {
        setIsProcessing(false);
        const errorMsg = `CSV parsing error: ${error.message}`;
        setError(errorMsg);
        onError?.(errorMsg);
      }
    });
  };

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const droppedFile = files[0];
      if (validateFile(droppedFile)) {
        parseCSV(droppedFile);
      }
    }
  }, [validateFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (validateFile(selectedFile)) {
        parseCSV(selectedFile);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsUploading(true);
      setError(null);
      
      // Create form data
      const formData = new FormData();
      formData.append('file', file);

      // Upload with progress tracking
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.addEventListener('load', () => {
        setIsUploading(false);
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          onUploadComplete?.(previewData, file);
          router.push('/dashboard/calculate');
        } else {
          const errorMsg = `Upload failed: ${xhr.statusText}`;
          setError(errorMsg);
          onError?.(errorMsg);
        }
      });

      xhr.addEventListener('error', () => {
        setIsUploading(false);
        const errorMsg = 'Upload failed due to network error';
        setError(errorMsg);
        onError?.(errorMsg);
      });

      xhr.open('POST', endpoint, true);
      xhr.send(formData);
    } catch (err: any) {
      setIsUploading(false);
      const errorMsg = `Upload error: ${err.message || 'Unknown error'}`;
      setError(errorMsg);
      onError?.(errorMsg);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragging 
            ? 'border-brand bg-brand/5' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".csv"
          className="hidden"
          disabled={isUploading}
        />
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="rounded-full bg-brand/10 p-3">
            <svg
              className="w-8 h-8 text-brand"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
          </div>
          
          {file ? (
            <div>
              <p className="text-sm font-medium text-gray-900">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-gray-900">
                Drop your CSV file here, or <span className="text-brand">browse</span>
              </p>
              <p className="text-xs text-gray-500">
                CSV files only, max {maxFileSizeMB}MB
              </p>
            </div>
          )}

          {isProcessing && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand"></div>
              <p className="text-sm text-gray-500">Processing file...</p>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {previewData.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Preview</h3>
          <p className="text-sm text-gray-500 mb-3">Showing first 5 rows of your data</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(previewData[0]).map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((cell: any, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {file && !isUploading && (
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={resetState}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleUpload}
            className="px-4 py-2 text-sm font-medium text-white bg-brand border border-transparent rounded-md hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            Upload & Continue
          </button>
        </div>
      )}

      {isUploading && (
        <div className="mt-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-brand">Uploading...</span>
            <span className="text-sm font-medium text-brand">{uploadProgress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-brand h-2.5 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSVUpload;
