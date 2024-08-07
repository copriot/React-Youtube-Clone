import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Comments from "../videoDetails/Comments";
import VideoInfo from "../videoDetails/VideoInfo";
import ChannelInfo from "../videoDetails/ChannelInfo";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  //arama paramatrelerine erişim için
  const [searchParams] = useSearchParams();
  //urlden v isimli parametreye searcParams içindeki get metodu ile erişme
  const id = searchParams.get("v");
  console.log(videos);
  //
  //id'si bilinen videonun bilgilerini al apiden
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideos(res.data));
    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);
  return (
    <div className="detail-page overflow-auto  p-[45px]  xl:px-[110px] h-[100vh]">
      {/*video icerigi*/}

      <div className="">
        <div className="h-[30vh] lg:h-[60vh] md:h-[45vh]">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>

        {!videos && !comments ? (
          <p>Yükleniyor</p>
        ) : (
          <>
            <ChannelInfo videos={videos} />
            <VideoInfo videos={videos} />
            <Comments data={comments} />
          </>
        )}
      </div>
      {/*İlgili videolar*/}
      <div className="wrapper flex flex-col gap-5 ps-5">
        {videos?.relatedVideos.data.map((x, videoId) => (
          <VideoCard key={x.videoId} video={x} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
