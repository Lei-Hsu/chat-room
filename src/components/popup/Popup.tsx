import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@Hooks/hooks';

import { setPopup } from '@Redux/slices/commonSlice';

interface PopupProps {
  title: string;
  component?: React.ReactNode;
}

const Popup = ({ title = 'Title', component }: PopupProps) => {
  const dispatch = useAppDispatch();
  const { popupState } = useAppSelector((state) => state.common);

  const popupVariants = {
    open: { opacity: 1, top: 100 },
    closed: { opacity: 0, bottom: 0, display: 'none' },
  };

  return (
    <motion.div
      className={`absolute z-999 h-full w-full rounded-t-[30px] bg-gradient-to-b from-slate-200 to-slate-400`}
      animate={popupState ? 'open' : 'closed'}
      variants={popupVariants}
      transition={{ duration: 0.4 }}
    >
      <AiOutlineCloseCircle
        className="absolute right-5 top-5 h-6 w-6"
        onClick={() => dispatch(setPopup(false))}
      />
      <div className="w-full border-b-2 border-slate-100 pt-[14px] pb-3 text-center text-2xl font-bold">
        {title}
      </div>
      {component}
    </motion.div>
  );
};

export default Popup;
