import React from 'react';
import Advantages from './Containers/Advantages';
import Positions from './Containers/Positions';
import Header from './Containers/Header';
import Technology from "./Containers/Technology/index";
import OurAdvantage from "./Containers/OurAdvantage/index";
import Footer from "./Containers/Footer/index";
import './index.css';

const App = () => (
    <div>
        <Header/>
        <Advantages />
        <Positions />
        <Technology />
        <OurAdvantage />
        <Footer/>
    </div>
);

export default App;
