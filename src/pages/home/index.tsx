import React from 'react';

import { HomeFriendsInfo } from '@Interface/I_home';

import Home from '@Components/home/Home';

const index = () => {
  const mockHomeInfoData: HomeFriendsInfo[] = [
    {
      id: 1,
      userName: 'Tony',
      title: '',
    },
    {
      id: 2,
      userName: 'anne ',
      title: 'Go ~',
    },
    {
      id: 3,
      userName: 'Daniel',
      title: 'yolo gogo yolo gogoyolo gogoyolo gogoyol ',
    },
  ];

  return (
    <div>
      <div className="flex w-full items-center justify-center bg-slate-100 p-5">
        <div className="text-center text-lg font-bold">Friends</div>
      </div>
      <Home friendsInfo={mockHomeInfoData} />
    </div>
  );
};

export default index;
