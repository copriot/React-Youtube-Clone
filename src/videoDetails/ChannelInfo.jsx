import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { millify } from "millify";

const ChannelInfo = ({ videos }) => {
  return (
    <>
      <h1 className="text-xl my-3 font-bold">{videos?.title}</h1>

      <section className="flex justify-between">
        {/* sol */}
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full"
            src={videos?.channelThumbnail[0].url}
            alt={videos?.channelTitle}
          />

          <div>
            <h4 className="font-bold">{videos?.channelTitle}</h4>
            <p className="text-gray-400">{videos?.subscriberCountText}</p>
          </div>
        </div>

        {/* sağ */}
        <div className="flex items-center bg-zinc-700 rounded-full cursor-pointer">
          <div className="flex gap-1 items-center py-2 px-6 border-r">
            <AiOutlineLike />
            {millify(videos?.likeCount)}
          </div>
          <div className="py-2 px-6 ">
            <AiOutlineDislike />
          </div>
        </div>
      </section>
    </>
  );
};

export default ChannelInfo;
