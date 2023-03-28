import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../features/tasks/tasksApi";
import Task from "./Task";

export default function TaskList() {
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  const { projects, searchTerm } = useSelector((state) => state.projects);

  // filter by projects
  const filterBYProjects = (task) => {
    if (projects.includes(task.project.projectName)) {
      return true;
    } else {
      return false;
    }
  };

  // filter by searchTerm
  const filterBySearchTerm = (task) => {
    if (
      task.taskName.toUpperCase().includes(searchTerm) ||
      task.taskName.toLowerCase().includes(searchTerm) ||
      task.taskName.includes(searchTerm)
    ) {
      return true;
    } else if (searchTerm === "") {
      return true;
    } else {
      return false;
    }
  };

  return !isLoading && !isError && tasks?.length > 0 ? (
    <div className="lws-task-list">
      {tasks
        .filter(filterBYProjects)
        .filter(filterBySearchTerm)
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
