import React from 'react';

interface TextSectionProps {
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ description }) => {
  return (
    <div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
        {description}
      </p>
    </div>
  );
};

export default TextSection;
