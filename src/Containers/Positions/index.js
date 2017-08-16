import React from 'react';
import './Positions.css';
import clock from './clock.png';
import plitka from './plitka.png';

const Positions = () => {
    return (
        <div className="positions">
            <div className="positions-container">
                <div className="positions-row">
                    <div className="positions-block positions-first-block">
                        <div className="positions-first-block-header">
                            ЭКОНОМЬТЕ
                        </div>
                        <div className="positions-first-block-about">
                            Доставка осуществляется по адресу
                            по сравнительно низким ценам,
                            а также действует скидка при
                            заказе свыше 15м2.
                        </div>
                        <img src={plitka} className="positions-first-block-image" alt=""/>
                    </div>
                    <div className="positions-block positions-two-block">
                        <div className="positions-two-block-header-bg" />
                        <div className="positions-two-block-header">
                            Вавилон 301
                        </div>
                    </div>
                </div>
                <div className="positions-row">
                    <div className="positions-block positions-time-block">
                        <div className="positions-time-block-header">
                            Выполнение заказа
                            в течении 24 часов.
                        </div>
                        <img style={{margin: '0 auto', display: 'block'}} src={clock} alt=""/>
                    </div>
                    <div className="positions-block positions-four-to-six positions-four-to-six__four">
                        <div className="positions-four-to-six-header-bg" />
                        <div className="positions-four-to-six-header">
                            Аризона 201
                        </div>
                    </div>
                    <div className="positions-block positions-four-to-six positions-four-to-six__five">
                        <div className="positions-four-to-six-header-bg" />
                        <div className="positions-four-to-six-header">
                            Аризона 202
                        </div>
                    </div>
                    <div className="positions-block positions-four-to-six positions-four-to-six__six">
                        <div className="positions-four-to-six-header-bg" />
                        <div className="positions-four-to-six-header">
                            Аризона 203
                        </div>
                    </div>
                </div>
                <div className="positions-row">
                    <div className="positions-block positions-last">
                        <div className="positions-last-header">
                            Большой ассортимент
                        </div>
                        <div className="positions-last-about">
                            декоративного камня и 3D-панелей
                            который стремительно растет.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Positions;