"use client";

import Link from "next/link";
import { ArrowRight, Award, Calendar, Users, Star, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";

const featuredMentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Tech Lead at Google",
    expertise: ["AI/ML", "Leadership", "Career Growth"],
    rating: 4.9,
    sessions: 127,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    achievements: ["Top Mentor 2024", "AI Expert"],
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Meta",
    expertise: ["Product Strategy", "Design Thinking", "Agile"],
    rating: 4.8,
    sessions: 98,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    achievements: ["Rising Star", "PM Pro"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Manager at Amazon",
    expertise: ["System Design", "Team Building", "Cloud Architecture"],
    rating: 5.0,
    sessions: 156,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    achievements: ["Elite Mentor", "Cloud Expert"],
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Leadership in Tech: Building High-Performing Teams",
    date: "Tomorrow, 2:00 PM",
    attendees: 45,
    type: "Workshop",
  },
  {
    id: 2,
    title: "Career Path: From Developer to CTO",
    date: "Jan 25, 4:00 PM",
    attendees: 78,
    type: "Panel Discussion",
  },
  {
    id: 3,
    title: "AI & Machine Learning: Getting Started",
    date: "Jan 28, 10:00 AM",
    attendees: 120,
    type: "Masterclass",
  },
];

const stats = [
  { label: "Active Mentors", value: "2,500+", icon: Users },
  { label: "Success Stories", value: "10,000+", icon: TrendingUp },
  { label: "Total Sessions", value: "50,000+", icon: Clock },
  { label: "Average Rating", value: "4.8/5", icon: Star },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-1">
            🚀 Join 10,000+ learners growing their careers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            Connect with Expert Mentors &{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Accelerate Your Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Get personalized guidance from industry leaders. Learn, grow, and achieve your career goals with one-on-one mentorship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/mentors">
              <Button size="lg" className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600">
                Find Your Mentor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Become a Mentee
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-2">
                <stat.icon className="h-8 w-8 text-orange-500" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Mentors</h2>
            <p className="text-muted-foreground">Connect with top-rated mentors in your field</p>
          </div>
          <Link href="/mentors">
            <Button variant="ghost">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={mentor.image} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <CardDescription>{mentor.role}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-orange-400 text-orange-400 mr-1" />
                    <span className="font-medium">{mentor.rating}</span>
                  </div>
                  <div>{mentor.sessions} sessions</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.achievements.map((achievement, idx) => (
                    <Badge key={idx} variant="outline" className="text-orange-500 border-orange-500">
                      <Award className="h-3 w-3 mr-1" />
                      {achievement}
                    </Badge>
                  ))}
                </div>
                <Link href={`/mentors/${mentor.id}`}>
                  <Button className="w-full">View Profile</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join workshops, panels, and masterclasses</p>
            </div>
            <Link href="/events">
              <Button variant="ghost">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-gradient-to-r from-orange-400 to-pink-500">
                    {event.type}
                  </Badge>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} attendees registered
                  </div>
                  <Button className="w-full" variant="outline">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Showcase */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Recent Achievements</h2>
          <p className="text-muted-foreground">Celebrate success stories from our community</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Alex Thompson", achievement: "Landed Dream Job at Microsoft", badge: "Career Milestone" },
            { name: "Maria Garcia", achievement: "Promoted to Senior Engineer", badge: "Career Growth" },
            { name: "James Lee", achievement: "Completed 50 Mentoring Sessions", badge: "Top Mentor" },
            { name: "Sophie Chen", achievement: "Launched Successful Startup", badge: "Entrepreneur" },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto mb-2 text-orange-500" />
                <CardTitle className="text-base">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{item.achievement}</p>
                <Badge variant="secondary">{item.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-400 to-pink-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of professionals who are growing their careers with expert mentorship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
            <Link href="/mentors">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Browse Mentors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Mentor Connect</h3>
              <p className="text-sm text-muted-foreground">
                Empowering professionals through meaningful mentorship connections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/mentors">Find Mentors</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/achievements">Achievements</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Mentor Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}