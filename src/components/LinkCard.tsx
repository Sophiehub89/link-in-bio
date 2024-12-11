import React from 'react';
import { ExternalLink } from 'lucide-react';
import { LinkCardProps } from '../types';

const LinkCard: React.FC<LinkCardProps> = ({ icon, title, subtitle, href, stats }) => {
  return (
    <a
      href={href}
      className="block bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 rounded-xl p-4 group hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
            {typeof icon === 'string' ? icon : icon}
          </div>
          <div>
            <h2 className="text-white font-medium">{title}</h2>
            <p className="text-gray-400 text-sm">{subtitle}</p>
            {stats && (
              <p className="text-xs text-gray-500 mt-1">
                {stats.count?.toLocaleString()} {stats.label}
              </p>
            )}
          </div>
        </div>
        <ExternalLink className="text-gray-400 group-hover:text-white transition-colors" size={20} />
      </div>
    </a>
  );
};

export default LinkCard;