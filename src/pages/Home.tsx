import { useState } from 'react';
import PlayerImage from '../components/PlayerImage';
import PlayerInfo from '../components/PlayerInfo';
import PlayerStats from '../components/PlayerStats';
import Search from '../components/Search';
import { getPlayerInfo, getPlayerStats } from '../services/apiConfig';
import { PlayerInformation, Statistics } from '../models/player.model';

const Home = () => {
  const [searched, setSearched] = useState('');
  const [player, setPlayer] = useState<PlayerInformation[]>([]);
  const [stats, setStats] = useState<Statistics[]>([]);

  const fetchPlayer = async (searched: string) => {
    const searchedPlayer = await getPlayerInfo(searched);
    const playerStatistics = await getPlayerStats(searchedPlayer[0].id);
    console.log(searchedPlayer);
    console.log(playerStatistics);

    setPlayer(searchedPlayer);
    setStats(playerStatistics);
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
        <div className="flex justify-center items-center mx-4">
          <PlayerInfo player={player} />
          <PlayerStats stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default Home;
