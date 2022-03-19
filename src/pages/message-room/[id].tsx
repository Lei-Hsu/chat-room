import React from 'react';

import MessageBottom from '@Components/messageRoom/MessageBotton';
import MessageHeader from '@Components/messageRoom/MessageHeader';
import Messages from '@Components/messageRoom/Messages';

const MessageRoom = () => {
  return (
    <div className="relative">
      <MessageHeader isOnline={true} userName={'userName'} />
      <Messages />
      <MessageBottom />
    </div>
  );
};

export default MessageRoom;
