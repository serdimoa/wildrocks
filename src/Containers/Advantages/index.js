import React from 'react';
import './Advantages.css';
import icon from './icon.svg';
import icon1 from './icon1.svg';
import icon4 from './icon4.svg';
import icon3 from './icon3.svg';
import icon2 from './icon2.svg';
import icon6 from './icon6.svg';


class Advantages extends React.Component {
    state = {
        items: [
            {
                icon: icon1,
                title: '1.Экологически чистая',
                content: `На сегодняшний день каждый знает
                          ценность собственного здоровья и
                          здоровья близких, потому выбор
                          качественных и безопасных материалов
                          для дома – это правильный выбор. 
                          В то же время гипс не притягивает к 
                          себе пыль, потому вне зависимости от
                          формы рельефа, его можно будет
                          довольно легко и быстро поддерживать
                          в чистоте;`,
            },
            {
                icon: icon2,
                title: '2.Небольшой вес изделия',
                content: `Позволяет без риска использовать ее
                          для декора даже на гипсокартонных
                          стенах, без предварительных укрепления
                          конструкции. Гипсовая плитка крепиться
                          к стене с помощью специального клея,
                          а иногда используются жидкие гвозди`,
            },
            {
                icon: icon3,
                title: '3.Высокая простота в монтаже',
                content: `Позволяет заняться декором
                          собственными силами, так как не
                          требует особых знаний, или навыков;`,
            },
            {
                icon: icon4,
                title: '4.Гипс не стареет, и не портиться',
                content: `Гипс не стареет и не портиться со
                          временем, потому сколько он
                          прослужит зависит от того насколько
                          бережно к нему относятся.`,
            },
            {
                icon: icon,
                title: '5. Звуко и теплоизоляция',
                content: `Гипсовая плитка имеет так же хорошую звуко- и теплоизоляцию,
                          что сегодня играет не последнюю роль.
                          Позитивно влияет на микроклимат в
                          комнате вбирая в себя излишки влаги,
                          или отдавая её обратно.`,
            },
            {
                icon: icon6,
                title: '6.Низкая цена',
                content: `Цена у декоративной гипсовой плитки
                          ниже, чем у большинства аналогичных
                          декоративных материалов!`,
            },
        ],
        active: 0
    };

    setActive = (active) => {
        this.setState({
            active
        })
    };

    isActive = (active) => {
        if (active===this.state.active) return 'advantages-right-block-list-active';
    };

    render(){
        return (
            <div className="advantages">
                <div className="advantages-block">
                    <div className="advantages-header">
                        Преимущества гипсовой плитки
                    </div>
                    <div className="advantages-content">
                        <div className="advantages-content-area">
                            <div className="advantages-left-block">
                                <img src={this.state.items[this.state.active].icon} alt="icon"/>
                                <span className="advantages-left-block-header">{this.state.items[this.state.active].title}</span>
                                <span className="advantages-left-block-content">
                                {this.state.items[this.state.active].content}
                            </span>
                            </div>
                            <div className="advantages-right-block">
                                <ul className="advantages-right-block-list">
                                    <li onClick={()=>this.setActive(0)} className={this.isActive(0)}>1. Экологически чистая.</li>
                                    <li onClick={()=>this.setActive(1)} className={this.isActive(1)}>2. Небольшой вес изделия.</li>
                                    <li onClick={()=>this.setActive(2)} className={this.isActive(2)}>3. Высокая простота в монтаже.</li>
                                    <li onClick={()=>this.setActive(3)} className={this.isActive(3)}>4. Гипс не стареет и не портиться.</li>
                                    <li onClick={()=>this.setActive(4)} className={this.isActive(4)}>5. Звуко- и теплоизоляция.</li>
                                    <li onClick={()=>this.setActive(5)} className={this.isActive(5)}>6. Низкая цена.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Advantages;