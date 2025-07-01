import { useGetAllTaskQuery } from "@/redux/api/taskApi";
import React from "react";
import TaskCard from "./TaskCard/TaskCard";
import AddTaskModal from "./TaskCard/AddTaskModal";

const Task = () => {
  const { data, isLoading, isFetching } = useGetAllTaskQuery(undefined);
  return (
    <div className="space-y-2">
      <div className="w-screen flex justify-end items-enter my-3 mr-3">
        <AddTaskModal></AddTaskModal>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {data?.totalData.map((x) => (
          <TaskCard key={x._id} task={x}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Task;
