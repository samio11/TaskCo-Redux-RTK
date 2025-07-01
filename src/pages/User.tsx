import { useGetAllUserQuery } from "@/redux/api/userApi";
import React from "react";
import UserCard from "./UserCard/UserCard";

const User = () => {
  const { data } = useGetAllUserQuery(undefined);
  const userData = data?.totalData;
  return (
    <div className="space-y-3 mt-3">
      <div></div>
      <div className="grid grid-cols-3 gap-3">
        {userData?.map((x) => (
          <UserCard key={x._id} userData={x}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;
