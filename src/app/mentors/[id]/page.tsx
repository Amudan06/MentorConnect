"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Star,
  Award,
  MapPin,
  Briefcase,
  Calendar,
  MessageSquare,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

const mentorData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Tech Lead at Google",
    location: "San Francisco, CA",
    expertise: ["AI/ML", "Leadership", "Career Growth", "Python", "TensorFlow"],
    rating: 4.9,
    reviews: 87,
    sessions: 127,
    hourlyRate: 150,
    responseTime: "< 2 hours",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    achievements: ["Top Mentor 2024", "AI Expert", "100+ Sessions"],
    bio: "Passionate technologist with 15+ years of experience in AI/ML and tech leadership. I've led teams at Google, built ML systems serving millions of users, and mentored 100+ engineers in their career journeys. My goal is to help you navigate the complexities of tech leadership and AI implementation.",
    availability: ["Monday 5-8 PM", "Wednesday 6-9 PM", "Saturday 10 AM-2 PM"],
    languages: ["English", "Spanish"],
    education: ["PhD Computer Science - Stanford", "MS AI - MIT"],
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Leadership", level: 90 },
      { name: "Python", level: 95 },
      { name: "Team Building", level: 85 },
      { name: "System Design", level: 88 },
    ],
    testimonials: [
      {
        id: 1,
        author: "Alex Thompson",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400",
        rating: 5,
        date: "2 weeks ago",
        text: "Sarah is an incredible mentor! Her insights on ML systems helped me land my dream job at a top tech company.",
      },
      {
        id: 2,
        author: "Maria Garcia",
        role: "Data Scientist",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
        rating: 5,
        date: "1 month ago",
        text: "The best mentor I've worked with. Sarah's leadership advice transformed my approach to team management.",
      },
    ],
  },
};

export default function MentorProfilePage() {
  const params = useParams();
  const mentor = mentorData[params.id as string] || mentorData["1"];

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-8">
              <Avatar className="h-40 w-40 mx-auto md:mx-0">
                <AvatarImage src={mentor.image} alt={mentor.name} />
                <AvatarFallback>
                  {mentor.name.split(" ").map((n: string) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
                    <p className="text-xl text-muted-foreground mb-3">{mentor.role}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {mentor.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {mentor.sessions} sessions completed
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Responds in {mentor.responseTime}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 fill-orange-400 text-orange-400 mr-1" />
                        <span className="text-2xl font-bold mr-2">{mentor.rating}</span>
                        <span className="text-muted-foreground">({mentor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="text-right mb-2">
                      <div className="text-3xl font-bold">${mentor.hourlyRate}</div>
                      <div className="text-sm text-muted-foreground">per hour</div>
                    </div>
                    <Link href={`/chat?mentor=${mentor.id}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Request Session
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      View Calendar
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill: string, idx: number) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {mentor.achievements.map((achievement: string, idx: number) => (
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
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills & Expertise</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {mentor.education.map((edu: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Languages</div>
                      <div className="flex flex-wrap gap-2">
                        {mentor.languages.map((lang: string, idx: number) => (
                          <Badge key={idx} variant="outline">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                      <div className="font-medium">{mentor.responseTime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Session Rate</div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-medium">{mentor.hourlyRate}/hour</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentor.skills.map((skill: any, idx: number) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Testimonials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentor.testimonials.map((testimonial: any) => (
                    <div key={testimonial.id} className="border-b pb-6 last:border-0">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.author} />
                          <AvatarFallback>
                            {testimonial.author.split(" ").map((n: string) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{testimonial.author}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-orange-400 text-orange-400"
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {testimonial.date}
                              </span>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Availability Tab */}
          <TabsContent value="availability">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mentor.availability.map((slot: string, idx: number) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-orange-500 mr-3" />
                        <span className="font-medium">{slot}</span>
                      </div>
                      <Button size="sm">Book Slot</Button>
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
