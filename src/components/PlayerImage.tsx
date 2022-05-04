import React from 'react';

interface ImageProps {
  playerImage: string;
}

const PlayerImage = ({ playerImage }: ImageProps) => {
  return (
    <div>
      <img
        src={playerImage}
        alt="player headshot"
        className="h-[300px] w-[400px] border-2 border-white rounded-[50%]"
      />
    </div>
  );
};

export default PlayerImage;
