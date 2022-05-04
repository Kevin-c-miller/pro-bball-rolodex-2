import { useState } from 'react';
import PlayerImage from '../components/PlayerImage';
import PlayerInfo from '../components/PlayerInfo';
import PlayerStats from '../components/PlayerStats';
import Search from '../components/Search';
import { getPlayerInfo, getPlayerStats } from '../services/apiConfig';
import { PlayerInformation, Statistics } from '../models/player.model';
import Landing from '../components/Landing';

const Home = () => {
  const [searched, setSearched] = useState('');
  const [player, setPlayer] = useState<PlayerInformation[]>([]);
  const [stats, setStats] = useState<Statistics[]>([]);
  const [toggle, setToggle] = useState(false);
  const [playerImage, setPlayerImage] = useState('');

  //   get player info
  const fetchPlayer = async (searched: string) => {
    const searchedPlayer = await getPlayerInfo(searched);
    const playerStatistics = await getPlayerStats(searchedPlayer[0].id);

    setPlayer(searchedPlayer);
    setStats(playerStatistics);
    setToggle(true);
  };

  //  get player headshots
  const getPlayerImage = (searched: string) => {
    //reverse the search input for headshot correct url structure
    const reverseName = searched.split(' ');
    [reverseName[0], reverseName[1]] = [reverseName[1], reverseName[0]];
    const lastName = reverseName[0];
    const firstName = reverseName[1];
    try {
      const imageUrl = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`;

      setPlayerImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  //  onchange for search bar
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearched(e.currentTarget.value);
  };

  // search results
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    fetchPlayer(searched);
    getPlayerImage(searched);
    setSearched('');
  };

  console.log(player);
  console.log(stats);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Landing />
      <h2>Search NBA Players</h2>
      <Search
        searched={searched}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      {toggle && (
        <div className="flex justify-center items-center">
          <PlayerImage playerImage={playerImage} />
          <div className="flex justify-center items-center mx-4">
            <PlayerInfo player={player} />
            <PlayerStats stats={stats} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
