import React from 'react';
import Button from '../../Components/Button';
import logo from './wild-rocks-logo1.svg';
import InputMask from 'react-input-mask';
import './Header.css';

const Modal = require('boron/DropModal');


class Header extends React.Component {
    showModal = () => {
        this.modal.show();
    };

    hideModal = () => {
        this.modal.hide();
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
                    <form method="POST" action="http://formspree.io/serdimoa@gmail.com" className="form" >
                        <h2>Заявка</h2>
                        <h3>Заполните данную форму и <br/> мы с вами свяжемся </h3>
                        <input type="hidden" name="_subject" value="Новая заявка с сайта!" />
                        <input type="hidden" name="_language" value="ru" />
                        <input type="text" name="_gotcha" style={{display: 'none'}} />
                        <input type="hidden" name="_next" value="//wildrocks.ru" />
                        <label htmlFor="name" className="input">
                            <span>
                                Ваше имя
                            </span>
                            <input id="name" name="Имя" />
                        </label>
                        <label htmlFor="phone" className="input">
                            <span>
                                Телефон
                            </span>
                            <InputMask id="phone" name="Телефон" mask="+38 (999) 999-99-99" />
                        </label>
                        <label htmlFor="message" className="input">
                            <span>
                                Сопроводительное сообщение
                            </span>
                            <textarea id="message" name="Cообщение"></textarea>
                        </label>
                        <button className="send" type="submit">Отправить</button>
                    </form>
                </Modal>
            </div>
        );
    }
};

export default Header;