"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail } from 'lucide-react';
import TiltedCard from '@/components/animations/TiltedCard';
import { Link } from 'react-router-dom';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean; // Not directly used by TiltedCard, but kept for prop consistency
  onContactClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  onContactClick,
}) => {
  const cardContent = (
    <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="relative p-0">
        <div className="h-24 bg-gradient-to-r from-primary to-blue-600" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2">
          <Avatar className="h-28 w-28 border-4 border-background shadow-md">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="pt-20 pb-6 text-center">
        <CardTitle className="text-2xl font-bold mb-1">{name}</CardTitle>
        <CardDescription className="text-muted-foreground mb-3">{title}</CardDescription>
        {showUserInfo && (
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <span className={`h-2 w-2 rounded-full mr-2 ${status === 'Online' ? 'bg-green-500' : 'bg-gray-500'}`} />
              {status}
            </Badge>
            <div className="flex justify-center items-center gap-2 text-muted-foreground text-sm">
              <Github className="h-4 w-4" />
              <span>@{handle}</span>
            </div>
          </div>
        )}
        <Button asChild className="w-full max-w-[200px]" onClick={onContactClick}>
          <Link to="/contact">
            <Mail className="h-4 w-4 mr-2" /> {contactText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );

  return enableTilt ? (
    <TiltedCard className="w-full max-w-md mx-auto">
      {cardContent}
    </TiltedCard>
  ) : (
    cardContent
  );
};

export default ProfileCard;