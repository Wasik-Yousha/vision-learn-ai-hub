
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, FileText, Image, FileSpreadsheet } from 'lucide-react';

interface DocumentUploadProps {
  onUpload: (file: File) => void;
}

const DocumentUpload = ({ onUpload }: DocumentUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint',
      'image/jpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedTypes.includes(file.type)) {
      onUpload(file);
    } else {
      alert('Please upload a PDF, PowerPoint, or image file.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return <FileText className="h-6 w-6" />;
    if (type.includes('presentation')) return <FileSpreadsheet className="h-6 w-6" />;
    if (type.includes('image')) return <Image className="h-6 w-6" />;
    return <FileText className="h-6 w-6" />;
  };

  return (
    <Card
      className={`border-2 border-dashed transition-colors ${
        isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 bg-purple-100 rounded-full">
            <Upload className="h-8 w-8 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Upload your document</h3>
            <p className="text-sm text-gray-600">
              Drag and drop or click to upload PDF, PowerPoint, or images
            </p>
          </div>
          <Button onClick={handleButtonClick} className="bg-purple-600 hover:bg-purple-700">
            Choose File
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.pptx,.ppt,.jpg,.jpeg,.png,.gif"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileUpload(file);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentUpload;
