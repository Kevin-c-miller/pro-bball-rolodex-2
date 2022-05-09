interface ImageProps {
  playerImage: string;
  player: {
    id: number;
    team: {
      abbreviation: string;
    };
  }[];
}

const PlayerImage = ({ playerImage, player }: ImageProps) => {
  let logoUrl = `http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/`;
  return (
    <div className="">
      {player.map((searched) => (
        <>
          <div key={searched?.id}>
            <img
              src={`${logoUrl}${searched?.team?.abbreviation.toLowerCase()}.png`}
              alt="player headshot"
              className="h-[300px] w-[400px] border-2 border-white rounded-xl"
            />
            <img
              src={playerImage}
              alt={`${searched?.team?.abbreviation} team logo`}
            />
          </div>
        </>
      ))}
    </div>
  );
};

export default PlayerImage;
