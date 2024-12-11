import React from 'react';
import { Twitter, Globe, Instagram, Linkedin, Mail } from 'lucide-react';
import LinkCard from './LinkCard';
import SocialStats from './SocialStats';
import { profileStats, socialStats } from '../data/profile';

const ProfileCard = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-500 opacity-10 blur-[120px] -z-10" />
      
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8 relative">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white/10 shadow-xl mb-4 object-cover"
          />
          <div className="absolute bottom-6 right-0 bg-blue-500 rounded-full p-1.5">
            <Twitter size={16} className="text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">Casey Hunter</h1>
        <p className="text-gray-400 text-center max-w-md mb-6 leading-relaxed">
          A product designer with a proven track record of creating innovative and user-centric designs in the IT and software development sector.
        </p>

        {/* Social Stats */}
        <SocialStats stats={profileStats} />
      </div>

      {/* Links Section */}
      <div className="space-y-3">
        <LinkCard 
          icon={<Twitter className="text-white" size={20} />}
          title="Twitter"
          subtitle="Daily notes about daily tasks"
          href="#"
          stats={{ count: socialStats[0].followers, label: 'followers' }}
        />
        <LinkCard 
          icon={<Instagram className="text-white" size={20} />}
          title="Instagram"
          subtitle="Behind the scenes & design tips"
          href="#"
          stats={{ count: socialStats[1].followers, label: 'followers' }}
        />
        <LinkCard 
          icon={<Linkedin className="text-white" size={20} />}
          title="LinkedIn"
          subtitle="Professional updates & articles"
          href="#"
          stats={{ count: socialStats[2].followers, label: 'connections' }}
        />
        <LinkCard 
          icon={<Globe className="text-white" size={20} />}
          title="Portfolio Website"
          subtitle="My latest work & case studies"
          href="#"
        />
        <LinkCard 
          icon={<Mail className="text-white" size={20} />}
          title="Newsletter"
          subtitle="Weekly design insights & resources"
          href="#"
          stats={{ count: 12500, label: 'subscribers' }}
        />
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Casey Hunter. All rights reserved.
      </div>
    </div>
  );
};

export default ProfileCard;