import React, { useMemo } from 'react';

import { useRouter } from 'next/router';

import { MessageInfo } from '@Interface/I_message';

interface MessageProps {
  messageInfo: MessageInfo[];
}

const Message = ({ messageInfo }: MessageProps) => {
  const router = useRouter();

  const MessageBox = useMemo(() => {
    return (
      <>
        {messageInfo.length &&
          messageInfo.map((item) => (
            <div
              key={item.id}
              className="flex cursor-pointer items-center justify-between border-b border-b-gray-100 py-4"
              onClick={() => router.push(`/message-room/${item.id}`)}
            >
              <div className="flex items-center">
                <div className="mr-4 h-10 w-10 rounded-full bg-slate-400" />
                <div>
                  <div className="text-xl">{item.name}</div>
                  <div className="text-sm">{item.text}</div>
                </div>
              </div>
              <div>{item.time}</div>
            </div>
          ))}
      </>
    );
  }, [messageInfo]);

  return <div className="h-[825px] overflow-y-scroll px-10 pb-[120px]">{MessageBox}</div>;
};

export default Message;
