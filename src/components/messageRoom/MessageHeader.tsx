import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';

import Image from 'next/image';
import { useRouter } from 'next/router';

interface MessageHeaderProps {
  imagePath?: string;
  isOnline: boolean;
  userName: string;
}

const MessageHeader = ({ imagePath, isOnline, userName }: MessageHeaderProps) => {
  const router = useRouter();

  const onlineStatus = isOnline ? 'text-green-300' : 'text-red-600';
  const onlineText = isOnline ? 'Online now' : 'Offline';

  return (
    <div className="relative flex items-center justify-center border-b border-b-gray-200 p-2">
      <IoIosArrowBack
        className="absolute left-5 h-8 w-8 cursor-pointer text-slate-400"
        onClick={() => router.push('/message')}
      />
      <div className="flex">
        {/* <Image height={40} width={40} src="" /> */}
        <div className="mr-5 h-10 w-10 rounded-full bg-slate-500" />
        <div>
          <h3>{userName}</h3>
          <span className={`m-0 text-xs ${onlineStatus}`}>{onlineText}</span>
        </div>
      </div>
      <FiMoreVertical className="absolute right-5 h-8 w-8 cursor-pointer text-slate-400" />
    </div>
  );
};

export default MessageHeader;
