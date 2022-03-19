import React, { useState } from 'react';

import dayjs from 'dayjs';

import MessageBottom from '@Components/messageRoom/MessageBotton';
import MessageHeader from '@Components/messageRoom/MessageHeader';
import Messages from '@Components/messageRoom/Messages';

const mockMessageData = [
  {
    from: 'guest',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    time: '12:10',
  },
  {
    from: 'host',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing  amet consectetur adipisicing amet consectetur adipisicing',
    time: '12:12',
  },
  {
    from: 'guest',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing',
    time: '12:13',
  },
];

const MessageRoom = () => {
  const [messageData, setMessageData] = useState(mockMessageData);

  const handleSubmit = (value) => {
    const now = dayjs().format('H:m');

    setMessageData([
      ...messageData,
      {
        from: 'host',
        text: value,
        time: now,
      },
    ]);
  };

  return (
    <div className="relative">
      <MessageHeader isOnline={true} userName={'userName'} />
      <Messages messageInfo={messageData} />
      <MessageBottom handleSubmit={handleSubmit} />
    </div>
  );
};

export default MessageRoom;
