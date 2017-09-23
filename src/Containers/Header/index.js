import React from 'react';
import Button from '../../Components/Button';
import logo from './wild-rocks-logo1.svg';
import './Header.css';

const Modal = require('boron/DropModal');


class Header extends React.Component {
    showModal = () => {
        this.modal.show();
    };

    hideModal = () => {
        this.modal.hide();
    };

    callback = (event) =>{
        console.log(event);
    };

    render(){
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
                            <p className="header-block-phone-line"><a href="tel:+380713316144">+38 (071) 33-16-144</a> </p>
                        </div>
                    </div>
                    <div className="header-intro">
                        Мы производим гипсовую плитку<br />
                        «Искусственный камень» для внутренних<br />
                        отделочных работ. <br/>
                    </div>
                    <div className="header-block-button" onClick={this.showModal}>
                        <Button/>
                    </div>
                </div>
                <Modal ref={(modal)=>{this.modal=modal}}>
                        <h2>I am a dialog</h2>
                        <button onClick={this.hideModal}>Close</button>
                    </Modal>
            </div>
        );
    }
};

export default Header;