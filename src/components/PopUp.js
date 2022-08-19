import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popup.css'

const PopUp = () => {
  return (
     <div className="popup-wrapper">
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
  </div>
  )
}

export default PopUp