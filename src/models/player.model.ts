export interface PlayerInformation {
  first_name: string;
  last_name: string;
  position: string;
  height_feet: number;
  height_inches: number;
  id: number;
  weight_pounds: number;
  team: {
    full_name: string;
    id: number;
    abbreviation: string;
    conference: string;
    division: string;
    city: string;
  };
}

export interface Statistics {
  ast: number;
  blk: number;
  pts: number;
  fg3_pct: number;
  reb: number;
  season: number;
  stl: number;
  ft_pct: number;
  fg_pct: number;
  fga: number;
  fgm: number;
  games_played: number;
  min: string;
  turnover: number;
  player_id: number;
}
