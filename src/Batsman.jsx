import  { useState } from 'react';

function Batsman  () {

    const [runs, setRuns]= useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateRuns= runs + 6;
        setRuns(updateRuns);
    }

    return (
        <div>
           <h2>Player : Bangla batsman</h2>
           {
            runs > 50 && <p>you score : 50+</p>
           }
           <h1>Score : {runs}</h1> 
           <button onClick={handleSingle}>Singles</button>
           <button onClick={handleFour}>Four</button>
           <button onClick={handleSix}>Six</button>
        </div>
    );
};

export default Batsman;