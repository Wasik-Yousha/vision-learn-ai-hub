
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Image, FileSpreadsheet, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DocumentPreviewProps {
  document: {
    name: string;
    type: string;
    url: string;
  };
}

const DocumentPreview = ({ document }: DocumentPreviewProps) => {
  const getFileIcon = () => {
    if (document.type.includes('pdf')) return <FileText className="h-6 w-6 text-red-500" />;
    if (document.type.includes('presentation')) return <FileSpreadsheet className="h-6 w-6 text-orange-500" />;
    if (document.type.includes('image')) return <Image className="h-6 w-6 text-blue-500" />;
    return <FileText className="h-6 w-6 text-gray-500" />;
  };

  const renderPreview = () => {
    if (document.type.includes('image')) {
      return (
        <div className="mt-2">
          <img
            src={document.url}
            alt={document.name}
            className="max-w-full h-32 object-cover rounded border"
          />
        </div>
      );
    }

    return (
      <div className="mt-2 p-4 bg-gray-50 rounded border text-center">
        <div className="text-sm text-gray-600">
          {document.type.includes('pdf') && 'PDF Document Preview'}
          {document.type.includes('presentation') && 'PowerPoint Preview'}
        </div>
      </div>
    );
  };

  return (
    <Card className="bg-gray-50">
      <CardContent className="p-3">
        <div className="flex items-center gap-2">
          {getFileIcon()}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">{document.name}</div>
            <div className="text-xs text-gray-500">
              {document.type.split('/')[1]?.toUpperCase()}
            </div>
          </div>
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        {renderPreview()}
      </CardContent>
    </Card>
  );
};

export default DocumentPreview;
