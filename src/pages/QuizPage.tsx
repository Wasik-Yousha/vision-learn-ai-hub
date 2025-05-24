
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Gamepad2, Trophy, Star, Clock } from 'lucide-react';

const QuizPage = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [quizzes] = useState([
    {
      id: '1',
      title: 'Machine Learning Quiz',
      topic: 'AI & Technology',
      questions: 15,
      timeLimit: 20,
      difficulty: 'Intermediate',
      bestScore: 85,
      attempts: 3
    },
    {
      id: '2',
      title: 'Physics Challenge',
      topic: 'Physics',
      questions: 12,
      timeLimit: 15,
      difficulty: 'Advanced',
      bestScore: 92,
      attempts: 2
    }
  ]);

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Game</h1>
          <p className="text-gray-600">Test your knowledge with gamified quizzes</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="mx-auto h-8 w-8 text-yellow-500 mb-2" />
              <div className="text-2xl font-bold text-gray-800">1,250</div>
              <div className="text-sm text-gray-600">Total Points</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="mx-auto h-8 w-8 text-purple-500 mb-2" />
              <div className="text-2xl font-bold text-gray-800">15</div>
              <div className="text-sm text-gray-600">Quizzes Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Gamepad2 className="mx-auto h-8 w-8 text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-gray-800">88%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </CardContent>
          </Card>
        </div>

        {/* Available Quizzes */}
        <div className="grid gap-6 md:grid-cols-2">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                    <div className="text-sm text-purple-600 font-medium mb-2">{quiz.topic}</div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-medium">{quiz.questions}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Time Limit:</span>
                    <span className="font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {quiz.timeLimit} min
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Best Score:</span>
                    <span className="font-medium text-green-600">{quiz.bestScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Attempts:</span>
                    <span className="font-medium">{quiz.attempts}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Progress to next level</div>
                  <Progress value={65} className="w-full" />
                </div>

                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => setActiveQuiz(quiz.id)}
                >
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {quizzes.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No quizzes available</h3>
            <p className="text-gray-500">Generate quizzes from your notes and documents</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
