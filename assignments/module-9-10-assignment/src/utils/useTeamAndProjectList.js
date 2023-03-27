import { useGetProjectsQuery } from "../features/projects/projectsApi";
import { useGetTeamQuery } from "../features/team/teamApi";

export default function useTeamAndProjectList() {
  const {
    data: projects,
    isLoading: loadingProjects,
    isError: errorProjects,
  } = useGetProjectsQuery();
  const {
    data: team,
    isLoading: loadingTeam,
    isError: errorTeam,
  } = useGetTeamQuery();

  let data;
  if (loadingProjects || loadingTeam || errorProjects || errorTeam) {
    data = {};
  } else if (!loadingProjects && !loadingTeam && !errorProjects && !errorTeam) {
    data = {
      projects,
      team,
    };
  }

  return data;
}
