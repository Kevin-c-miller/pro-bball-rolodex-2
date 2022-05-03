import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center px-5 m-3 border-b-2 border-black">
      <div className="nav-header">
        <h1 className="font-bold text-3xl">Pro Basketball Rolodex</h1>
      </div>
      <div>
        <ul className="flex justify-center items-center px-3 mx-3">
          <Link to="/">
            <li className="m-3 px-3">Players</li>
          </Link>
          <Link to="/teams">
            <li className="mx-3 p-3">Teams</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
