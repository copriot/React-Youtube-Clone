import millify from "millify";
import { split } from "postcss/lib/list";
import { useState } from "react";
import React from "react";

const VideoInfo = ({ videos }) => {
  //metnin tamamı gösterilecek mi statei
  const [isFull, setIsFull] = useState(false);
  //tarihi formatlama
  const publishDate = new Date(videos?.publishDate).toLocaleDateString("tr", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  //metnin gösterilecek karakter sınırını belirle
  const text = isFull
    ? videos?.description //tüm metin
    : videos?.description.slice(0, 120) + "... daha fazla";
  return (
    <div
      onClick={() => setIsFull(!isFull)}
      className="bg-zinc-700 rounded p-2 mt-4 cursor-pointer hover:bg-opacity-75"
    >
      <div className=" flex gap-4 mb-2 font-bold">
        <p>{millify(videos?.viewCount)} Görüntülenme</p>
        <p>{publishDate}</p>
      </div>
      <p>
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line} <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
