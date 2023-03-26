import ProjectList from "./ProjectList";
import TeamMembers from "./TeamMembers";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ProjectList />
      <TeamMembers />
    </div>
  );
}
