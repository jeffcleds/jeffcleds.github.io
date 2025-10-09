import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useDarkVeil } from '@/components/layout/DarkVeilProvider'; // Import useDarkVeil

const profileData = {
  introduction: `Hello! I'm Ernie Joseph Cledera, a passionate and dedicated IT professional with a strong background in web development and network engineering. I thrive on solving complex problems and creating efficient, user-friendly solutions. My journey in IT has equipped me with a diverse skill set, allowing me to adapt to various roles and challenges. I'm always eager to learn new technologies and contribute to innovative projects. Let's build something amazing together!`,
};

const IntroCard = () => {
  const { isDarkVeilActive } = useDarkVeil(); // Get Dark Veil state

  return (
    <Card className={`w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg ${isDarkVeilActive ? 'bg-transparent border-transparent' : ''}`}>
      <CardContent className="p-0">
        <p className="text-lg leading-relaxed text-muted-foreground">
          {profileData.introduction.split('<span class="highlight">').map((segment, index) => {
            if (segment.includes('</span>')) {
              const parts = segment.split('</span>');
              return (
                <React.Fragment key={index}>
                  <span className="text-primary font-semibold">{parts[0]}</span>
                  {parts[1]}
                </React.Fragment>
              );
            }
            return <React.Fragment key={index}>{segment}</React.Fragment>;
          })}
        </p>
      </CardContent>
    </Card>
  );
};

export default IntroCard;