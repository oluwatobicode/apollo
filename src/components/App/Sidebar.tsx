import { Search, Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden md:block w-80 h-screen  bg-textColorSec pl-4 pr-4 pb-4 pt-8 overflow-y-auto">
      <div className="flex justify-between items-center mb-5">
        <img src="./APOLLO.svg" className="" alt="apollo" />

        <Plus size={25} className="cursor-pointer" />
      </div>
      <div className="mb-4">
        <div className="relative items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-8 rounded-md bg-black text-textColorSec placeholder:text-textColorSec"
          />
          <Search className="absolute left-2 top-[11px] h-4 w-4 text-textColorSec" />
        </div>
      </div>
      <div className="space-y-2 ">
        <p className="text-sm text-black font-semibold">
          Today - Tuesday, July 9, 2024
        </p>
        <div className="bg-black text-white p-2 rounded-md flex justify-between items-center">
          <p>How to write my exam</p>
          <span className="text-[13px] text-textColorSec">6:25pm</span>
        </div>
        <p className="text-sm text-black font-semibold">
          Sunday - July 7, 2024
        </p>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-black text-white p-2 rounded-md flex justify-between items-center"
          >
            <p>How to write my exam</p>
            <span className="text-[13px] text-textColorSec">6:25pm</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <button
          // onClick={() => navigate("/app")}
          className="p-2 text-textColorSec bg-textColor font-fontOne rounded-md font-normal text-[16px]"
        >
          About
        </button>
        <button
          // onClick={() => navigate("/app")}
          className="p-2 text-textColorSec bg-textColor font-fontOne rounded-md font-normal text-[16px]"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
