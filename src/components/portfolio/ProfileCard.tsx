import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { profileData } from "@/data/portfolioData";

const ProfileCard: React.FC = () => {
  return (
    <Card className="p-4 flex justify-center items-center">
      <CardContent className="p-0">
        <img
          src={profileData.profileImage}
          alt="Profile Picture"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
        />
      </CardContent>
    </Card>
  );
};

export default ProfileCard;