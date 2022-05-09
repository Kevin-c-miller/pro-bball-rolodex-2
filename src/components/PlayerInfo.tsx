import TeamLogo from './TeamLogo';

interface PlayerInfoProps {
  player: {
    first_name: string;
    last_name: string;
    position: string;
    height_feet: number;
    height_inches: number;
    id: number;
    weight_pounds: number;
    team: {
      full_name: string;
      id: number;
      abbreviation: string;
      conference: string;
      division: string;
      city: string;
    };
  }[];
}

const PlayerInfo = ({ player }: PlayerInfoProps) => {
  return (
    <div className="flex flex-col py-2 mx-4 h-[100%]">
      {player.map((player) => (
        <div className="p-2 m-2 leading-6" key={player?.id}>
          <h2 className="text-3xl font-bold md:text-4xl">
            {player?.first_name} {player?.last_name}
          </h2>
          <h3 className="text-xl font-bold">{player?.team?.full_name}</h3>
          <h4>
            <strong>Position:</strong> {player?.position}
          </h4>
          <h4>
            <strong>Height:</strong>{' '}
            {player?.height_feet !== null
              ? `${player?.height_feet}ft. ${player?.height_inches}in.`
              : `Not Available`}
          </h4>
          <h4>
            <strong>Weight: </strong>{' '}
            {player?.weight_pounds !== null
              ? `${player?.weight_pounds}lbs.`
              : 'Not Available'}
          </h4>
        </div>
      ))}

      <TeamLogo player={player} />
    </div>
  );
};

export default PlayerInfo;
