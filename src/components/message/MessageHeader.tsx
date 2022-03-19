import React from 'react';
import { FiSettings } from 'react-icons/fi';

interface MessageHeaderProps {
  hostName: string;
}

const MessageHeader = ({ hostName }: MessageHeaderProps) => {
  return (
    <div className="flex w-full items-center justify-between bg-slate-100 p-5 text-center text-lg font-bold">
      <div></div>
      <div>{hostName}</div>
      <FiSettings className="h-6 w-6 cursor-pointer" />
    </div>
  );
};

export default MessageHeader;
