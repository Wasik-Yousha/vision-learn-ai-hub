
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Image, FileSpreadsheet } from 'lucide-react';
import DocumentPreview from './DocumentPreview';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  document?: {
    name: string;
    type: string;
    url: string;
  };
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <Card className={`max-w-xs sm:max-w-md md:max-w-lg ${isUser ? 'bg-purple-100' : 'bg-white'}`}>
        <CardContent className="p-3">
          <div className="text-sm">{message.content}</div>
          {message.document && (
            <div className="mt-3">
              <DocumentPreview document={message.document} />
            </div>
          )}
          <div className="text-xs text-gray-500 mt-2">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatMessage;
