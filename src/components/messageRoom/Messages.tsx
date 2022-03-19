import React from 'react';

interface MessageProps {
  from: 'host' | 'guest';
  text: string;
  time: string;
}

const Message = ({ from, text, time }: MessageProps) => {
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

const Messages = () => {
  return (
    <div className={`h-[810px] overflow-y-scroll p-10 pb-[120px]`}>
      {mockMessageData.length &&
        mockMessageData.map((item: MessageProps) => (
          <Message from={item.from} text={item.text} time={item.time} />
        ))}
    </div>
  );
};

export default Messages;
