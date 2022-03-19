import React from 'react';

import { MessageInfo } from '@Interface/I_message';

import Message from '@Components/message/Message';
import MessageHeader from '@Components/message/MessageHeader';

const mockHomeInfo: MessageInfo[] = [
  {
    id: 1,
    name: 'Tony',
    text: '圖片已傳送',
    time: '12:52',
  },
  {
    id: 2,
    name: 'David',
    text: '出門了嗎',
    time: '12:50',
  },
  {
    id: 3,
    name: 'Yoyo',
    text: '在路上了',
    time: '12:40',
  },
  {
    id: 1,
    name: 'Tony',
    text: '圖片已傳送',
    time: '12:52',
  },
  {
    id: 2,
    name: 'David',
    text: '出門了嗎',
    time: '12:50',
  },
  {
    id: 3,
    name: 'Yoyo',
    text: '在路上了',
    time: '12:40',
  },
  {
    id: 3,
    name: 'Yoyo',
    text: '在路上了',
    time: '12:40',
  },
  {
    id: 1,
    name: 'Tony',
    text: '圖片已傳送',
    time: '12:52',
  },
  {
    id: 2,
    name: 'David',
    text: '出門了嗎',
    time: '12:50',
  },
  {
    id: 3,
    name: 'Yoyo',
    text: '在路上了',
    time: '12:40',
  },
];

const HomePage = () => {
  return (
    <div className="relative">
      <MessageHeader hostName={'User Name'} />
      <Message messageInfo={mockHomeInfo} />
    </div>
  );
};

export default HomePage;
