import React from 'react';
import first from './ft1.png';
import two from './ft4.png';
import three from './ft2.png';
import four from './ft3.png';
import './OurAdvantage.css';

const OurAdvantage = () => {
    return (
        <div className="our-advantage">
            <div className="our-advantage-bg">
            </div>
            <div className="our-advantage-block">
                <div className="our-advantage-header">
                    Преимущества нашей фирмы
                </div>
                <div className="our-advantage-content">
                    <div className="our-advantage-content-item">
                        <img src={first} className="our-advantage-content-item-img" alt=""/>
                        <div className="our-advantage-content-item-text-block">
                            <div className="our-advantage-content-item-bg"/>
                            <div className="our-advantage-content-item-text">
                                Возможность индивидуального окрашивания <br/>
                                декоративного камня по желанию клиента;
                            </div>
                        </div>
                    </div>
                    <div className="our-advantage-content-item right">
                        <img src={two} className="our-advantage-content-item-img" alt=""/>
                        <div className="our-advantage-content-item-text-block">
                            <div className="our-advantage-content-item-bg"/>
                            <div className="our-advantage-content-item-text">
                                Большой ассортимент декоративного камня<br/>
                                и 3D-панелей, который стремительно растет.
                            </div>
                        </div>
                    </div>
                    <div className="our-advantage-content-item">
                        <img src={three} className="our-advantage-content-item-img" alt=""/>
                        <div className="our-advantage-content-item-text-block">
                            <div className="our-advantage-content-item-bg"/>
                            <div className="our-advantage-content-item-text">
                                При заказе обсуждаются все вопросы по виду<br/>
                                продукции, уточняется стоимость, условия и<br/>
                                сроки поставки. При наличии декоративной<br/>
                                плитки на складе, ее отгрузка производится по<br/>
                                будним дням в день поступления заказа. Срок<br/>
                                доставки составляет 1-3 рабочих дня;
                            </div>
                        </div>
                    </div>
                    <div className="our-advantage-content-item right">
                        <img src={four} className="our-advantage-content-item-img" alt=""/>
                        <div className="our-advantage-content-item-text-block">
                            <div className="our-advantage-content-item-bg"/>
                            <div className="our-advantage-content-item-text">
                                Доставка осуществляется по адресу по<br />
                                сравнительно низким ценам, а также действует<br />
                                скидка при заказе свыше 15 кв.м;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurAdvantage;