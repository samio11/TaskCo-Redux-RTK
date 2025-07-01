import { useDeleteUserMutation } from "@/redux/api/userApi";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const UserCard = ({ userData }) => {
  const [deleteUser] = useDeleteUserMutation();
  const handleDeleteUser = async (id: string) => {
    console.log(id);
    try {
      await deleteUser(id);
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
      <div className="card bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{userData.name}</h2>
          <p>Email:- {userData.email}</p>
          <p>Age:- {userData.age}</p>
          <p>Gender:- {userData.gender}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDeleteUser(userData._id)}
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

export default UserCard;
