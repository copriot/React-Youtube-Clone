import { Link } from "react-router-dom";
import { categories } from "../constants/index";
import { useContext } from "react";
import { VideoContext } from "../context/videoContext";
const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);
  return (
    <div className="flex flex-col p-1 md:p-4  h-screen overflow-y-scroll ">
      {categories.map((item, i) => (
        <Link to={"/"} key={i} onClick={() => setSelectedCategory(item)}>
          <div
            className={`${
              selectedCategory.name === item.name && "bg-[#c4302b]"
            } flex gap-2 py-4 px-2 md:px-3  items-center md:text-lg cursor-pointer rounded-md hover:bg-[#dd1b1b]`}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden line-clamp-1">{item.name}</span>
          </div>
          {item.divider && <hr />}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
