import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

import { useRouter } from 'next/router';

interface MessageHeaderProps {
  hostName: string;
}

const MessageHeader = ({ hostName }: MessageHeaderProps) => {
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between bg-slate-100 p-5">
      <AiOutlineHome className="h-6 w-6 cursor-pointer" onClick={() => router.push('/home')} />
      <div className="text-center text-lg font-bold">{hostName}</div>
      <FiSettings className="h-6 w-6 cursor-pointer" onClick={() => router.push('/setting')} />
    </div>
  );
};

export default MessageHeader;
