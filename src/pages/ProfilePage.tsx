
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { User, Trophy, BookOpen, Brain, Gamepad2, Settings } from 'lucide-react';

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
    progressToNextLevel: 75
  });

  const achievements = [
    { id: 1, title: 'First Upload', description: 'Uploaded your first document', earned: true },
    { id: 2, title: 'Note Master', description: 'Generated 50 AI notes', earned: false },
    { id: 3, title: 'Quiz Champion', description: 'Completed 20 quizzes', earned: true },
    { id: 4, title: 'Study Streak', description: '7 days of consecutive studying', earned: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
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
          </div>

          {/* Stats and Achievements */}
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
