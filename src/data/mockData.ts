export interface User {
  id: number;
  name: string;
  class: string;
  location: string;
  totalPoints: number;
  badges: Badge[];
  completedSubjects: number;
  totalSubjects: number;
  recentActivities: Activity[];
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
}

export interface Activity {
  id: number;
  type: string;
  subject: string;
  points: number;
  date: string;
}

export interface Subject {
  id: number;
  name: string;
  icon: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

export interface Quiz {
  id: number;
  title: string;
  subject: string;
  questions: number;
  points: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
}

export interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
  rank: number;
  location: string;
}

export const mockUser: User = {
  id: 1,
  name: "Priya Sharma",
  class: "Class 8",
  location: "Village Rampur, Uttar Pradesh",
  totalPoints: 1250,
  badges: [
    { id: 1, name: "Quiz Master", description: "Completed 10 quizzes", icon: "🏆", earned: true, earnedDate: "2024-01-15" },
    { id: 2, name: "Math Wizard", description: "100% in Math quiz", icon: "🧙‍♂️", earned: true, earnedDate: "2024-01-10" },
    { id: 3, name: "Science Explorer", description: "Complete Science module", icon: "🔬", earned: false },
    { id: 4, name: "Language Champion", description: "Master Hindi lessons", icon: "📚", earned: true, earnedDate: "2024-01-08" }
  ],
  completedSubjects: 3,
  totalSubjects: 6,
  recentActivities: [
    { id: 1, type: "Quiz Completed", subject: "Mathematics", points: 85, date: "2024-01-15" },
    { id: 2, type: "Lesson Finished", subject: "Science", points: 45, date: "2024-01-14" },
    { id: 3, type: "Badge Earned", subject: "Quiz Master", points: 100, date: "2024-01-13" }
  ]
};

export const mockSubjects: Subject[] = [
  { id: 1, name: "Mathematics", icon: "➕", progress: 85, totalLessons: 20, completedLessons: 17 },
  { id: 2, name: "Science", icon: "🔬", progress: 60, totalLessons: 25, completedLessons: 15 },
  { id: 3, name: "Hindi", icon: "📚", progress: 100, totalLessons: 15, completedLessons: 15 },
  { id: 4, name: "English", icon: "🌍", progress: 45, totalLessons: 18, completedLessons: 8 },
  { id: 5, name: "Social Studies", icon: "🏛️", progress: 30, totalLessons: 22, completedLessons: 7 },
  { id: 6, name: "Computer", icon: "💻", progress: 75, totalLessons: 12, completedLessons: 9 }
];

export const mockQuizzes: Quiz[] = [
  { id: 1, title: "Basic Arithmetic", subject: "Mathematics", questions: 10, points: 50, difficulty: "Easy", completed: false },
  { id: 2, title: "Plant Life Cycle", subject: "Science", questions: 15, points: 75, difficulty: "Medium", completed: true },
  { id: 3, title: "Hindi Grammar", subject: "Hindi", questions: 12, points: 60, difficulty: "Easy", completed: false },
  { id: 4, title: "States of India", subject: "Social Studies", questions: 20, points: 100, difficulty: "Hard", completed: false }
];

export const mockLeaderboard: LeaderboardEntry[] = [
  { id: 1, name: "Priya Sharma", points: 1250, rank: 1, location: "Rampur" },
  { id: 2, name: "Amit Kumar", points: 1180, rank: 2, location: "Sultanpur" },
  { id: 3, name: "Kavya Patel", points: 1150, rank: 3, location: "Bharuch" },
  { id: 4, name: "Rohit Singh", points: 1120, rank: 4, location: "Meerut" },
  { id: 5, name: "Sneha Gupta", points: 1085, rank: 5, location: "Kanpur" }
];