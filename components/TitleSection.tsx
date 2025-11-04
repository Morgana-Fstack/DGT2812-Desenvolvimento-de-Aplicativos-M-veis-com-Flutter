import React from 'react';
import { StarIcon } from './Icons';

interface TitleSectionProps {
  title: string;
  location: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, location }) => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-md text-gray-500 dark:text-gray-400 mt-1">
          {location}
        </p>
      </div>
      <div className="flex items-center space-x-1 flex-shrink-0">
        <StarIcon />
        <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          41
        </span>
      </div>
    </div>
  );
};

export default TitleSection;
