import React, { useMemo } from 'react';

import { useAppDispatch } from '@Hooks/hooks';
import { HomeFriendsInfo } from '@Interface/I_home';

import { setPopup } from '@Redux/slices/commonSlice';

interface HomeProps {
  friendsInfo: HomeFriendsInfo[];
}

const Home = ({ friendsInfo }: HomeProps) => {
  const dispatch = useAppDispatch();
  const friendsBox = useMemo(() => {
    return (
      <div className="px-10">
        {friendsInfo.length &&
          friendsInfo.map((item) => (
            <div
              key={item.id}
              className="mb-2 flex cursor-pointer items-center border-b border-slate-100 py-4"
              onClick={() => dispatch(setPopup(true))}
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-yellow-300" />
              <div className="max-w-full">
                <div className="text-xl">{item.userName}</div>
                <div className="text-sm">
                  <p className="w-[100%] truncate">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }, [friendsInfo]);

  return <div className="h-[825px] overflow-y-scroll">{friendsBox}</div>;
};

export default Home;
