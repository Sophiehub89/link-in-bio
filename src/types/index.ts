export interface SocialStats {
  platform: string;
  followers: number;
  engagement: number;
}

export interface LinkCardProps {
  icon: React.ReactNode | string;
  title: string;
  subtitle: string;
  href: string;
  stats?: {
    count?: number;
    label?: string;
  };
}

export interface ProfileStats {
  totalFollowers: number;
  totalEngagement: number;
  projectsCompleted: number;
}