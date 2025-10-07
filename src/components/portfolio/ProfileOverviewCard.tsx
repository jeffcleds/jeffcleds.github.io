"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { profileData } from '@/data/portfolioData';

const ProfileOverviewCard: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl mx-auto p-6 shadow-lg rounded-lg text-center">
      <CardContent className="p-0 flex flex-col items-center">
        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary shadow-md"
        />
        <h2 className="text-3xl font-bold text-foreground mb-2">{profileData.name}</h2>
        <p className="text-lg text-muted-foreground">Software Developer & IT Specialist</p>
      </CardContent>
    </Card>
  );
};

export default ProfileOverviewCard;