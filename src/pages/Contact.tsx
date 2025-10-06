import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Link as LinkIcon } from "lucide-react"; // Added Github and LinkIcon
import { showSuccess, showError } from "@/utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!"); // Debug log
    // In a real application, you would send this data to a backend service.
    // For now, we'll just show a success toast.
    showSuccess("Your message has been sent!");
    console.log("Success toast shown."); // Debug log
    // You might want to clear the form fields here
    (e.target as HTMLFormElement).reset();
    console.log("Form reset."); // Debug log
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>I'd love to hear from you!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Subject of your message" required />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:john.doe@example.com" className="text-muted-foreground hover:text-primary">john.doe@example.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">New York, NY, USA</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Find Me Online</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/johndoe</a>
              </div>
              <div className="flex items-center space-x-3">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">linkedin.com/in/johndoe</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;