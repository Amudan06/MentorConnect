"use client";

import { Award, Lock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const achievements = [
  {
    id: 1,
    name: "First Connection",
    description: "Connected with your first mentor",
    icon: "🤝",
    earnedDate: "Jan 15, 2024",
    rarity: "Common",
    earned: true,
    points: 10,
  },
  {
    id: 2,
    name: "Quick Learner",
    description: "Completed 5 mentoring sessions",
    icon: "⚡",
    earnedDate: "Jan 20, 2024",
    rarity: "Uncommon",
    earned: true,
    points: 25,
  },
  {
    id: 3,
    name: "Knowledge Seeker",
    description: "Attended 3 workshops",
    icon: "📚",
    earnedDate: "Feb 1, 2024",
    rarity: "Rare",
    earned: true,
    points: 50,
  },
  {
    id: 4,
    name: "Rising Star",
    description: "Received 5-star rating from a mentor",
    icon: "⭐",
    earnedDate: "Feb 5, 2024",
    rarity: "Epic",
    earned: true,
    points: 100,
  },
  {
    id: 5,
    name: "Dedicated Student",
    description: "Complete 10 mentoring sessions",
    icon: "🎓",
    earnedDate: null,
    rarity: "Uncommon",
    earned: false,
    points: 25,
    progress: 70,
  },
  {
    id: 6,
    name: "Network Builder",
    description: "Connect with 5 different mentors",
    icon: "🌐",
    earnedDate: null,
    rarity: "Rare",
    earned: false,
    points: 50,
    progress: 60,
  },
  {
    id: 7,
    name: "Community Leader",
    description: "Help 10 mentees achieve their goals",
    icon: "👑",
    earnedDate: null,
    rarity: "Epic",
    earned: false,
    points: 100,
    progress: 20,
  },
  {
    id: 8,
    name: "Perfect Attendance",
    description: "Attend 10 events without missing any",
    icon: "✅",
    earnedDate: null,
    rarity: "Rare",
    earned: false,
    points: 50,
    progress: 30,
  },
  {
    id: 9,
    name: "Master Mentor",
    description: "Complete 100 mentoring sessions as a mentor",
    icon: "🏆",
    earnedDate: null,
    rarity: "Legendary",
    earned: false,
    points: 500,
    progress: 12,
  },
  {
    id: 10,
    name: "Early Adopter",
    description: "Join within the first month of launch",
    icon: "🚀",
    earnedDate: "Jan 15, 2024",
    rarity: "Rare",
    earned: true,
    points: 50,
  },
];

const leaderboard = [
  {
    rank: 1,
    name: "Sarah Johnson",
    points: 2450,
    achievements: 28,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    rank: 2,
    name: "Michael Chen",
    points: 2180,
    achievements: 25,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    rank: 3,
    name: "Emily Rodriguez",
    points: 2050,
    achievements: 24,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    rank: 4,
    name: "David Kim",
    points: 1890,
    achievements: 22,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    rank: 5,
    name: "Lisa Anderson",
    points: 1750,
    achievements: 21,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
  },
];

export default function AchievementsPage() {
  const earnedAchievements = achievements.filter((a) => a.earned);
  const lockedAchievements = achievements.filter((a) => !a.earned);
  const totalPoints = earnedAchievements.reduce((sum, a) => sum + a.points, 0);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-500";
      case "Uncommon":
        return "bg-green-500";
      case "Rare":
        return "bg-blue-500";
      case "Epic":
        return "bg-purple-500";
      case "Legendary":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Achievements</h1>
          <p className="text-muted-foreground">
            Track your milestones and celebrate your progress
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{earnedAchievements.length}/{achievements.length}</div>
                  <div className="text-sm text-muted-foreground">Achievements Unlocked</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Points Earned</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Lock className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{lockedAchievements.length}</div>
                  <div className="text-sm text-muted-foreground">Achievements to Unlock</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="earned" className="mb-8">
          <TabsList>
            <TabsTrigger value="earned">Earned ({earnedAchievements.length})</TabsTrigger>
            <TabsTrigger value="locked">Locked ({lockedAchievements.length})</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          {/* Earned Achievements */}
          <TabsContent value="earned" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earnedAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center">{achievement.icon}</div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-orange-500">
                        <Award className="h-4 w-4 mr-1" />
                        {achievement.points} points
                      </div>
                      <div className="text-muted-foreground">
                        {achievement.earnedDate}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Locked Achievements */}
          <TabsContent value="locked" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lockedAchievements.map((achievement) => (
                <Card key={achievement.id} className="opacity-75 hover:opacity-100 transition-opacity">
                  <CardHeader>
                    <div className="text-6xl mb-4 text-center grayscale">{achievement.icon}</div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{achievement.name}</CardTitle>
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                    </div>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {achievement.progress !== undefined && (
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} />
                      </div>
                    )}
                    <div className="flex items-center text-sm text-orange-500">
                      <Lock className="h-4 w-4 mr-1" />
                      {achievement.points} points when unlocked
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard */}
          <TabsContent value="leaderboard" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Contributors</CardTitle>
                <CardDescription>
                  See how you stack up against other members of the community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div
                      key={user.rank}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold">
                          #{user.rank}
                        </div>
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {user.achievements} achievements unlocked
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                          {user.points}
                        </div>
                        <div className="text-sm text-muted-foreground">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
