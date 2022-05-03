import React from 'react';
import Search from '../components/Search';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2>Find stats on your favorite NBA players</h2>
      <Search />
    </div>
  );
};

export default Home;
