import React, { useRef } from 'react'
import './VideoPlayer.css'
import videows from '../../assets/videows.mp4'

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null);

    const closePlayer =(e) => {
        if (e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={videows} autoPlay muted controls loop></video>
    </div>
  )
}

export default VideoPlayer
