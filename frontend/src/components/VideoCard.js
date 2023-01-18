import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  //converting an string into an array
  const tags = video.tags.split(",");

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/VideoPage", { state: { data: video } });
  };

  return (
    <div className="card">
      <video
        controls="controls"
        src={video.videos.tiny.url}
        width="320"
        height="240"
        autoPlay={false}
        key={video.id}
      />
      <h3 onClick={() => clickHandler()}>Credit :{video.user}</h3>
      <div className="span-flex">
        <span>
          <strong>Views: {video.views}</strong>
        </span>
        <span>
          <strong>Downloads: {video.downloads}</strong>
        </span>
        <span>
          <strong>Likes: {video.likes}</strong>
        </span>
      </div>
      <div className="tags-container">
        {tags &&
          tags.map((tag, index) => {
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

export default VideoCard;
