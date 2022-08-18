import './count.css'
import React, { useState, useEffect } from 'react';


const CountSpotsThree = () => {
    const [currentCount, setCount] = useState(10);
    const timer = () => setCount(currentCount - 1);

    useEffect(
        () => {
            if (currentCount < 1) {
                return;
            }
            const id = setInterval(timer, 17000);
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

export default CountSpotsThree