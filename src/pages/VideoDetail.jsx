import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { useSearchParams } from "react-router-dom";

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  //arama paramatrelerine erişim için
  const [searchParams] = useSearchParams();
  //urlden v isimli parametreye searcParams içindeki get metodu ile erişme
  const id = searchParams.get("v");
  console.log(id);
  //id'si bilinen videonun bilgilerini al apiden
  useEffect(() => {
    api.get(`/video/info?id=${id}`).then((res) => setVideos(res.data));
    api.get(`/comments?id=${id}`).then((res) => setComments(res.data));
  }, [id]);
  return <div>VideoDetail</div>;
};

export default VideoDetail;
