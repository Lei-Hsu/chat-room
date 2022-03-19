import React, { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';

const MessageBottom = ({ handleSubmit }) => {
  const [submitData, setSubmitData] = useState<string>();

  const handleSubmitByClickOrEnter = () => {
    handleSubmit(submitData);
    setSubmitData('');
  };

  return (
    <div className="absolute bottom-0 left-0 flex h-20 w-full items-center justify-center bg-slate-100 p-5">
      <IoMdAdd className=" mr-5 h-8 w-10 cursor-pointer rounded-full bg-slate-300" />
      <input
        type="text"
        placeholder="Type something..."
        value={submitData}
        className="h-10 w-full rounded-md pl-5 outline-none"
        onChange={(e) => setSubmitData(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSubmitByClickOrEnter();
          }
        }}
      />
      <AiOutlineArrowUp
        className=" ml-5 h-8 w-10 cursor-pointer rounded-full bg-slate-300"
        onClick={handleSubmitByClickOrEnter}
      />
    </div>
  );
};

export default MessageBottom;
