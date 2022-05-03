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
    };
  }[];
}

const PlayerInfo = ({ player }: PlayerInfoProps) => {
  return (
    <div className="flex flex-col py-2 mx-4">
      {player.map((player) => (
        <div className="p-2 m-2" key={player?.id}>
          <h2 className="text-3xl font-bold">
            {player?.first_name} {player?.last_name}
          </h2>
          <h3 className="text-xl font-bold">{player?.team?.full_name}</h3>
          <h4>
            <strong>Position:</strong> {player?.position}
          </h4>
          <h4>
            <strong>Height:</strong> {player?.height_feet}ft.{' '}
            {player?.height_inches}in.
          </h4>
          <h4>
            <strong>Weight: </strong>
            {player?.weight_pounds}lbs.
          </h4>
        </div>
      ))}
    </div>
  );
};

export default PlayerInfo;
