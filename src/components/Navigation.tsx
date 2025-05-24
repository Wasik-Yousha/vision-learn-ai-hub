
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Upload, 
  FileText, 
  BookOpen, 
  Brain, 
  Gamepad2, 
  Users, 
  User 
} from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/upload', icon: Upload, label: 'Upload' },
    { path: '/summary', icon: FileText, label: 'Summary' },
    { path: '/notes', icon: BookOpen, label: 'Notes' },
    { path: '/flashcards', icon: Brain, label: 'Flashcards' },
    { path: '/quiz', icon: Gamepad2, label: 'Quiz' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            EduVision
          </Link>
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center gap-2 ${
                      isActive ? 'bg-purple-600 hover:bg-purple-700' : ''
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
