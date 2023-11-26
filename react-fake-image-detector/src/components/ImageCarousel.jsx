import React from "react";
export default function ImageCarousel({ actual, fake,handleImageClick,remainingTime }) {
    return (
        <div>
            <p>Remaining Time: {remainingTime}s</p>
            <img
                src={actual}
                alt="Actual Website"
                onClick={() => handleImageClick('actual')}
                width='400px'
                height='400px'
                style={{ border: '1px solid black' }}
            />
            <img
                src={fake}
                //src={(`./assets/${imagePairs[currentPairIndex].fake}`)}
                alt="Fake Website"
                onClick={() => handleImageClick('fake')}
                width='400px'
                height='400px'
                style={{ border: '1px solid black', marginLeft: '20px' }}
            />
        </div>
    )
}