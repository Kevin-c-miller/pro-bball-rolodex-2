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
    <div className="m-7">
      <form
        onSubmit={handleSearch}
        className="flex flex-col justify-center items-center m-4"
      >
        <input
          type="text"
          placeholder="Enter Player Name..."
          className="rounded-lg p-2 m-4"
          onChange={handleChange}
          value={searched}
          required
        />
        <button
          type="submit"
          className="cursor-pointer rounded-lg p-2 mx-4 my-2 hover:text-[#fed7a7] hover"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
