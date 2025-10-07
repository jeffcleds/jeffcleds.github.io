"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4 py-12">
        <img
          src="/ernie-joseph-cledera.jpg"
          alt="Ernie Joseph Cledera"
          className="w-48 h-48 rounded-full object-cover mb-8 transition-all duration-300 ease-in-out border-4 border-primary shadow-lg hover:scale-120"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Ernie Joseph Cledera
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
          Full-Stack Developer | AI Enthusiast | Innovator
        </p>
        <div className="flex space-x-4 mb-12">
          <Button variant="outline" className="text-white border-blue-400 hover:bg-blue-400 hover:text-black">
            View Portfolio
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Contact Me</Button>
        </div>
        <div className="flex space-x-6 text-gray-400">
          <a href="mailto:ernie.cledera@example.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
            <Mail size={32} />
          </a>
          <a href="https://github.com/erniejo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-400 transition-colors">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com/in/erniejo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
            <Linkedin size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full max-w-4xl py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm Ernie Joseph Cledera, a passionate Full-Stack Developer with a keen interest in Artificial Intelligence.
          With a strong foundation in modern web technologies and a drive for innovation, I love building scalable,
          efficient, and user-friendly applications. My journey in tech is fueled by curiosity and a desire to
          create impactful solutions that leverage the latest advancements in software development and AI.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full max-w-4xl py-16 px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Next.js', 'GraphQL', 'Machine Learning'].map((skill, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 text-white hover:border-blue-400 transition-colors">
              <CardContent className="flex items-center justify-center p-6">
                <p className="text-lg font-medium">{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-4xl py-16 px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800 border-gray-700 text-white hover:border-purple-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">AI-Powered Chatbot</CardTitle>
              <CardDescription className="text-gray-400">A smart chatbot integrated with natural language processing.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Developed using Python, Flask, and a custom-trained NLP model. Features real-time conversation and context awareness.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="link" className="text-blue-400 hover:text-blue-300">View Project</Button>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800 border-gray-700 text-white hover:border-purple-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">E-commerce Platform</CardTitle>
              <CardDescription className="text-gray-400">A full-stack e-commerce application with secure payments.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Built with Next.js, Node.js, Express, and MongoDB. Includes user authentication, product management, and Stripe integration.</p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="link" className="text-blue-400 hover:text-blue-300">View Project</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-md py-16 px-4">
        <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Contact Me</h2>
        <Tabs defaultValue="email" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="email" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Email</TabsTrigger>
            <TabsTrigger value="social" className="text-white data-[state=active]:bg-purple-600 data-[state=active]:text-white">Social</TabsTrigger>
          </TabsList>
          <TabsContent value="email" className="mt-4">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Send an Email</CardTitle>
                <CardDescription className="text-gray-400">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@example.com" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." className="bg-gray-700 border-gray-600 text-white min-h-[100px]" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="social" className="mt-4">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle>Connect on Social Media</CardTitle>
                <CardDescription className="text-gray-400">Find me on these platforms.</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center space-x-6 py-8">
                <a href="mailto:ernie.cledera@example.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
                  <Mail size={40} />
                </a>
                <a href="https://github.com/erniejo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-purple-400 transition-colors">
                  <Github size={40} />
                </a>
                <a href="https://linkedin.com/in/erniejo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
                  <Linkedin size={40} />
                </a>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-8 text-gray-500 border-t border-gray-800 mt-12">
        <p>&copy; {new Date().getFullYear()} Ernie Joseph Cledera. All rights reserved.</p>
      </footer>
    </div>
  );
}