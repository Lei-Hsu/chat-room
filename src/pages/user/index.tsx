import React, { useEffect } from "react";

import { useAppDispatch } from "@Hooks/hooks";
import { getSaga } from "@Redux/slices/counterSlice";

const user = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSaga());
  }, []);
  return <div className="bg-red-600">user page</div>;
};

export default user;
