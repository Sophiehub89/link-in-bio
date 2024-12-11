import React from 'react';
import { Users, Heart, Award } from 'lucide-react';
import { ProfileStats } from '../types';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <div className="bg-gray-800/30 rounded-lg p-3 text-center flex flex-col items-center">
    <div className="text-blue-400 mb-1">{icon}</div>
    <div className="text-xl font-bold text-white">{value}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

const SocialStats: React.FC<{ stats: ProfileStats }> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto mb-8">
      <StatCard
        icon={<Users size={20} />}
        value={stats.totalFollowers.toLocaleString()}
        label="Followers"
      />
      <StatCard
        icon={<Heart size={20} />}
        value={`${stats.totalEngagement}%`}
        label="Engagement"
      />
      <StatCard
        icon={<Award size={20} />}
        value={stats.projectsCompleted.toString()}
        label="Projects"
      />
    </div>
  );
};

export default SocialStats;