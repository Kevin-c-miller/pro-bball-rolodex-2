import axios from 'axios';

const DOMAIN = 'https://www.balldontlie.io/api/v1/';

// get search player name
export const getPlayerInfo = async (searchInput: string) => {
  try {
    const url = `${DOMAIN}players?search=${searchInput}`;
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

//  get searched player stats
export const getPlayerStats = async (searchInput: string) => {
  try {
    const url = `${DOMAIN}season_averages?player_ids[]=${searchInput}`;
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};

//  get player headshots
export const getPlayerHeadshots = async (searchInput: string) => {
  //reverse search input for headshot API call
  const reverseName = searchInput.split(' ');
  [reverseName[0], reverseName[1]] = [reverseName[1], reverseName[0]];
  const lastName = reverseName[0];
  const firstName = reverseName[1];

  try {
    const url = `https://nba-players.herokuapp.com/players/${lastName}/${firstName}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// get team info
export const getTeam = async (team: string) => {
  try {
    const url = `${DOMAIN}teams`;
    const res = await axios.get(url);
    return res.data.data;
  } catch (error) {
    console.error(error);
  }
};
