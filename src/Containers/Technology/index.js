import React from 'react';
import './Technology.css';
import bg from './bg.jpg';
import Slider from "../../Components/Slider/index";

const Technology = () => {
    return (
        <div className="technology">
            <div className="technology-bg">
                <img src={bg}  alt=""/>
            </div>
            <div className="technology-block">
                <div className="technology-header">
                    Технология производства декоративной плитки
                </div>
                <div className="technology-content">
                    <Slider />
                </div>
            </div>
        </div>
    )
};

export default Technology;