import React, { useState } from 'react';
import "./celeb.css"

const Celebration = () => {
  const [showContent, setShowContent] = useState(false);

  const handleVideoEnded = () => {
    setShowContent(true);
  };

  const handleVideoPlay = () => {
    setShowContent(false);
  };

  return (
    <>
      <div className="main_all">
        <div className="video-container">
          <div className="video-wrapper">
            <video id="myVideo" autoPlay controls onEnded={handleVideoEnded} onPlay={handleVideoPlay}>
              <source src='./Videos/victory.mp4' type='video/mp4'/>
            </video>
          </div>
        </div>

        <div className={`content text-center ${showContent ? 'show' : 'hide'}`}>
          <p>Congratulations 🎉🎊 on hitting your target score!🎉🎊</p>
          <p> It wasn't easy, but you did it!</p>
          <p> Well done!🥳🎁🎊</p>
          <p> 🪄🪄🪄PLAYER A🪄🪄🪄</p>
        </div>
      </div>
    </>
  )
}

export default Celebration;
