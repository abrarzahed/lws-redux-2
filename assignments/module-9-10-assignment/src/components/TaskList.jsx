import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../features/tasks/tasksApi";
import Task from "./Task";

export default function TaskList() {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const { projects } = useSelector((state) => state.projects);

  return !isLoading && !isError && tasks?.length > 0 ? (
    <div className="lws-task-list">
      {tasks
        .filter((task) => {
          if (projects.includes(task.project.projectName)) {
            return true;
          } else {
            return false;
          }
        })
        .map((task, i) => {
          return <Task key={i} task={task} />;
        })}
    </div>
  ) : isLoading ? (
    <div className="lws-task-list">Loading...</div>
  ) : (
    <div className="lws-task-list">Something went wrong...</div>
  );
}
