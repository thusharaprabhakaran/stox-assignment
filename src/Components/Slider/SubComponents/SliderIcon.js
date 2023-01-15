import React from 'react';

function SliderIcon({ title, src, id }) {

    return (
        <>

            <div className="stox-slider-image" key={id}>
                <img className="stox-slider-icon" alt="" src={src} />
                <div className="stox-slider-title" >{title}</div>
            </div>

        </>

    );
}

export default SliderIcon