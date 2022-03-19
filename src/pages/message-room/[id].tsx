import React from 'react';

import MessageBottom from '@Components/messageRoom/MessageBotton';
import MessageHeader from '@Components/messageRoom/MessageHeader';

const MessageRoom = () => {
  return (
    <div className="relative h-screen">
      <MessageHeader isOnline={true} userName={'userName'} />
      <MessageBottom />
    </div>
  );
};

export default MessageRoom;
