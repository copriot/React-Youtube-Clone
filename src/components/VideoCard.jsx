import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";
const VideoCard = ({ videoInfo }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/watch?v=${videoInfo.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="cursor-pointer"
    >
      {/*resim alanı*/}
      <div>
        <img
          src={
            isHover && videoInfo.richThumbnail
              ? videoInfo.richThumbnail[0].url
              : videoInfo.thumbnail[videoInfo.thumbnail.length - 1].url
          }
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      {/*video alt detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          src={videoInfo.channelThumbnail && videoInfo.channelThumbnail[0].url}
          alt="logo"
          className="w-14 h-14 rounded-full c-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{videoInfo.title}</h4>
          <p>{videoInfo.channelTitle}</p>
          <div className="flex gap-3">
            <p className="flex gap-2">
              <span>{millify(videoInfo.viewCount)}</span>
              <span className="text">Görüntülenme</span>
            </p>
            *
            <p className="whitespace-nowrap text-[14px]">
              {videoInfo.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
