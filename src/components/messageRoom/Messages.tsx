import React, { useEffect, useMemo, useRef } from 'react';

import { MessageBox } from '@Interface/I_messages';

const Message = ({ from, text, time }: MessageBox) => {
  const isHost = from === 'host';
  const messageBox = isHost
    ? 'rounded-br-none bg-gradient-to-br from-cyan-200 to-cyan-300'
    : 'rounded-bl-none bg-gradient-to-bl from-slate-100 to-slate-200';
  const messageBoxDirection = isHost ? 'items-end' : 'items-start';

  return (
    <div className={`mb-5 flex flex-col ${messageBoxDirection}`}>
      <div className={`max-w-70p w-max rounded-2xl p-3 ${messageBox}`}>
        <p>{text}</p>
      </div>
      <span>{time}</span>
    </div>
  );
};

const Messages = ({ messageInfo }) => {
  const lastMessageBox = useRef(null);

  const MessageBox = useMemo(() => {
    return (
      <>
        {messageInfo.length &&
          messageInfo.map((item: MessageBox, index: number) => (
            <div key={index} ref={messageInfo.length - 1 === index ? lastMessageBox : null}>
              <Message from={item.from} text={item.text} time={item.time} />
            </div>
          ))}
      </>
    );
  }, [messageInfo]);

  useEffect(() => {
    lastMessageBox.current.scrollIntoView();
  }, [messageInfo]);

  return <div className={`h-[810px] overflow-y-scroll p-10 pb-[120px]`}>{MessageBox}</div>;
};

export default Messages;
