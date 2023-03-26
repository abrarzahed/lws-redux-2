import { useState } from "react";

export default function Project({ project = {} }) {
  const { id, projectName, colorClass } = project;
  const [input, setInput] = useState(true);
  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        className={colorClass}
        checked={input}
        onChange={(e) => setInput(e.target.checked)}
      />
      <p className="label">{projectName}</p>
    </div>
  );
}
