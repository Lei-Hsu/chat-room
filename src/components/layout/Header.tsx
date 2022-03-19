import React from 'react';

const Header = ({ child }) => {
  return <div className="flex w-full items-center justify-between bg-slate-100 p-5">{child}</div>;
};

export default Header;
