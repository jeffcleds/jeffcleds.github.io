import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hello! I'm John Doe, a software developer with a passion for creating
            impactful and efficient web solutions. My journey in tech began
            several years ago, and since then, I've been dedicated to learning
            and mastering various technologies to bring ideas to life.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I specialize in front-end development, with a strong focus on React,
            TypeScript, and modern CSS frameworks like Tailwind CSS. I love
            building responsive, accessible, and performant user interfaces that
            provide excellent user experiences.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Beyond coding, I enjoy exploring new technologies, contributing to
            open-source projects, and continuously improving my skills. I believe
            in clean code, robust architecture, and collaborative teamwork.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl">My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                <li>React, Next.js, Vue.js</li>
                <li>TypeScript, JavaScript</li>
                <li>Tailwind CSS, SCSS</li>
                <li>Node.js, Express.js</li>
                <li>SQL (PostgreSQL), NoSQL (MongoDB)</li>
                <li>Git, Docker</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <Separator className="my-12" />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
        <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
          I believe that good software is a blend of elegant design, robust
          engineering, and a deep understanding of user needs. My goal is always
          to build solutions that are not only functional but also delightful to
          use and easy to maintain.
        </p>
      </div>
    </div>
  );
};

export default About;