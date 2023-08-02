import React, { useState } from 'react';
import './Exercise1.css';

const Exercise1 = () => {
    const [state, setState] = useState({
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://vsegda-pomnim.com/uploads/posts/2022-04/1651185805_60-vsegda-pomnim-com-p-korzinka-s-ovoshchami-i-fruktami-foto-70.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"
        ],
        currentImg: 0
    });

    const shiftImageBack = () => {
        setState(prevState => ({
            ...prevState,
            currentImg: (prevState.currentImg - 1 + prevState.images.length) % prevState.images.length
        }));
    }

    const shiftImageForward = () => {
        setState(prevState => ({
            ...prevState,
            currentImg: (prevState.currentImg + 1) % prevState.images.length
        }));
    }

    return (
        <div>
            <button className="backward" onClick={shiftImageBack}>Back</button>
            <img src={state.images[state.currentImg]} className="gallery-image"  />
            <button className="forward" onClick={shiftImageForward}>Forward</button>
        </div>
    );
}

export default Exercise1;
