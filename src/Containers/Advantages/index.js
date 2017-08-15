import React from 'react';
import './Advantages.css';
import icon from './icon.svg';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="advantages-block">
                <div className="advantages-header">
                    Преимущества гипсовой плитки
                </div>
                <div className="advantages-content">
                    <div className="advantages-content-area">
                        <div className="advantages-left-block">
                            <img src={icon} alt="icon"/>
                            <span className="advantages-left-block-header">5. Звуко и теплоизоляция</span>
                            <span className="advantages-left-block-content">
                                Гипсовая плитка имеет так же
                                хорошую звуко- и теплоизоляцию,
                                что сегодня играет не последнюю роль.
                                Позитивно влияет на микроклимат в
                                комнате вбирая в себя излишки влаги,
                                или отдавая её обратно.
                            </span>
                        </div>
                        <div className="advantages-right-block">
                            <ul className="advantages-right-block-list">
                                <li>1. Экологически чистая.</li>
                                <li>2. Небольшой вес изделия.</li>
                                <li>3. Высокая простота в монтаже.</li>
                                <li>4. Гипс не стареет и не портиться.</li>
                                <li className="advantages-right-block-list-active">5. Звуко- и теплоизоляция.</li>
                                <li>6. Низкая цена.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Advantages;