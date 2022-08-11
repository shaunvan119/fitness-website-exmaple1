import React from 'react'
import videoBg from "../assets/videoBg.mp4"

const Main = () => {
  return (
    <div className='main'>
    <div className='overlay'></div>
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <h1>Thailand Health Retreat</h1>
    <p>Launching Soon</p>

    </div>
    
    </div>
  )
}

export default Main