import React from 'react';
import { Trophy, Star, BookOpen, Target, Users, Award } from 'lucide-react';
import { mockUser, mockSubjects, mockQuizzes, mockLeaderboard } from '../data/mockData';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">LearnJoy</span>
          </div>
          
          <nav className="space-y-3">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center space-x-3 w-full p-3 rounded-lg bg-blue-50 text-blue-600 font-medium"
            >
              <Target className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
              <BookOpen className="h-5 w-5" />
              <span>Subjects</span>
            </button>
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">
              <Trophy className="h-5 w-5" />
              <span>Quizzes</span>
            </button>
            <button
              onClick={() => onNavigate('rewards')}
              className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
            >
              <Award className="h-5 w-5" />
              <span>Rewards</span>
            </button>
            <button
              onClick={() => onNavigate('profile')}
              className="flex items-center space-x-3 w-full p-3 rounded-lg text-gray-600 hover:bg-gray-50 font-medium"
            >
              <Users className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </nav>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <p className="font-semibold text-gray-800">{mockUser.name}</p>
                <p className="text-sm text-gray-600">{mockUser.totalPoints} points</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {mockUser.name.split(' ')[0]}! 🎉
          </h1>
          <p className="text-gray-600">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Points</p>
                <p className="text-2xl font-bold">{mockUser.totalPoints}</p>
              </div>
              <Star className="h-8 w-8 text-blue-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Subjects Completed</p>
                <p className="text-2xl font-bold">{mockUser.completedSubjects}/{mockUser.totalSubjects}</p>
              </div>
              <BookOpen className="h-8 w-8 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Badges Earned</p>
                <p className="text-2xl font-bold">{mockUser.badges.filter(b => b.earned).length}</p>
              </div>
              <Trophy className="h-8 w-8 text-purple-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Rank</p>
                <p className="text-2xl font-bold">#1</p>
              </div>
              <Award className="h-8 w-8 text-orange-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Subjects Progress */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Subject Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockSubjects.map((subject) => (
                  <div key={subject.id} className="border rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{subject.icon}</span>
                        <span className="font-semibold text-gray-800">{subject.name}</span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${subject.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      {subject.completedLessons}/{subject.totalLessons} lessons completed
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Quizzes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Available Quizzes</h2>
              <div className="space-y-4">
                {mockQuizzes.map((quiz) => (
                  <div key={quiz.id} className="border rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{quiz.title}</h3>
                        <p className="text-sm text-gray-600">{quiz.subject} • {quiz.questions} questions • {quiz.points} points</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-600' :
                        quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {quiz.difficulty}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        {quiz.completed ? 'Retry' : 'Start Quiz'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🏆 Leaderboard</h2>
            <div className="space-y-4">
              {mockLeaderboard.map((entry, index) => (
                <div key={entry.id} className={`flex items-center space-x-3 p-3 rounded-lg ${
                  index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' :
                  entry.name === mockUser.name ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-500 text-white' :
                    index === 1 ? 'bg-gray-400 text-white' :
                    index === 2 ? 'bg-orange-400 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {entry.rank}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{entry.name}</p>
                    <p className="text-sm text-gray-600">{entry.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">{entry.points}</p>
                    <p className="text-xs text-gray-500">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;