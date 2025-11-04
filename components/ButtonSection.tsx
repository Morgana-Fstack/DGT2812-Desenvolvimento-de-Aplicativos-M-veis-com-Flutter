
import React from 'react';
import ActionButton from './ActionButton';
import { CallIcon, RouteIcon, ShareIcon } from './Icons';

const ButtonSection: React.FC = () => {
  return (
    <div className="py-6 border-y border-gray-200 dark:border-gray-700 mb-6">
      <div className="flex justify-around">
        <ActionButton icon={<CallIcon />} label="CALL" />
        <ActionButton icon={<RouteIcon />} label="ROUTE" />
        <ActionButton icon={<ShareIcon />} label="SHARE" />
      </div>
    </div>
  );
};

export default ButtonSection;
