import React from "react";
import './style.css';
import YouTube from 'react-youtube';
import { useState } from "react";

const YoutubeEmbed = ({ embedId }) => {

  //DO NOT REMOVE THIS RANDOM STATE: This state is used to refresh the iframe once the video has ended 
  const [random, setRandom] = useState();

  return(
    <div className="embedContainer">
    <div className="video-responsive">
    {/* <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> */}
    <YouTube 
      key={random}
      videoId={embedId}
      onEnd={event =>  setRandom(Math.random())}
    />
    </div>
  </div>
  )
};

export default YoutubeEmbed;