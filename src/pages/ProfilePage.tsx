
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { User, Trophy, BookOpen, Brain, Gamepad2, Settings, FileText, Calendar, Star } from 'lucide-react';

const ProfilePage = () => {
  const [userStats] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joinDate: 'January 2024',
    totalPoints: 1250,
    documentsUploaded: 34,
    notesGenerated: 48,
    flashcardsCreated: 156,
    quizzesCompleted: 23,
    currentLevel: 8,
    progressToNextLevel: 75,
    overallScore: 87,
    weeklyProgress: 12,
    studyStreak: 7
  });

  const [uploadedDocuments] = useState([
    {
      id: '1',
      name: 'Machine Learning Fundamentals.pdf',
      type: 'PDF',
      uploadDate: '2024-01-20',
      size: '2.4 MB',
      processed: true,
      notesGenerated: true,
      flashcardsCreated: true,
      quizTaken: true
    },
    {
      id: '2',
      name: 'Quantum Physics Lecture.pptx',
      type: 'PowerPoint',
      uploadDate: '2024-01-18',
      size: '5.1 MB',
      processed: true,
      notesGenerated: true,
      flashcardsCreated: false,
      quizTaken: false
    },
    {
      id: '3',
      name: 'Chemistry Notes.jpg',
      type: 'Image',
      uploadDate: '2024-01-15',
      size: '1.2 MB',
      processed: true,
      notesGenerated: false,
      flashcardsCreated: true,
      quizTaken: true
    },
    {
      id: '4',
      name: 'Biology Textbook Chapter 5.pdf',
      type: 'PDF',
      uploadDate: '2024-01-12',
      size: '3.7 MB',
      processed: false,
      notesGenerated: false,
      flashcardsCreated: false,
      quizTaken: false
    }
  ]);

  const achievements = [
    { id: 1, title: 'First Upload', description: 'Uploaded your first document', earned: true },
    { id: 2, title: 'Note Master', description: 'Generated 50 AI notes', earned: false },
    { id: 3, title: 'Quiz Champion', description: 'Completed 20 quizzes', earned: true },
    { id: 4, title: 'Study Streak', description: '7 days of consecutive studying', earned: true },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProcessingIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-4 w-4 text-red-500" />;
      case 'PowerPoint':
        return <FileText className="h-4 w-4 text-orange-500" />;
      case 'Image':
        return <FileText className="h-4 w-4 text-blue-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ChatBot />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile & Performance</h1>
          <p className="text-gray-600">Track your learning progress and achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <CardTitle>{userStats.name}</CardTitle>
                <p className="text-gray-600">{userStats.email}</p>
                <p className="text-sm text-gray-500">Member since {userStats.joinDate}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-purple-600">Level {userStats.currentLevel}</div>
                  <div className="text-sm text-gray-600 mb-2">Progress to Level {userStats.currentLevel + 1}</div>
                  <Progress value={userStats.progressToNextLevel} className="w-full" />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Performance Score */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Performance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className={`text-4xl font-bold ${getScoreColor(userStats.overallScore)}`}>
                    {userStats.overallScore}%
                  </div>
                  <div className="text-sm text-gray-600">Overall Performance</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Weekly Progress</span>
                    <span className="text-sm font-medium">+{userStats.weeklyProgress}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Study Streak</span>
                    <span className="text-sm font-medium">{userStats.studyStreak} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Points</span>
                    <span className="text-sm font-medium">{userStats.totalPoints}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats and Documents */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <BookOpen className="mx-auto h-8 w-8 text-blue-500 mb-2" />
                    <div className="text-2xl font-bold">{userStats.documentsUploaded}</div>
                    <div className="text-sm text-gray-600">Documents</div>
                  </div>
                  <div className="text-center">
                    <BookOpen className="mx-auto h-8 w-8 text-green-500 mb-2" />
                    <div className="text-2xl font-bold">{userStats.notesGenerated}</div>
                    <div className="text-sm text-gray-600">Notes</div>
                  </div>
                  <div className="text-center">
                    <Brain className="mx-auto h-8 w-8 text-orange-500 mb-2" />
                    <div className="text-2xl font-bold">{userStats.flashcardsCreated}</div>
                    <div className="text-sm text-gray-600">Flashcards</div>
                  </div>
                  <div className="text-center">
                    <Gamepad2 className="mx-auto h-8 w-8 text-purple-500 mb-2" />
                    <div className="text-2xl font-bold">{userStats.quizzesCompleted}</div>
                    <div className="text-sm text-gray-600">Quizzes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Uploaded Documents */}
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedDocuments.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getProcessingIcon(doc.type)}
                        <div className="flex-1">
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600">
                            {doc.size} • Uploaded {doc.uploadDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {doc.notesGenerated && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" title="Notes Generated" />
                          )}
                          {doc.flashcardsCreated && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" title="Flashcards Created" />
                          )}
                          {doc.quizTaken && (
                            <div className="w-2 h-2 bg-purple-500 rounded-full" title="Quiz Taken" />
                          )}
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          doc.processed 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {doc.processed ? 'Processed' : 'Processing'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id} 
                      className={`p-4 rounded-lg border ${
                        achievement.earned 
                          ? 'bg-purple-50 border-purple-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Trophy className={`h-6 w-6 ${
                          achievement.earned ? 'text-purple-600' : 'text-gray-400'
                        }`} />
                        <div className="flex-1">
                          <div className={`font-medium ${
                            achievement.earned ? 'text-purple-900' : 'text-gray-600'
                          }`}>
                            {achievement.title}
                          </div>
                          <div className="text-sm text-gray-600">
                            {achievement.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
