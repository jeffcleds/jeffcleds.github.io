import React from "react";
import { useDarkVeil } from "@/components/layout/DarkVeilProvider";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workstationData } from "@/data/portfolioData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import Carousel components

const WorkstationPage: React.FC = () => {
  const { isDarkVeilActive } = useDarkVeil();

  const cardClassNames = isDarkVeilActive ? 'border border-primary/20 backdrop-blur-md' : '';

  const workstationImages = [
    "/Workstation.png",
    "/workstation 2.jpg", // Corrected image path
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <ScrollReveal delay={0}>
        <h1 className="text-4xl font-bold text-center mb-10">My Workstation</h1>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
          Welcome to my digital command center! Here's a glimpse into the tools and setup that power my work.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mb-12 flex justify-center">
          <Carousel className="w-full max-w-4xl"> {/* Wrap images in Carousel */}
            <CarouselContent>
              {workstationImages.map((imageSrc, index) => (
                <CarouselItem key={index}>
                  <img
                    src={imageSrc}
                    alt={`My Workstation Setup ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-xl border border-border"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workstationData.map((category, index) => (
          <ScrollReveal key={category.title} delay={0.3 + index * 0.1} className="h-full">
            <Card className={`p-6 h-full ${cardClassNames}`}>
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-2xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start text-muted-foreground">
                    <span className="font-medium text-foreground">{item.name}:</span>
                    <span className="text-right flex-1 ml-4">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default WorkstationPage;