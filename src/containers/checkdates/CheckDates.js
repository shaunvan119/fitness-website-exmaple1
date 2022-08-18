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

     <ul className="list-ul">
        <li className="list-dates">kamala Beach, Phuket Thailand November 1st 2022 <span className='count-font'><CountSpots/></span></li>
        <li className="list-dates">Ko Samui, Phuket Thailand February 19th 2023 <span className='count-font'><CountSpotsTwo/></span></li>
        <li className="list-dates">kamala Beach, Phuket Thailand October 1st 2023 <span className='count-font'><CountSpotsThree/></span></li>
        <li className="list-dates">kamala Beach, Phuket Thailand November 1st 2023 <span className='count-font'><CountSpotsFour/></span></li>
     </ul>
   
    

   

    </div>
    </div>
    
  )
}

export default CheckDates