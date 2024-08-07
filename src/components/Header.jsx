import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  // navigate kurulumu
  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e) => {
    // sayfayı yenilemeyi engelle
    e.preventDefault();

    // aratılan metne eriş
    const text = e.target[0].value;

    // kullanıcıyı results sayfasına yönlendir
    navigate(`/results?search_query=${text}`);
  };

  return (
    <header className="flex  justify-between items-center px-4 backdrop-blur-md bg-white/30">
      <Link className="flex items-center" to={"/"}>
        <img
          src="src/utils/yotöbe1.jpeg"
          alt="Logo"
          className="rounded m-5 w-[60px]"
        />
        <h1 className="text-2xl max-sm:hidden">
          Yo <span className="text-red-600">Tövbe</span> Piremiyum
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex group border border-gray-500 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          placeholder="Ara"
          className=" rounded-l-[40px] bg-wite text-black rounded outline-none px-5 py-2 focus:border-black focus:border"
        />
        <button className="bg-white px-4 text-2xl  hover:bg-purple-200">
          <BiSearchAlt className="text-black" />
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
