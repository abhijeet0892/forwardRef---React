import React, { useRef } from "react";
import MyVideoPlayer from "./MyVideoPlayer";

const MyVideo = () => {
  const ref = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          ref.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          ref.current.pause();
        }}
      >
        Pause
      </button>
      <br />
      <MyVideoPlayer
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        type="video/mp4"
        width="300"
      />
    </>
  );
};

export default MyVideo;
