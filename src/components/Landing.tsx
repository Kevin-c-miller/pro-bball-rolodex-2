import { bball } from '../assets/index';

const Landing = () => {
  return (
    <div className="min-h-screen font-bold text-4xl">
      <div className="flex flex-col justify-center items-center ">
        <div className="m-5 p-5">
          <h1>Pro Basketball Rolodex</h1>
        </div>
        <div className=" m-5 p-5">
          <img
            src={bball}
            alt="bball hoop"
            className="h-[200px] w-[200px] bg-transparent opacity-[0.7]  "
          />
        </div>
      </div>

      <div className="flex justify-center items-center p-4 m-4">
        <button className="p-3 m-3 border-white border-b-2 hover:border-orange-300 hover:rounded">
          Search Players
        </button>
        <button className="p-3 m-3 border-white border-b-2 hover:border-orange-300 hover:rounded">
          Search Teams
        </button>
      </div>
    </div>
  );
};

export default Landing;
