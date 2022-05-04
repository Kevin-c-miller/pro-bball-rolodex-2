import { noImage } from '../assets/index';

interface ImageProps {
  playerImage: string;
}

const PlayerImage = ({ playerImage }: ImageProps) => {
  console.log(playerImage);
  return (
    <div className="">
      {playerImage ? (
        <img
          src={playerImage}
          alt="player headshot"
          className="h-[300px] w-[400px] border-2 border-white rounded-[50%]"
        />
      ) : (
        <img
          src={noImage}
          alt="player headshot"
          className="h-[300px] w-[400px] border-2 border-white rounded-[50%]"
        />
      )}
    </div>
  );
};

export default PlayerImage;
