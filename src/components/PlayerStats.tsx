import React from 'react';

interface StatsProps {
  stats: {
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
  }[];
}

const PlayerStats = ({ stats }: StatsProps) => {
  return (
    <div className="mx-4">
      <h5>Stats</h5>
      {stats.map((stats) => (
        <div key={stats?.player_id}>
          <h5>
            <strong>Season:</strong> {stats?.season}
          </h5>
          <ul>
            <li>
              <strong>GP: </strong>
              {stats?.games_played}
            </li>
            <li>
              <strong>PPG: </strong>
              {stats?.pts}
            </li>
            <li>
              <strong>Reb: </strong>
              {stats?.reb}
            </li>
            <li>
              <strong>Ast: </strong>
              {stats?.ast}
            </li>
            <li>
              <strong>Stls: </strong>
              {stats?.stl}
            </li>
            <li>
              <strong>Blk: </strong>
              {stats?.blk}
            </li>
            <li>
              <strong>Min: </strong>
              {stats?.min}
            </li>
            <li>
              <strong>TO: </strong>
              {stats?.turnover}
            </li>
            <li>
              <strong>FT%: </strong>
              {stats?.ft_pct}
            </li>
            <li>
              <strong>3pt%: </strong>
              {stats?.fg3_pct}
            </li>
            <li>
              <strong>FGM: </strong>
              {stats?.fgm}
            </li>
            <li>
              <strong>FGA</strong>
              {stats?.fga}
            </li>
            <li>
              <strong>FG%: </strong>
              {stats?.fg_pct}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PlayerStats;
