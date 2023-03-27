import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTaskMutation } from "../features/tasks/tasksApi";
import useTeamAndProjectList from "../utils/useTeamAndProjectList";

export default function AddTaskForm() {
  const { team, projects } = useTeamAndProjectList();
  const [formData, setFormData] = useState({
    taskName: "",
    teamMember: "",
    project: "",
    deadline: "",
  });

  const navigate = useNavigate();

  const [addTask, { isLoading, isError, isSuccess }] = useAddTaskMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const teamMember = team.find((t) => t.name === formData.teamMember);
    const project = projects.find((p) => p.projectName === formData.project);

    addTask({
      taskName: formData.taskName,
      teamMember,
      project,
      deadline: formData.deadline,
      status: "pending",
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="fieldContainer">
        <label htmlFor="lws-taskName">Task Name</label>
        <input
          type="text"
          name="taskName"
          id="lws-taskName"
          required
          value={formData.taskName}
          onChange={handleInputChange}
          placeholder="Implement RTK Query"
        />
      </div>

      <div className="fieldContainer">
        <label>Assign To</label>
        <select
          value={formData.teamMember}
          onChange={handleInputChange}
          name="teamMember"
          id="lws-teamMember"
          required
        >
          <option value="" hidden>
            Select Job
          </option>
          {team?.map((t, i) => (
            <option key={i} value={t.name}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div className="fieldContainer">
        <label htmlFor="lws-projectName">Project Name</label>
        <select
          value={formData.project}
          onChange={handleInputChange}
          id="lws-projectName"
          name="project"
          required
        >
          <option value="" hidden>
            Select Project
          </option>
          {projects?.map((p, i) => (
            <option key={i} value={p.projectName}>
              {p.projectName}
            </option>
          ))}
        </select>
      </div>

      <div className="fieldContainer">
        <label htmlFor="lws-deadline">Deadline</label>
        <input
          value={formData.deadline}
          onChange={handleInputChange}
          type="date"
          name="deadline"
          id="lws-deadline"
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="lws-submit bg-blue-500 py-2 text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
