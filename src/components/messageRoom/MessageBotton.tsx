import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const MessageBottom = () => {
  return (
    <div className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-center p-5">
      <IoMdAdd className=" mr-5 h-8 w-8 cursor-pointer bg-slate-100" />
      <input type="text" placeholder="type something..." className="h-10 w-full outline-none" />
      <AiOutlineArrowUp className=" h-8 w-8 cursor-pointer bg-slate-100" />
    </div>
  );
};

export default MessageBottom;
