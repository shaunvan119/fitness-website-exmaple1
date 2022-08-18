import './count.css'
import React, { useState, useEffect } from 'react';


const CountSpots = () => {
    const [currentCount, setCount] = useState(8);
    const timer = () => setCount(currentCount - 1);
    

    useEffect(
        () => {
            if(currentCount <= 0)
        {
            
            document.getElementById('countdown').innerHTML = "Sold Out";
        }

            if (currentCount < 1) {
                return;
            }
            const id = setInterval(timer, 5000);
            return () => clearInterval(id);
        },
        
    );

    return (
            <div className='count-box'>
                <h2 className="spots-h1">Spots remaining:</h2>
                <span className='count-component'>{currentCount}</span> 
                <div id="countdown"></div>
            </div>
       
    )
};

export default CountSpots
