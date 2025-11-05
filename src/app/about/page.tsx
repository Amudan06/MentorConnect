"use client";

import { Award, Users, TrendingUp, Heart, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Header from "@/components/Header";

const stats = [
  { label: "Active Mentors", value: "2,500+", icon: Users },
  { label: "Success Stories", value: "10,000+", icon: TrendingUp },
  { label: "Countries", value: "50+", icon: Award },
  { label: "Satisfaction Rate", value: "98%", icon: Heart },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe everyone deserves access to quality mentorship to unlock their full potential.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Building meaningful connections between mentors and mentees is at the heart of everything we do.",
  },
  {
    icon: Zap,
    title: "Growth Focused",
    description: "We're committed to creating an environment where both mentors and mentees can continuously learn and grow.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Former Tech Lead at Google with a passion for education",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Product innovator who believes in the power of mentorship",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Community",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Building bridges between mentors and mentees worldwide",
  },
  {
    name: "David Kim",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    bio: "Creating delightful experiences for our community",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-pink-500 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Growth Through Mentorship
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            We're on a mission to democratize access to world-class mentorship and help
            professionals at every stage of their career achieve their goals.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-10 w-10 mx-auto mb-4 text-orange-500" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mentor Connect was born from a simple observation: talented professionals everywhere
                struggle to find the right guidance at critical moments in their careers. Meanwhile,
                experienced leaders want to give back but lack an effective platform to do so.
              </p>
              <p>
                Founded in 2024, we set out to solve this problem by creating a platform that makes
                mentorship accessible, engaging, and impactful. What started as a small community has
                grown into a global network of professionals helping each other succeed.
              </p>
              <p>
                Today, Mentor Connect serves thousands of mentors and mentees across 50+ countries,
                facilitating meaningful connections that drive real career growth. Every day, we see
                stories of professionals landing their dream jobs, launching successful startups, and
                becoming leaders in their fields—all with the support of their mentors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're a diverse team of builders, educators, and mentorship advocates dedicated to
            creating the best platform for professional growth.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-400 to-pink-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking for guidance or want to share your expertise, there's a place for
            you in the Mentor Connect community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
            </Link>
            <Link href="/mentors">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                Browse Mentors
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
