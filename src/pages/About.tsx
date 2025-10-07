import React from "react";
import { Separator } from "@/components/ui/separator";
import IntroCard from "@/components/portfolio/IntroCard";
import DetailsCard from "@/components/portfolio/DetailsCard";
import InterestsCard from "@/components/portfolio/InterestsCard";
import SkillsCard from "@/components/portfolio/SkillsCard";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ToolsCard from "@/components/portfolio/ToolsCard";
import LanguagesCard from "@/components/portfolio/LanguagesCard";
import EducationSection from "@/components/portfolio/EducationSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProfileCard from "@/components/portfolio/ProfileCard"; // Import the new ProfileCard

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">About Me</h1>

      <div className="space-y-8">
        <ScrollReveal delay={0}>
          <ProfileCard
            name="Ernie Joseph Cledera"
            title="IT Specialist"
            handle="jeffcleds"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/ernie-joseph-cledera.jpg" // Ensure this path is correct
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <IntroCard /> {/* Description */}
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.2} className="h-full">
            <DetailsCard />
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="h-full">
            <InterestsCard />
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.4}>
          <SkillsCard />
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <ExperienceSection />
        </ScrollReveal>
        <ScrollReveal delay={0.6}>
          <EducationSection />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal delay={0.7} className="h-full">
            <ToolsCard />
          </ScrollReveal>
          <ScrollReveal delay={0.8} className="h-full">
            <LanguagesCard />
          </ScrollReveal>
        </div>
      </div>

      <Separator className="my-12" />

      <ScrollReveal delay={0.9}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            Don’t chase busywork. Build assets — skills, tools, networks, and habits that multiply output without multiplying effort. Anything that doesn’t scale or compound is either a stepping stone or dead weight. Learn to tell the difference fast.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default About;