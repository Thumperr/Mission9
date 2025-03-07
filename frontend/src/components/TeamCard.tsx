type TeamProps = {
  team: {
    school: string;
    name: string;
    city: string;
    state: string;
  };
};

const TeamCard: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{team.school}</h2>
      <p>
        <strong>Mascot:</strong> {team.name}
      </p>
      <p>
        <strong>Location:</strong> {team.city}, {team.state}
      </p>
    </div>
  );
};

export default TeamCard;
