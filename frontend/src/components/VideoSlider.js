import React from "react";

function VideoSlider({ videos }) {
  return (
    <div className="slider">
      {videos &&
        videos?.hits?.map((video) => {
          return (
            <video
              controls="controls"
              src={video.videos.small.url}
              width="320"
              height="240"
              autoPlay={false}
              key={video.id}
            />
          );
        })}
    </div>
  );
}

export default VideoSlider;
