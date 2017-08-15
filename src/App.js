import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home.js'
import About from './about.js'
import Advantages from './Containers/Advantages';
import Positions from './Containers/Positions';
import Header from './Containers/Header';

const App = () => (
    <div>
        <Header/>
        <Advantages />
        <Positions />
        <header>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
);

export default App;
