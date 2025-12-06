import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title }) => {
  if (!images || images.length === 0) {
    return <div className="text-center text-muted-foreground py-8">No images available for this project.</div>;
  }

  return (
    <Carousel className="w-full max-w-full mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Card className="border-none shadow-xl">
              <CardContent className="flex aspect-video items-center justify-center p-0">
                <img
                  src={image}
                  alt={`${title} Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {images.length > 1 && (
        <>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </>
      )}
    </Carousel>
  );
};

export default ProjectImageCarousel;