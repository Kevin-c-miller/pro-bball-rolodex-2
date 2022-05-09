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
  return (
    <div className="flex flex-col items-start justify-start py-2 mx-4">
      <h4 className="font-bold underline text-xl">Team Info</h4>
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
        </div>
      ))}
    </div>
  );
};

export default TeamLogo;
