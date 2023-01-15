import React from 'react';
import './Slider.css';
import SliderIcon from './SubComponents/SliderIcon';
import { sliderData } from '../../Shared/slider-content';

function Slider() {
    return (
        <div>
            <div className="stox-slider-layout-horizontal">
                {sliderData.map(({ title, src, id }) => (
                    <SliderIcon title={title} src={src} key={id} />
                ))}

            </div>
        </div>
    )
}

export default Slider