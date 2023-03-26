import SumitAvatar from "../assets/images/avatars/sumit.png";
import { useGetTeamQuery } from "../features/team/teamApi";
export default function TeamMembers() {
  const { data: team, isLoading, isError, error } = useGetTeamQuery();

  // decide what to render
  let content;
  if (isLoading) {
    content = <div className="checkbox-container">Loading</div>;
  } else if (!isLoading && isError) {
    content = <div className="checkbox-container">{error.data}</div>;
  } else if (!isLoading && !isError && team?.length === 0) {
    content = <div className="checkbox-container">No member found</div>;
  } else {
    content = team.map((t) => (
      <div key={t.id} className="checkbox-container">
        <div className="team-avater" alt="sumit"></div>
        <p className="label">{t.name}</p>
      </div>
    ));
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}
