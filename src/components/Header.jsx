import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex border-gray-400 justify-between items-center p-4">
      <Link>
        <img
          src="src/utils/yotöbe1.jpeg"
          alt="Logo"
          className="rounded m-5 w-[60px]"
        />
        <h1 className="text-2xl max-sm:hidden">YoTövbePremium</h1>
      </Link>
      <form className="flex group border border-gray-500 rounded-[20px] overflow-hidden">
        <input
          type="text"
          placeholder="Ara"
          className="bg-black text-white rounded outline-none px-5 py-2 focus:border-blue-500 focus:border"
        />
        <button className="bg-zinc-400 px-4 text-2xl  hover:bg-yellow-600">
          <BiSearchAlt />
        </button>
      </form>
      <div className="flex text-2xl cursor-pointer gap-4">
        <HiBellAlert className="hover:text-gray-400 duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
