"use client";

import { useState } from "react";
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Header from "@/components/Header";

const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Tech Lead at Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    lastMessage: "That's a great approach! Let me share some resources...",
    timestamp: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Meta",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    lastMessage: "Thanks for the session today!",
    timestamp: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Engineering Manager at Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    lastMessage: "Looking forward to our next meeting",
    timestamp: "3h ago",
    unread: 1,
    online: true,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Senior Software Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    lastMessage: "Here's the code review feedback",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "UX Director at Adobe",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    lastMessage: "The design mockups look fantastic!",
    timestamp: "2 days ago",
    unread: 0,
    online: true,
  },
];

const initialMessages = [
  {
    id: 1,
    sender: "them",
    content: "Hi! Thanks for reaching out. I'd be happy to help you with your career transition.",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "me",
    content: "Thank you so much! I've been working in web development for 3 years and want to move into machine learning.",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    sender: "them",
    content: "That's a great goal! ML is an exciting field. What's your background in math and statistics?",
    timestamp: "10:33 AM",
  },
  {
    id: 4,
    sender: "me",
    content: "I have a solid foundation from my computer science degree, but I know I need to strengthen those skills.",
    timestamp: "10:35 AM",
  },
  {
    id: 5,
    sender: "them",
    content: "Perfect! I'd recommend starting with linear algebra and probability theory. I can share a learning roadmap with you.",
    timestamp: "10:36 AM",
  },
  {
    id: 6,
    sender: "me",
    content: "That would be incredibly helpful! What resources do you recommend?",
    timestamp: "10:38 AM",
  },
  {
    id: 7,
    sender: "them",
    content: "That's a great approach! Let me share some resources...",
    timestamp: "10:40 AM",
  },
];

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "me",
          content: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 container mx-auto p-4">
        <Card className="h-[calc(100vh-12rem)] flex overflow-hidden">
          {/* Conversations Sidebar */}
          <div className="w-full md:w-80 border-r flex flex-col">
            <div className="p-4 border-b space-y-4">
              <h2 className="text-xl font-bold">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-2 space-y-1">
                {filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedConversation.id === conversation.id
                        ? "bg-muted"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conversation.image} alt={conversation.name} />
                          <AvatarFallback>
                            {conversation.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-sm truncate">
                            {conversation.name}
                          </h3>
                          <span className="text-xs text-muted-foreground">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1 truncate">
                          {conversation.role}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate flex-1">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage
                      src={selectedConversation.image}
                      alt={selectedConversation.name}
                    />
                    <AvatarFallback>
                      {selectedConversation.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  {selectedConversation.online && (
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{selectedConversation.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedConversation.online ? "Active now" : "Offline"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                    <DropdownMenuItem>Archive Chat</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Block User</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === "me"
                          ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "me" ? "text-white/80" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-end space-x-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pr-10"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-orange-400 to-pink-500"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
