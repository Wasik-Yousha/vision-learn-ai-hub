import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Star, ArrowLeft, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityNote {
  id: string;
  title: string;
  topic: string;
  summary: string;
  author: string;
  rating: number;
  views: number;
  likes: number;
  createdAt: Date;
}

const CollaborativePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');

  // Mock data for community notes
  const communityNotes: CommunityNote[] = [
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      topic: 'AI & ML',
      summary: 'Comprehensive overview of machine learning concepts, algorithms, and applications in modern technology.',
      author: 'Sarah Chen',
      rating: 4.8,
      views: 1234,
      likes: 89,
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Physics: Quantum Mechanics Basics',
      topic: 'Physics',
      summary: 'Fundamental principles of quantum mechanics explained with clear examples and mathematical foundations.',
      author: 'Dr. Michael Johnson',
      rating: 4.6,
      views: 892,
      likes: 67,
      createdAt: new Date('2024-01-10')
    },
    {
      id: '3',
      title: 'History: World War II Timeline',
      topic: 'History',
      summary: 'Detailed timeline of major events during World War II with analysis of key turning points.',
      author: 'Emma Rodriguez',
      rating: 4.7,
      views: 756,
      likes: 54,
      createdAt: new Date('2024-01-08')
    }
  ];

  const topics = ['all', 'AI & ML', 'Physics', 'History', 'Mathematics', 'Biology', 'Chemistry'];

  const filteredNotes = communityNotes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === 'all' || note.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-6">
        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search notes by title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
                className={selectedTopic === topic ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {topic === 'all' ? 'All Topics' : topic}
              </Button>
            ))}
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-2">{note.title}</CardTitle>
                    <div className="text-sm text-purple-600 font-medium mt-1">{note.topic}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{note.summary}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">{renderStars(note.rating)}</div>
                    <span className="text-sm text-gray-600">{note.rating}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {note.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {note.likes}
                      </div>
                    </div>
                    <div>by {note.author}</div>
                  </div>

                  <div className="pt-2 border-t">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      View Notes & Summary
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">No notes found matching your search criteria.</div>
            <Button variant="outline" onClick={() => {setSearchQuery(''); setSelectedTopic('all');}}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollaborativePage;
