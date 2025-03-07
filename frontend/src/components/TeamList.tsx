import { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import teamsData from '../data/CollegeBasketballTeams.json'; // Import JSON directly

type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (teamsData && teamsData.teams) {
      const formattedTeams = teamsData.teams.map((team) => ({
        school: team.school,
        name: team.name,
        city: team.city,
        state: team.state,
      }));

      setTeams(formattedTeams);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
