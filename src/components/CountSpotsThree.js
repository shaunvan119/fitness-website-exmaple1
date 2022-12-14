import './count.css'
import React, { useState, useEffect } from 'react';


const CountSpotsThree = () => {
    const [currentCount, setCount] = useState(25);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => () => {
            if(currentCount <= 0)
        {
            
            document.getElementById('countdownThree').innerHTML = "Sold Out";
        }
            if (currentCount < 1) {
                return;
            }
            const id = setInterval(timer, 9000);
            return () => clearInterval(id);
        },
        
    );

    return (
         <div className='count-box'>
                <h2 className="spots-h1">Spots remaining:</h2>
                <span className='count-component'>{currentCount}</span> 
                <div id="countdownThree"></div>
                </div>
       
    )
};

export default CountSpotsThree
