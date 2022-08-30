import React from "react";

const videoCard = ({ video }) => {
  const tags = video.tags.split(",");

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
      <h3>Credit :{video.user}</h3>
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

export default videoCard;
