import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  FileText, 
  BookOpen, 
  Brain, 
  Gamepad2, 
  Users,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: 'Upload Documents',
      description: 'Upload PDFs, images, and PowerPoint files for processing',
      icon: Upload,
      path: '/upload',
      color: 'bg-blue-500'
    },
    {
      title: 'Generate Summary',
      description: 'Create concise summaries from your documents',
      icon: FileText,
      path: '/summary',
      color: 'bg-green-500'
    },
    {
      title: 'AI Notes',
      description: 'Generate detailed notes with AI assistance',
      icon: BookOpen,
      path: '/notes',
      color: 'bg-orange-500'
    },
    {
      title: 'Flashcards',
      description: 'Create interactive flashcards for studying',
      icon: Brain,
      path: '/flashcards',
      color: 'bg-purple-500'
    },
    {
      title: 'Quiz Game',
      description: 'Test your knowledge with gamified quizzes',
      icon: Gamepad2,
      path: '/quiz',
      color: 'bg-red-500'
    },
    {
      title: 'Community',
      description: 'Share and discover notes from other users',
      icon: Users,
      path: '/community',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ChatBot />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to EduVision
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your AI-powered learning companion for document processing and knowledge enhancement
          </p>
          <Link to="/upload">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Powerful Learning Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.path} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className={`mx-auto p-4 rounded-full text-white ${feature.color} w-16 h-16 flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <Link to={feature.path}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Open {feature.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
