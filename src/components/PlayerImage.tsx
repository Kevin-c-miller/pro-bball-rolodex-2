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
    <>
      {player.map((searched) => (
        <div key={searched?.id} className="h-[100%] w-[100%] relative my-4">
          <img
            src={`${logoUrl}${searched?.team?.abbreviation.toLowerCase()}.png`}
            alt={`${searched?.team?.abbreviation} team logo`}
            className="h-[100%] w-[100%]"
          />
          <img
            src={playerImage}
            alt="player headshot"
            className="absolute bottom-0.5 left-[3rem] rounded-[50%] opacity-95 h-[50%] w-[70%] border-2 md:left-[4.3rem]"
          />
        </div>
      ))}
    </>
  );
};

export default PlayerImage;
