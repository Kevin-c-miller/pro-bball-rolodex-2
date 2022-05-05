import React from 'react';

interface LogoProps {
  player: {
    team: {
      abbreviation: string;
      conference: string;
      division: string;
      city: string;
      id: number;
    };
  }[];
}

const TeamLogo = ({ player }: LogoProps) => {
  let logoUrl = `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/`;

  return (
    <div className="flex flex-col items-center justify-start py-2 mx-4">
      <h4 className="font-bold underline">Team Info</h4>
      {player.map((player) => (
        <div key={player?.team?.id} className="flex justify-start items-center">
          <div className="flex flex-col items-start justify-center">
            <h4>
              <strong>City: </strong> {player?.team?.city}
            </h4>
            <h4>
              <strong>Division: </strong> {player?.team?.division}
            </h4>
            <h4>
              <strong>Conference: </strong> {player?.team?.conference}
            </h4>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={`${logoUrl}${player?.team?.abbreviation.toLowerCase()}.png`}
              alt="team logo"
              className="h-[100px] w-[100px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamLogo;
