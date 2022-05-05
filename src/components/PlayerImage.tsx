interface ImageProps {
  playerImage: string;
}

const PlayerImage = ({ playerImage }: ImageProps) => {
  return (
    <div className="">
      {playerImage && (
        <img
          src={playerImage}
          alt="player headshot"
          className="h-[300px] w-[400px] border-2 border-white rounded-xl"
        />
      )}
    </div>
  );
};

export default PlayerImage;
