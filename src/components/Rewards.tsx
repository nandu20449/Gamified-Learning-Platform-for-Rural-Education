import React from 'react';
import { ArrowLeft, Trophy, Star, Gift, Crown, Medal, Award } from 'lucide-react';
import { mockUser } from '../data/mockData';

interface RewardsProps {
  onNavigate: (page: string) => void;
}

const virtualTrophies = [
  { id: 1, name: "Golden Scholar", description: "Complete 5 subjects with 90%+ score", icon: "👑", color: "from-yellow-400 to-yellow-600", earned: true },
  { id: 2, name: "Quiz Champion", description: "Win 20 quizzes in a row", icon: "🏆", color: "from-blue-400 to-blue-600", earned: true },
  { id: 3, name: "Learning Streak", description: "Study for 30 consecutive days", icon: "🔥", color: "from-orange-400 to-red-600", earned: false },
  { id: 4, name: "Knowledge Master", description: "Earn 2000 total points", icon: "🧠", color: "from-purple-400 to-purple-600", earned: false },
  { id: 5, name: "Team Player", description: "Help 10 classmates with homework", icon: "🤝", color: "from-green-400 to-green-600", earned: true },
  { id: 6, name: "Speed Learner", description: "Complete a subject in record time", icon: "⚡", color: "from-cyan-400 to-blue-600", earned: false }
];

const pointRewards = [
  { id: 1, name: "Extra Study Time", cost: 100, description: "Unlock bonus practice questions", icon: "📚", available: true },
  { id: 2, name: "Custom Avatar", cost: 200, description: "Personalize your profile picture", icon: "🎨", available: true },
  { id: 3, name: "Skip Quiz Timer", cost: 150, description: "Remove time limits from next quiz", icon: "⏰", available: true },
  { id: 4, name: "Hint Power-up", cost: 75, description: "Get hints for difficult questions", icon: "💡", available: true },
  { id: 5, name: "Double Points", cost: 300, description: "2x points for next completed lesson", icon: "✨", available: false },
  { id: 6, name: "Study Buddy", cost: 250, description: "AI tutor for personalized help", icon: "🤖", available: false }
];

const Rewards: React.FC<RewardsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Dashboard</span>
            </button>
            <div className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-blue-800">{mockUser.totalPoints} Points</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">🎉 Rewards Center 🎉</h1>
            <p className="text-xl text-purple-100 mb-6">
              Celebrate your achievements and redeem amazing rewards!
            </p>
            <div className="inline-flex items-center space-x-4 bg-white bg-opacity-20 rounded-full px-6 py-3">
              <Gift className="h-6 w-6" />
              <span className="text-lg font-semibold">
                {mockUser.badges.filter(b => b.earned).length} Badges Earned • {mockUser.totalPoints} Points Available
              </span>
            </div>
          </div>
        </div>

        {/* Virtual Trophies */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🏆 Trophy Collection</h2>
            <p className="text-gray-600 text-lg">Showcase your greatest learning achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {virtualTrophies.map((trophy) => (
              <div key={trophy.id} className={`relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                trophy.earned ? 'ring-2 ring-yellow-400' : 'opacity-75'
              }`}>
                {trophy.earned && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Medal className="h-4 w-4 text-white" />
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${trophy.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {trophy.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${trophy.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {trophy.name}
                  </h3>
                  <p className={`text-sm mb-4 ${trophy.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {trophy.description}
                  </p>
                  {trophy.earned ? (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      ✨ Achieved!
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm">
                      🔒 Keep Learning
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Point Rewards Store */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🛍️ Rewards Store</h2>
            <p className="text-gray-600 text-lg">Use your earned points to unlock special perks and features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pointRewards.map((reward) => (
              <div key={reward.id} className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                reward.available ? 'border-transparent hover:border-blue-200' : 'border-gray-200 opacity-60'
              }`}>
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl ${
                    reward.available ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    {reward.icon}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${reward.available ? 'text-gray-900' : 'text-gray-500'}`}>
                    {reward.name}
                  </h3>
                  <p className={`text-sm mb-4 ${reward.available ? 'text-gray-600' : 'text-gray-400'}`}>
                    {reward.description}
                  </p>
                  <div className={`flex items-center justify-center space-x-2 mb-4 ${
                    reward.available ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    <Star className="h-4 w-4" />
                    <span className="font-bold">{reward.cost} Points</span>
                  </div>
                  {reward.available ? (
                    mockUser.totalPoints >= reward.cost ? (
                      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Redeem Now
                      </button>
                    ) : (
                      <button disabled className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                        Need {reward.cost - mockUser.totalPoints} more points
                      </button>
                    )
                  ) : (
                    <button disabled className="w-full bg-gray-200 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Achievements */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🌟 My Achievement Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Earned Badges */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-500" />
                <span>Earned Badges ({mockUser.badges.filter(b => b.earned).length})</span>
              </h3>
              <div className="space-y-3">
                {mockUser.badges.filter(badge => badge.earned).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{badge.name}</p>
                      <p className="text-sm text-gray-600">{badge.description}</p>
                    </div>
                    <div className="text-yellow-600 font-semibold">
                      ✨ Earned
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Stats */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <Crown className="h-6 w-6 text-purple-500" />
                <span>Learning Stats</span>
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 font-semibold">Total Points Earned</span>
                    <span className="text-2xl font-bold text-blue-600">{mockUser.totalPoints}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 font-semibold">Subjects Completed</span>
                    <span className="text-2xl font-bold text-green-600">{mockUser.completedSubjects}/{mockUser.totalSubjects}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-800 font-semibold">Current Rank</span>
                    <span className="text-2xl font-bold text-purple-600">#1</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl">
                  <div className="flex justify-between items-center">
                    <span className="text-orange-800 font-semibold">Achievements Unlocked</span>
                    <span className="text-2xl font-bold text-orange-600">{mockUser.badges.filter(b => b.earned).length}/8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;