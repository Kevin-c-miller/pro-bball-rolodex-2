import { useState, useEffect } from 'react';
import axios from 'axios';
import PlayerImage from '../components/PlayerImage';
import PlayerInfo from '../components/PlayerInfo';
import PlayerStats from '../components/PlayerStats';
import Search from '../components/Search';
import Landing from '../components/Landing';
import { getPlayerInfo, getPlayerStats } from '../services/apiConfig';
import { PlayerInformation, Statistics } from '../models/player.model';
import { noImage } from '../assets/index';
import Error from '../components/Error';

const Home = () => {
  const [searched, setSearched] = useState('');
  const [player, setPlayer] = useState<PlayerInformation[]>([]);
  const [stats, setStats] = useState<Statistics[]>([]);
  const [playerImage, setPlayerImage] = useState('');
  const [toggle, setToggle] = useState(false);
  const [searchError, setSearchError] = useState(false);

  //   get player info
  const fetchPlayer = async (searched: string) => {
    try {
      const searchedPlayer = await getPlayerInfo(searched);
      const playerStatistics = await getPlayerStats(searchedPlayer[0].id);

      // checking for more than one returned player and asking for a narrower search if so
      if (searchedPlayer.length !== 1) {
        setSearchError(true);
        player.length > 0 && setPlayer([]);
      } else {
        setPlayer(searchedPlayer);
        setStats(playerStatistics);
        setToggle(true);
      }
    } catch (err) {
      setToggle(true);
      setSearchError(true);
    }
  };

  //  get player headshots
  const getPlayerImage = async (searched: string) => {
    //reverse the search input for headshot correct url structure
    const reverseName = searched.split(' ');
    [reverseName[0], reverseName[1]] = [reverseName[1], reverseName[0]];
    const lastName = reverseName[0];
    const firstName = reverseName[1];
    try {
      const imageUrl = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`;

      const res = await axios.get(imageUrl);

      res.data ===
      'Sorry, that player was not found. Please check the spelling.'
        ? setPlayerImage(noImage)
        : setPlayerImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  //  onchange for search bar
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearched(e.currentTarget.value);
    setSearchError(false);
    setToggle(false);
  };

  // search results
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!searchError) {
      fetchPlayer(searched);
      getPlayerImage(searched);
      setToggle(true);
    }

    setSearched('');
  };

  useEffect(() => {}, [searched, searchError]);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Landing />
      <div className="flex flex-col items-center justify-center mb-5">
        <Search
          searched={searched}
          handleSearch={handleSearch}
          handleChange={handleChange}
        />
        {toggle && (
          <>
            {searchError ? (
              <Error />
            ) : (
              <div className="flex flex-col justify-center items-start md:flex-row">
                <div className="flex justify-start items-start md:flex-row">
                  <PlayerImage playerImage={playerImage} player={player} />
                </div>
                <div className="flex flex-col justify-center items-start mx-4 md:flex-row">
                  <PlayerInfo player={player} />
                </div>

                {stats.length > 0 && (
                  <div className="flex flex-col justify-center items-start m-4">
                    <PlayerStats stats={stats} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
