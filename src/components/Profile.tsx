import React from 'react';
import { ArrowLeft, MapPin, Calendar, Trophy, Star, BookOpen, Activity } from 'lucide-react';
import { mockUser } from '../data/mockData';

interface ProfileProps {
  onNavigate: (page: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">{mockUser.name.charAt(0)}</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">{mockUser.name}</h1>
              <p className="text-blue-100 mb-4">{mockUser.class}</p>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{mockUser.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">{mockUser.totalPoints} Total Points</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="text-2xl font-bold">#{mockLeaderboard.find(entry => entry.name === mockUser.name)?.rank || 1}</p>
                <p className="text-sm text-blue-100">Global Rank</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{mockUser.completedSubjects}</p>
                    <p className="text-sm text-gray-600">Subjects Completed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{mockUser.badges.filter(b => b.earned).length}</p>
                    <p className="text-sm text-gray-600">Badges Earned</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{mockUser.totalPoints}</p>
                    <p className="text-sm text-gray-600">Total Points</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {mockUser.recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Activity className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{activity.type}</p>
                      <p className="text-sm text-gray-600">{activity.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">+{activity.points}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Progress</h2>
              <div className="space-y-4">
                {mockSubjects.map((subject) => (
                  <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{subject.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{subject.name}</p>
                        <p className="text-sm text-gray-600">
                          {subject.completedLessons}/{subject.totalLessons} lessons completed
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{subject.progress}%</p>
                      <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Badges & Achievements */}
          <div className="space-y-6">
            {/* Earned Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🏆 My Badges</h2>
              <div className="space-y-4">
                {mockUser.badges.filter(badge => badge.earned).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{badge.name}</p>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                      <p className="text-xs text-yellow-600">Earned on {badge.earnedDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🎯 Next Badges</h2>
              <div className="space-y-4">
                {mockUser.badges.filter(badge => !badge.earned).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-3 p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-70">
                    <span className="text-2xl grayscale">{badge.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-600">{badge.name}</p>
                      <p className="text-sm text-gray-500">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('dashboard')}
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg font-semibold transition-all"
                >
                  📚 Continue Learning
                </button>
                <button 
                  onClick={() => onNavigate('rewards')}
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-lg font-semibold transition-all"
                >
                  🎁 View Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const mockLeaderboard = [
  { id: 1, name: "Priya Sharma", points: 1250, rank: 1, location: "Rampur" },
  { id: 2, name: "Amit Kumar", points: 1180, rank: 2, location: "Sultanpur" },
  { id: 3, name: "Kavya Patel", points: 1150, rank: 3, location: "Bharuch" },
  { id: 4, name: "Rohit Singh", points: 1120, rank: 4, location: "Meerut" },
  { id: 5, name: "Sneha Gupta", points: 1085, rank: 5, location: "Kanpur" }
];

const mockSubjects = [
  { id: 1, name: "Mathematics", icon: "➕", progress: 85, totalLessons: 20, completedLessons: 17 },
  { id: 2, name: "Science", icon: "🔬", progress: 60, totalLessons: 25, completedLessons: 15 },
  { id: 3, name: "Hindi", icon: "📚", progress: 100, totalLessons: 15, completedLessons: 15 },
  { id: 4, name: "English", icon: "🌍", progress: 45, totalLessons: 18, completedLessons: 8 },
  { id: 5, name: "Social Studies", icon: "🏛️", progress: 30, totalLessons: 22, completedLessons: 7 },
  { id: 6, name: "Computer", icon: "💻", progress: 75, totalLessons: 12, completedLessons: 9 }
];