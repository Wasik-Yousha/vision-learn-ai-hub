
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FileText, Search, Star } from 'lucide-react';

const DocumentSummaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [summaries] = useState([
    {
      id: '1',
      title: 'Introduction to Machine Learning',
      document: 'ML_Basics.pdf',
      summary: 'Machine learning is a subset of artificial intelligence that focuses on algorithms and statistical models that computer systems use to progressively improve their performance on a specific task without being explicitly programmed.',
      dateCreated: '2024-01-20',
      rating: 4.5
    },
    {
      id: '2',
      title: 'Quantum Physics Overview',
      document: 'Quantum_Physics.pdf',
      summary: 'Quantum physics is the branch of physics that deals with the behavior of matter and energy at the molecular, atomic, nuclear, and even smaller microscopic levels.',
      dateCreated: '2024-01-18',
      rating: 4.8
    }
  ]);

  const filteredSummaries = summaries.filter(summary =>
    summary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    summary.document.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Document Summaries</h1>
          <p className="text-gray-600">AI-generated summaries of your uploaded documents</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search summaries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Summaries Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredSummaries.map((summary) => (
            <Card key={summary.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{summary.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FileText className="h-4 w-4" />
                      <span>{summary.document}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm">{summary.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-4">{summary.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{summary.dateCreated}</span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    View Full Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSummaries.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No summaries found</h3>
            <p className="text-gray-500">Upload documents to generate AI summaries</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentSummaryPage;
