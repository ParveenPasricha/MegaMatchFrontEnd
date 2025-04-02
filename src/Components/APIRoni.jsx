import React from "react";
import MuxPlayer from "@mux/mux-player-react";

const MuxVideo = () => {
  const playbackId = "abcd1234efgh5678"; 

  return (
    <div className="w-full sm:w-64 h-40 rounded-lg">
      <MuxPlayer
        streamType="on-demand"
        playbackId={playbackId}
        controls
        autoPlay
        muted
      />
    </div>
  );
};

export default MuxVideo;
