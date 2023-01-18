import React from "react";
import { useLocation } from "react-router-dom";
const VideoPage = () => {
  const { state } = useLocation();
  console.log(state.data);

  const { id, likes, userImgURL, tags, user, videos, comments, downloads } =
    state.data;
  console.log(`data : ${id},${videos.large.url}`);
  console.log("tags", tags);

  const tagsArray = tags.split(",");

  return (
    <div className="videopage">
      <video
        controls="controls"
        src={videos.large.url}
        width="980"
        height="920"
        autoPlay={false}
      />
      <div className="creator">
        <img src={userImgURL} alt="User Pic" />
        <h3>{user}</h3>
      </div>
      <div className="userInteraction">
        <h5>{comments}</h5>
        <h5>{downloads}</h5>
        <h5>{likes}</h5>
      </div>
      <div className="tagsArray">
        {tagsArray.map((tag, index) => {
          return (
            <span key={index} className="tags">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default VideoPage;
