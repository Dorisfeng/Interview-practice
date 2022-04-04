import { useEffect, useState } from "react";
import { fetchProfileData } from "./fetch";

const Sub = ({ resource }) => {
  useEffect(() => {
    // const { user } = fetchProfileData();
    // setUser(user);
  }, []);
  console.log("user", user);
  return (
    <div>
      <div>用户：{user?.read()?.name}</div>
    </div>
  );
};

export default Sub;
