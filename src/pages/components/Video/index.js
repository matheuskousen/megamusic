import React, { useEffect, useRef } from "react";

import Data from "../Database/data";
export default function Video({ isVideo }) {
  const vidonplay = useRef(null);

  let audioData = Data;

  useEffect(() => {
    let currentAudio = {};
    let currentPlaying = 0;

    const Start = () => {
      update();
      vidonplay.current.onended = () => next();
    };

    const next = () => {
      currentPlaying++;
      if (currentPlaying === audioData.length) reset();
      update();
    };
    // UPDATE
    const update = () => {
      currentAudio = audioData[currentPlaying];
      vidonplay.current.src = currentAudio.Src;
      vidonplay.current.autoplay = true;
    };

    const reset = () => {
      currentPlaying = 0;
      update();
    };

    Start();
  }, [vidonplay, audioData]);

  return <video src={isVideo} ref={vidonplay} playsInline controls />;
}
