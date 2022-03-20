import React from 'react';
import { AiFillWechat, AiOutlineHome } from 'react-icons/ai';
import { RiFindReplaceLine } from 'react-icons/ri';

import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const footerTab = [
    {
      icon: <AiOutlineHome className="h-6 w-6" />,
      text: 'Home',
      path: '/home',
    },
    {
      icon: <AiFillWechat className="h-6 w-6" />,
      text: 'Messages',
      path: '/message',
    },
    {
      icon: <RiFindReplaceLine className="h-6 w-6" />,
      text: 'Find User',
      path: '/find',
    },
  ];

  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-around bg-slate-100 p-2">
      {footerTab.length &&
        footerTab.map((item) => (
          <div
            key={item.text}
            className="flex cursor-pointer flex-col items-center justify-between"
            onClick={() => router.push(item.path)}
          >
            <div>{item.icon}</div>
            <span>{item.text}</span>
          </div>
        ))}
    </div>
  );
};

export default Footer;
