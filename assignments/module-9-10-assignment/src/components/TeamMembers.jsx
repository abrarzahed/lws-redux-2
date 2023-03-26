import SumitAvatar from "../assets/images/avatars/sumit.png";
export default function TeamMembers() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        <div className="checkbox-container">
          <img src={SumitAvatar} className="team-avater" alt="sumit" />
          <p className="label">Sumit Saha</p>
        </div>
      </div>
    </div>
  );
}
