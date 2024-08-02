import { Link } from "react-router-dom";
import { categories } from "../constants/index";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";
const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col  md:p-4  h-screen overflow-y-scroll backdrop-blur-md bg-white/30 border border-gray-200 shadow-lg  rounded-lg">
      {categories.map((item, i) => (
        <Link to={"/"} key={i} onClick={() => setSelectedCategory(item)}>
          <div
            className={`${
              selectedCategory.name === item.name && "bg-[#c4302b]"
            } flex gap-2 p-3 md:px-3  items-center md:text-lg cursor-pointer rounded-md hover:bg-[#bc8a8a] `}
          >
            <span className="max-md:text-2xl  text-center">{item.icon}</span>
            <span className="max-md:hidden line-clamp-1">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
