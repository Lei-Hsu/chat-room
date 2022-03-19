import React from 'react';

import MessageHeader from '@Components/messageRoom/MessageHeader';

const MessageRoom = () => {
  return (
    <div>
      <MessageHeader isOnline={true} userName={'userName'} />
    </div>
  );
};

export default MessageRoom;
