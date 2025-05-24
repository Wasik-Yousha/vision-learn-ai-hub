
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Upload, FileText, Image, FileSpreadsheet } from 'lucide-react';
import DocumentPreview from '@/components/DocumentPreview';

const DocumentUploadPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    id: string;
    name: string;
    type: string;
    url: string;
    uploadProgress: number;
  }>>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const fileId = Date.now().toString() + Math.random().toString();
      const newFile = {
        id: fileId,
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        uploadProgress: 0
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, uploadProgress: Math.min(f.uploadProgress + 10, 100) }
              : f
          )
        );
      }, 200);

      setTimeout(() => clearInterval(interval), 2000);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Document Upload</h1>
          <p className="text-gray-600">Upload your documents (PDF, Images, PowerPoint) for AI processing</p>
        </div>

        {/* Upload Area */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                isDragOver ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
              }`}
              onDrop={handleDrop}
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
            >
              <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Drop files here or click to upload</h3>
              <p className="text-gray-500 mb-4">Supports PDF, Images, and PowerPoint files</p>
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.pptx,.ppt"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Choose Files
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Uploaded Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.id} className="border rounded-lg p-4">
                    <DocumentPreview document={file} />
                    {file.uploadProgress < 100 && (
                      <div className="mt-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Uploading...</span>
                          <span>{file.uploadProgress}%</span>
                        </div>
                        <Progress value={file.uploadProgress} className="w-full" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadPage;
