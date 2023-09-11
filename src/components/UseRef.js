import React, { useRef } from 'react'

const UseRef = () => {

    const videoRef = useRef();


   const handlePlay = () =>{
    // alert("paly")
    videoRef.current.play();
    
} 
const handlePause = () =>{
    // alert("Pause")
    videoRef.current.pause();
    // videoRef.current.restart();


   } 
const Stop = () =>{
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  


   } 
  return (
    <>
        <div className="container m-auto text-center mx-4">
            <button className="btn btn-success mx-2" onClick={handlePlay}>Play</button>
            <button className="btn btn-danger" onClick={handlePause}>Pause</button>
            <button className="btn btn-danger" onClick={Stop}>Stop</button>
        </div>
<div className="container m-auto text-center my-5">
<video height={400} ref={videoRef}>
            <source src='/Videos/blue.mp4' />
        </video>
</div>
    </>
  )
}

export default UseRef