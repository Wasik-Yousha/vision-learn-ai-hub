
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Brain, Gamepad2 } from 'lucide-react';

interface ProcessingOptionsProps {
  onSelect: (option: string) => void;
}

const ProcessingOptions = ({ onSelect }: ProcessingOptionsProps) => {
  const options = [
    {
      id: 'summary',
      title: 'Summary',
      description: 'Create a concise summary',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-blue-500'
    },
    {
      id: 'notes',
      title: 'Notes',
      description: 'Generate detailed notes',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-green-500'
    },
    {
      id: 'flashcards',
      title: 'Flashcards',
      description: 'Create study flashcards',
      icon: <Brain className="h-5 w-5" />,
      color: 'bg-orange-500'
    },
    {
      id: 'quiz',
      title: 'Quiz Game',
      description: 'Generate interactive quiz',
      icon: <Gamepad2 className="h-5 w-5" />,
      color: 'bg-purple-500'
    }
  ];

  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">What would you like me to generate?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {options.map((option) => (
            <Button
              key={option.id}
              onClick={() => onSelect(option.title)}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50"
            >
              <div className={`p-2 rounded-full text-white ${option.color}`}>
                {option.icon}
              </div>
              <div className="text-center">
                <div className="font-medium text-sm">{option.title}</div>
                <div className="text-xs text-gray-500">{option.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessingOptions;
