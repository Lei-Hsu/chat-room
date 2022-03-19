import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const MessageBottom = () => {
  return (
    <div className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-center bg-slate-100 p-5">
      <IoMdAdd className=" mr-5 h-8 w-10 cursor-pointer rounded-full bg-slate-300" />
      <input
        type="text"
        placeholder="Type something..."
        className="h-10 w-full rounded-md pl-5 outline-none"
      />
      <AiOutlineArrowUp className=" ml-5 h-8 w-10 cursor-pointer rounded-full bg-slate-300" />
    </div>
  );
};

export default MessageBottom;
