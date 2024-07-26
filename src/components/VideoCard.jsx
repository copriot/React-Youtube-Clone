import React from "react";

const VideoCard = () => {
  return (
    <div className="cursor-pointer">
      {/*resim alanı*/}
      <div>
        <img
          src="https://i.ytimg.com/vi/3X08UfKOE-M/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBUKEkwDw==&rs=AOn4CLC8P1aemHMyMZ9kWztdSk-xQq2CaA"
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      {/*video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src="https://yt3.ggpht.com/_h_p-OVRpbr9NzhfQNwIygLtbcHcwTUXqyc09L_OO6T0f1H9hH5MFOxLb4otU5C9uqNuhvv3NLk=s68-c-k-c0x00ffffff-no-rj"
          alt="logo"
          className="w-14 h-14 rounded-full c-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">Title</h4>
          <p>channelTitle</p>
          <div className="flex gap-3">
            <p className="flex gap-2">
              <span>963,2k</span>
              <span className="text">Görüntülenme</span>
            </p>
            *<p>1 ay önce yayınlandı</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
