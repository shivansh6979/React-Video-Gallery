import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoSlider from "./VideoSlider";
import VideoCard from "./VideoCard";
import VideoSearch from "./VideoSearch";
function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [term, SetTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/videos/?key=29483234-f2bb2fad1c3e504655c42c391&q=${term}&pretty=true`
      )
      .then((res) => {
        setVideos(res.data);
        SetLoading(false);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }, [term]);

  console.log("gnjngfgn", videos);

  return (
    <div>
      <VideoSearch searchText={(text) => SetTerm(text)} />
      {!loading && videos.hits.length === 0 && (
        <h1 className="message">No Images Found</h1>
      )}
      <VideoSlider videos={videos} />
      <div className="flex-main">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          videos &&
          videos?.hits?.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })
        )}
      </div>
    </div>
  );
}

export default Home;
