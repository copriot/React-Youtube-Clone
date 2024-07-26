import React from "react";
import { BiSolidHomeHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col md:p-4">
      <Link>
        <div className="flex gap-2 py-4 px-2 items-center md:text-lg cursor-pointer rounded-md hover:bg-[#2D2D2D]">
          <span className="max-md:text-2xl">
            <BiSolidHomeHeart />
          </span>
          <span className="max-md:hidden line-clamp-1">Ana Sayfa</span>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
