
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Send, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import DocumentUpload from './DocumentUpload';
import ChatMessage from './ChatMessage';
import ProcessingOptions from './ProcessingOptions';

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

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your AI learning assistant. Upload a document to get started with summaries, notes, flashcards, or quizzes.',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'I understand your request. Please upload a document or ask me anything about your learning materials.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleDocumentUpload = (file: File) => {
    const documentMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: `Uploaded document: ${file.name}`,
      timestamp: new Date(),
      document: {
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      }
    };

    setMessages(prev => [...prev, documentMessage]);
    setIsProcessing(true);
    setProgress(0);

    // Simulate processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">EduVision</h1>
          <Link to="/community">
            <Button variant="secondary" size="sm" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Community
            </Button>
          </Link>
        </div>
      </div>

      {/* Progress Bar */}
      {isProcessing && (
        <div className="max-w-4xl mx-auto w-full p-4">
          <div className="text-sm text-gray-600 mb-2">Processing document...</div>
          <Progress value={progress} className="w-full" />
        </div>
      )}

      {/* Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Document Upload Area */}
      <div className="max-w-4xl mx-auto w-full p-4">
        <DocumentUpload onUpload={handleDocumentUpload} />
      </div>

      {/* Processing Options */}
      {messages.some(m => m.document) && !isProcessing && (
        <div className="max-w-4xl mx-auto w-full p-4">
          <ProcessingOptions onSelect={(option) => {
            const optionMessage: Message = {
              id: Date.now().toString(),
              type: 'user',
              content: `Generate ${option}`,
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, optionMessage]);
          }} />
        </div>
      )}

      {/* Input Area */}
      <div className="border-t bg-white p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything about your documents..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
