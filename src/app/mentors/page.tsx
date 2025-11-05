"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, Star, Award, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Tech Lead at Google",
    location: "San Francisco, CA",
    expertise: ["AI/ML", "Leadership", "Career Growth"],
    rating: 4.9,
    sessions: 127,
    hourlyRate: 150,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    achievements: ["Top Mentor 2024", "AI Expert"],
    bio: "15+ years in tech leadership, passionate about helping others grow",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Meta",
    location: "New York, NY",
    expertise: ["Product Strategy", "Design Thinking", "Agile"],
    rating: 4.8,
    sessions: 98,
    hourlyRate: 120,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    achievements: ["Rising Star", "PM Pro"],
    bio: "Helping PMs navigate complex product challenges",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Manager at Amazon",
    location: "Seattle, WA",
    expertise: ["System Design", "Team Building", "Cloud Architecture"],
    rating: 5.0,
    sessions: 156,
    hourlyRate: 180,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    achievements: ["Elite Mentor", "Cloud Expert"],
    bio: "Scaling teams and systems at enterprise level",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Software Engineer at Netflix",
    location: "Los Angeles, CA",
    expertise: ["Full Stack", "React", "Node.js", "System Design"],
    rating: 4.7,
    sessions: 89,
    hourlyRate: 100,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    achievements: ["Code Master", "Full Stack Pro"],
    bio: "Building scalable web applications for millions of users",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "UX Director at Adobe",
    location: "Austin, TX",
    expertise: ["UX Design", "User Research", "Design Systems"],
    rating: 4.9,
    sessions: 134,
    hourlyRate: 140,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    achievements: ["Design Expert", "Top Mentor"],
    bio: "Creating delightful user experiences for global products",
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "Data Scientist at Microsoft",
    location: "Boston, MA",
    expertise: ["Data Science", "Python", "ML Models", "Analytics"],
    rating: 4.8,
    sessions: 112,
    hourlyRate: 130,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    achievements: ["Data Guru", "ML Expert"],
    bio: "Turning data into actionable insights and business value",
  },
];

const expertiseOptions = [
  "AI/ML",
  "Product Strategy",
  "System Design",
  "Leadership",
  "Full Stack",
  "UX Design",
  "Data Science",
  "Cloud Architecture",
];

export default function MentorsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filteredMentors = mentors
    .filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.expertise.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesExpertise =
        selectedExpertise.length === 0 ||
        selectedExpertise.some((exp) => mentor.expertise.includes(exp));

      return matchesSearch && matchesExpertise;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "sessions") return b.sessions - a.sessions;
      if (sortBy === "price-low") return a.hourlyRate - b.hourlyRate;
      if (sortBy === "price-high") return b.hourlyRate - a.hourlyRate;
      return 0;
    });

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Your Mentor</h1>
          <p className="text-muted-foreground">
            Browse through our community of {mentors.length} expert mentors
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, role, or skills..."
                className="w-full pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="sessions">Most Sessions</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {selectedExpertise.length > 0 && (
                <Badge className="ml-2" variant="secondary">
                  {selectedExpertise.length}
                </Badge>
              )}
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filter by Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {expertiseOptions.map((expertise) => (
                    <div key={expertise} className="flex items-center space-x-2">
                      <Checkbox
                        id={expertise}
                        checked={selectedExpertise.includes(expertise)}
                        onCheckedChange={() => toggleExpertise(expertise)}
                      />
                      <Label
                        htmlFor={expertise}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {expertise}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedExpertise.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedExpertise([])}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredMentors.length} mentor{filteredMentors.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Mentor Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>
                        {mentor.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{mentor.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {mentor.role}
                      </CardDescription>
                      <div className="flex items-center mt-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {mentor.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {mentor.bio}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-orange-400 text-orange-400 mr-1" />
                        <span className="font-medium">{mentor.rating}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {mentor.sessions}
                      </div>
                    </div>
                    <div className="font-semibold text-lg">
                      ${mentor.hourlyRate}
                      <span className="text-sm text-muted-foreground">/hr</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.achievements.map((achievement, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-orange-500 border-orange-500"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/mentors/${mentor.id}`} className="flex-1">
                      <Button className="w-full" variant="outline">
                        View Profile
                      </Button>
                    </Link>
                    <Link href={`/chat?mentor=${mentor.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-500">
                        Connect
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">
              No mentors found matching your criteria. Try adjusting your filters.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
