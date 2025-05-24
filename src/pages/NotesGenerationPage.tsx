import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { BookOpen, Search, Plus, Edit } from 'lucide-react';

const NotesGenerationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notes] = useState([
    {
      id: '1',
      title: 'Machine Learning Fundamentals',
      topic: 'AI & Technology',
      content: 'Key concepts include supervised learning, unsupervised learning, and reinforcement learning. Supervised learning uses labeled data to train models...',
      dateCreated: '2024-01-20',
      wordCount: 450
    },
    {
      id: '2',
      title: 'Quantum Mechanics Principles',
      topic: 'Physics',
      content: 'Quantum mechanics describes the behavior of particles at atomic and subatomic levels. Key principles include wave-particle duality, superposition...',
      dateCreated: '2024-01-18',
      wordCount: 320
    }
  ]);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ChatBot />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Notes Generation</h1>
            <p className="text-gray-600">Create and manage AI-generated notes from your documents</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Generate New Notes
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notes by title or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Notes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{note.title}</CardTitle>
                    <div className="text-sm text-purple-600 font-medium">{note.topic}</div>
                  </div>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{note.wordCount} words</span>
                  <span>{note.dateCreated}</span>
                </div>
                <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                  View Full Notes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes found</h3>
            <p className="text-gray-500">Generate AI notes from your uploaded documents</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesGenerationPage;
