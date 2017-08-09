import React from 'react';
import Button from '../../Components/Button';
import logo from './wild-rocks-logo1.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-bg"/>
            <div className="header-block">
                <div className="header-block-top">
                    <div className="header-block-logo">
                        <img src={logo} alt="Wild Rocks" className="header-logo"/>
                        <div className="header-logo-text">
                            Изготовление гипсовой плитки <br /> на заказ в Донецке, Харцызске и Еникиево.
                        </div>
                    </div>
                    <div className="header-block-phone">
                        <p className="header-block-phone-line"><a href="tel:+38095519442">+38 (095) 519-44-2</a>  / <a
                            href="tel:+380502680003">+38 (050) 268-00-03</a></p>
                    </div>
                </div>
                <div className="header-intro">
                    Мы производим гипсовую плитку<br />
                    «Искусственный камень» для внутренних<br />
                    отделочных работ. <br/>
                </div>
                <div className="header-block-button">
                    <Button/>
                </div>
            </div>
        </div>
    )
};

export default Header;