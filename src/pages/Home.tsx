import { useState } from 'react';
import PlayerImage from '../components/PlayerImage';
import PlayerInfo from '../components/PlayerInfo';
import PlayerStats from '../components/PlayerStats';
import Search from '../components/Search';
import { getPlayerInfo } from '../services/apiConfig';
import { PlayerInformation } from '../playerInfo.model';

const Home = () => {
  const [searched, setSearched] = useState('');
  const [player, setPlayer] = useState<PlayerInformation[]>([]);

  const fetchPlayer = async (searched: string) => {
    const searchedPlayer = await getPlayerInfo(searched);
    console.log(searchedPlayer);
    setPlayer(searchedPlayer);
  };

  //   change on form
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearched(e.currentTarget.value);
  };

  // search results
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetchPlayer(searched);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2>Search NBA Players</h2>
      <Search
        searched={searched}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      <div className="flex justify-center items-center">
        <PlayerImage />
        <div>
          <PlayerInfo player={player} />
          <PlayerStats />
        </div>
      </div>
    </div>
  );
};

export default Home;
