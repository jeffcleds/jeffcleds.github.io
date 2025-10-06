import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Link as LinkIcon } from "lucide-react";
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
                <a href="mailto:cledera.ernie@gmail.com" className="text-muted-foreground hover:text-primary">cledera.ernie@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+639296529698" className="text-muted-foreground hover:text-primary">+63 929 652 9698</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Philippines</span>
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
                <a href="https://github.com/jeffcleds" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">github.com/jeffcleds</a>
              </div>
              <div className="flex items-center space-x-3">
                <LinkIcon className="h-5 w-5 text-muted-foreground" />
                <a href="https://www.linkedin.com/in/ernie-cledera/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">linkedin.com/in/ernie-cledera</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;