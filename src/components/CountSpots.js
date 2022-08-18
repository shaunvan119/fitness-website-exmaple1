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
            const id = setInterval(timer, 1500);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Leads<br/>Generated<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                <div id="countdown"></div>
                </div>
       
    )
};

export default CountSpots
