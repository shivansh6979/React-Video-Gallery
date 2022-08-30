import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import "./styles.css";
import Footer from "./components/Footer";
import VideoSlider from "./components/VideoSlider";
import VideoCard from "./components/VideoCard";
import VideoSearch from "./components/VideoSearch";
function App() {
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
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
