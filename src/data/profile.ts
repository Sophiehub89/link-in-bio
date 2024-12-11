import { SocialStats, ProfileStats } from '../types';

export const socialStats: SocialStats[] = [
  { platform: 'Twitter', followers: 52300, engagement: 4.8 },
  { platform: 'Instagram', followers: 124700, engagement: 3.2 },
  { platform: 'LinkedIn', followers: 31200, engagement: 5.1 }
];

export const profileStats: ProfileStats = {
  totalFollowers: socialStats.reduce((acc, curr) => acc + curr.followers, 0),
  totalEngagement: Number((socialStats.reduce((acc, curr) => acc + curr.engagement, 0) / socialStats.length).toFixed(1)),
  projectsCompleted: 156
};