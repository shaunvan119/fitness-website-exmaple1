import './count.css'
import React, { useState, useEffect } from 'react';


const CountSpotsTwo = () => {
    const [currentCount, setCount] = useState(15);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount < 1) {
                return;
            }
            const id = setInterval(timer, 16000);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Leads<br/>Generated<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};

export default CountSpotsTwo
