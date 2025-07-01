import { cn } from "@/lib/utils";
import React from "react";
import ShowUserModal from "./ShowUserModal";
import { useDeleteTaskMutation } from "@/redux/api/taskApi";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";

const TaskCard = ({ task }) => {
  //   console.log(task);
  const [deleteTask] = useDeleteTaskMutation();
  const handleDeleteTask = async (id: string) => {
    // console.log(id);
    try {
      await deleteTask(id);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task is Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err: any) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.desc}</p>
          <p>{task.dueDate}</p>
          <p
            className={cn("badge badge-outline p-2", {
              "badge-success": task.priority === "low",
              "badge-warning": task.priority === "mid",
              "badge-error": task.priority === "high",
            })}
          >
            {task.priority}
          </p>
          <p>
            Assigned Task to:-{" "}
            <span className="text-blue-500"> {task.user.name}</span>
          </p>
          <div className="card-actions justify-end">
            <ShowUserModal data={task.user}></ShowUserModal>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="btn btn-outline btn-error"
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
