import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  projectAdded,
  projectRemoved,
} from "../features/projects/projectsSlice";

export default function Project({ project = {} }) {
  const { id, projectName, colorClass } = project;
  const [input, setInput] = useState(true);
  const dispatch = useDispatch();

  //   handle input change
  const handleInputChange = (e) => {
    const { checked } = e.target;
    setInput(checked);
    if (!checked) {
      dispatch(projectRemoved(projectName));
    } else {
      dispatch(projectAdded(projectName));
    }
  };
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        checked={input}
        onChange={handleInputChange}
      />
      <p className="label">{projectName}</p>
    </div>
  );
}
