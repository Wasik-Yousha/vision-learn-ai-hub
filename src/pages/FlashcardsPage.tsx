
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Brain, Search, Plus, Play } from 'lucide-react';

const FlashcardsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [flashcardSets] = useState([
    {
      id: '1',
      title: 'Machine Learning Terms',
      topic: 'AI & Technology',
      cardCount: 25,
      dateCreated: '2024-01-20',
      difficulty: 'Intermediate'
    },
    {
      id: '2',
      title: 'Physics Formulas',
      topic: 'Physics',
      cardCount: 18,
      dateCreated: '2024-01-18',
      difficulty: 'Advanced'
    }
  ]);

  const filteredSets = flashcardSets.filter(set =>
    set.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    set.topic.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Flashcards</h1>
            <p className="text-gray-600">Create and study with AI-generated flashcards</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Flashcard Set
          </Button>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search flashcard sets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Flashcard Sets Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSets.map((set) => (
            <Card key={set.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{set.title}</CardTitle>
                    <div className="text-sm text-purple-600 font-medium mb-2">{set.topic}</div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(set.difficulty)}`}>
                      {set.difficulty}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{set.cardCount} cards</span>
                  <span>{set.dateCreated}</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                    <Play className="h-4 w-4 mr-2" />
                    Study
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSets.length === 0 && (
          <div className="text-center py-12">
            <Brain className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No flashcard sets found</h3>
            <p className="text-gray-500">Create flashcards from your notes and documents</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardsPage;
