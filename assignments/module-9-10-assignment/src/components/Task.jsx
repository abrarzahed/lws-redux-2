import DeleteSvg from "./DeleteSvg";
import EditSvg from "./EditSvg";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../features/tasks/tasksApi";

export default function Task({ task = {} }) {
  const [updateTask, { data: updatedTask, isError, isLoading, isSuccess }] =
    useUpdateTaskMutation();

  const [deleteTask, {}] = useDeleteTaskMutation();

  const months = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [status, setStatus] = useState(task?.status);

  // handle input Change
  const handleInputChange = (e) => {
    setStatus(e.target.value);
    updateTask({ ...task, status: e.target.value });
  };

  // handle delete task
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <div className="lws-task">
      <div className="flex items-center gap-2 text-slate">
        <h2 className="lws-date">{new Date(task.deadline).getDate()}</h2>
        <h4 className="lws-month">
          {months[new Date(task.deadline).getMonth()]}
        </h4>
      </div>

      <div className="lws-taskContainer">
        <h1 className="lws-task-title">{task.taskName}</h1>
        <span className={`lws-task-badge ${task?.project?.colorClass}`}>
          {task.project.projectName}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="team-avater" alt="user"></div>
          <p className="lws-task-assignedOn">{task?.teamMember?.name}</p>
        </div>
        {/* delete button will not shown to the ui, until the status of the task will be completed  */}
        {task?.status === "complete" && (
          <button className="lws-delete" onClick={handleDeleteTask}>
            <DeleteSvg />
          </button>
        )}
        <Link to={`/tasks/edit-task/${task.id}`} className="lws-edit">
          <EditSvg />
        </Link>
        <select
          onChange={handleInputChange}
          value={status}
          className="lws-status"
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="complete">Completed</option>
        </select>
      </div>
    </div>
  );
}
