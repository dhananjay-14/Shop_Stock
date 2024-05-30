import React, { useRef, useState } from 'react'
import img1 from '/Banner/HomePageHeader.png'
import img2 from '/Banner/1.png'
import img3 from '/Banner/3.webp'
import { useEffect } from 'react'

const Slider = () => {
    const arrayImg = [img1, img3];
    const slider = useRef();
    const [currentPosition, setCurrentPosition] = useState(0);

    const next = () => {
        console.log("next called");
        const newPosition = currentPosition === 0 ? 50 : 0; // Toggle between 0 and 50
        if (slider.current)
            slider.current.style.transform = `translateX(-${newPosition}%)`;
        setCurrentPosition(newPosition);
        console.log("here")
    };

    useEffect(() => {
        setTimeout(next, 3000);
    }, [currentPosition]);
    // console.log(ind);
    return (
        <>
            <div ref={slider} className='Slider'>
                <img src={arrayImg[0]}></img>
                <img src={arrayImg[1]}></img>

            </div>
            {/* <button onClick={next}>Next</button> */}
        </>
    )
}

export default Slider
