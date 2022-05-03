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
    <>
      <form
        onSubmit={handleSearch}
        className="flex flex-col justify-center items-center m-4"
      >
        <input
          type="text"
          placeholder="Enter Player Name...."
          className="border-2 border-solid border-black rounded-lg p-2 m-4"
          autoFocus
          onChange={handleChange}
          value={searched}
        />
        <button
          type="submit"
          className="border-2 border-solid border-black rounded-lg p-2 mx-4 my-2"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
