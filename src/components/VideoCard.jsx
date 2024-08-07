import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ videos, isRow }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${videos.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      {/*resim alanı*/}
      <div>
        <img
          src={
            isHover && videos?.richThumbnail && videos.richThumbnail[0]?.url
              ? videos.richThumbnail[0].url
              : videos?.thumbnail &&
                videos.thumbnail[videos.thumbnail.length - 1]?.url
          }
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      {/*video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src={videos?.channelThumbnail && videos?.channelThumbnail[0].url}
          alt="logo"
          className="w-14 h-14 rounded-full c-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{videos?.title}</h4>
          <p>{videos?.channelTitle}</p>
          <div className="flex gap-3">
            <p className="flex gap-2">
              <span>{millify(videos?.viewCount)}</span>
              <span className="text">Görüntülenme</span>
            </p>

            <p className="whitespace-nowrap text-[14px]">
              {videos?.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
