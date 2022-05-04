import React from 'react';

interface SearchProps {
  searched: string;
  handleSearch: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Search = ({
  searched,
  handleSearch = () => {},
  handleChange = () => {},
}: SearchProps) => {
  return (
    <div className="mt-7">
      <h2 className="text-center">Search NBA Players</h2>
      <form
        onSubmit={handleSearch}
        className="flex flex-col justify-center items-center m-4"
      >
        <input
          type="text"
          placeholder="Enter Player Name...."
          className="border-2 border-solid border-[#fed7a7] rounded-lg p-2 m-4"
          onChange={handleChange}
          value={searched}
        />
        <button
          type="submit"
          className="border-2 border-solid border-[#fed7a7] cursor-pointer rounded-lg p-2 mx-4 my-2 hover:text-[#fed7a7] hover"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
