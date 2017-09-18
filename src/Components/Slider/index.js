import React from 'react';
import './Slider.css';
import first from './first.png';
import two from './knauf.png';
import three from './pokraska.png';

class Slider extends React.Component {
    state = {
        items: {
            first: {
                title: '1.Качественные формы.',
                text: `При производстве декоративной плитки используются <br />
                       гибкие силиконовые формы. Гибкие силиконовые формы <br />
                       является основным звеном в производстве декоративной <br />
                       плитки. От качества форм зависит и качество декоративной <br />
                       плит, а особенно превосходный рельеф каждой <br />
                       изготовленной плитки. Другим важным параметром <br />
                       качества формы является оригинальность типажа <br />
                       готовой продукции.`,
                img: first,
            },
            two: {
                title: '2. Качественное сырье.',
                text: `При изготовлении декоративной плитки используется<br />
                       высококачественные материалы, основным из которых<br />
                       является высокопрочный гипс Г-Данный вид гипса является<br />
                       негорючим, огнестойким материалом, не содержит токсичных<br />
                       составляющих. А так же для усиления прочности используется<br />
                       фиброволокно в 3D-панелях.`,
                img: two,
            },
            three: {
                title: '3. Промышленная сушка и тройная степень покраски.',
                text: `Промышленная сушка – обеспечивает равномерное высыхание <br />
                       и увеличение срока службы декоративной плитки и 3D-панелей. <br />
                         <br />
                       Тройная степень покраски: <br />
                       - добавление красителя в раствор при заливке декоративной плитки; <br />
                       - ручное нанесение краски пульверизатором и аэрографом поверх <br />
                        декоративной плитки; <br />
                       - закрепление цвета  матовым акриловым лаком.`,
                img: three,
            }

        },
        active: 0,
        timers: ['first', 'two', 'three'],
        intervalId: 0,
    };

    timer = () => {
        const getActive = this.state.active===2? 0 : this.state.active+1;
        this.setState({
            active: getActive,
        });

    };

    componentDidMount() {
        const intervalId = setInterval(this.timer, 7000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    renderSlide = () => {
        const slide = this.state.items[this.state.timers[this.state.active]];
        return(
            <div className="slide-item">
                <div className="slide-left">
                    <div className="slide-title">{slide.title}</div>
                    <br/>
                    <div className="slide-content" dangerouslySetInnerHTML={{__html: slide.text}}/>
                </div>
                <div className="slide-right">
                    <img src={slide.img} alt=""/>
                </div>

            </div>
        );
    };

    slideChange = (item) => {
        this.setState({active: item})
    };

    render (){
        return (
            <div className="technology">
                <div className="slider-content">
                    {this.renderSlide()}
                </div>
                <div className="slider-controls">
                    <span className={`slider-controls-item slider-controls-item-first ${this.state.active===0 && 'slider-controls-item-active'}`} onClick={() => this.slideChange(0)}/>
                    <span className={`slider-controls-item slider-controls-item-two ${this.state.active===1 && 'slider-controls-item-active'}`} onClick={() => this.slideChange(1)}/>
                    <span className={`slider-controls-item slider-controls-item-three ${this.state.active===2 && 'slider-controls-item-active'}`} onClick={() => this.slideChange(2)}/>
                </div>
            </div>

        )
    }


}

export default Slider;