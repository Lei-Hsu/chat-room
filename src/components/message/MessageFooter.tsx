import React from 'react';
import { RiFindReplaceLine } from 'react-icons/ri';

const MessageFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-slate-100 p-2">
      <div className="flex cursor-pointer flex-col items-center justify-center">
        <RiFindReplaceLine className="h-6 w-6" />
        <span>Find User</span>
      </div>
    </div>
  );
};

export default MessageFooter;
