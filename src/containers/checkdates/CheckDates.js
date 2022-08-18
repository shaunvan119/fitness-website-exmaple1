import React from 'react'
import videoBg from "../../assets/videoBg.mp4"
import './checkdate.css'
import CountSpots from '../../components/CountSpots'
import CountSpotsTwo from '../../components/CountSpotsTwo'
import CountSpotsThree from '../../components/CountSpotsThree'
import CountSpotsFour from '../../components/CountSpotsFour'

const CheckDates = () => {
  return (
    
    <div className='main'>
    <div className='overlay'></div>
    
    <video src={videoBg} autoPlay loop muted/>
    <div className="content">
    <h1 className='heading-main'>Dates</h1>

     <ul >
     <hr
        style={{
          background: 'grey',
          border: 'none',
          height: '3px',
          marginBottom:'15px',
        }}
      />
        <li>kamala Beach, Phuket Thailand November 1st 2022 <CountSpots/></li>
        <hr
        style={{
          background: 'grey',
          border: 'none',
          height: '3px',
          marginTop:'15px',
          marginBottom:'15px',
        }}
      />
        <li>Ko Samui, Phuket Thailand February 19th 2023 <CountSpotsTwo/></li>
        <hr
        style={{
          background: 'grey',
          border: 'none',
          height: '3px',
          marginTop:'15px',
          marginBottom:'15px',
        }}
      />
        <li>kamala Beach, Phuket Thailand October 1st 2023 <CountSpotsThree/></li>
        <hr
        style={{
          background: 'grey',
          border: 'none',
          height: '3px',
          marginTop:'15px',
          marginBottom:'15px',
        }}
      />
        <li>kamala Beach, Phuket Thailand November 1st 2023 <CountSpotsFour/></li>
        <hr
        style={{
          background: 'grey',
          border: 'none',
          height: '3px',
          marginTop:'15px',
          marginBottom:'15px',
        }}
      />
     </ul>
   
    

   

    </div>
    </div>
    
  )
}

export default CheckDates