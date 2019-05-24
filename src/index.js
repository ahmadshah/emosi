import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import Home from './components/home/Home';
import Induction from './components/home/Induction';
import Introduction from './components/introduction/Introduction';
import Angry from './components/introduction/Angry';
import Happy from './components/introduction/Happy';
import Sad from './components/introduction/Sad';
import Scared from './components/introduction/Scared';
import Disapointed from './components/introduction/Disapointed';
import Shocked from './components/introduction/Shocked';
import Game from './components/home/Game';
import MemoryGame from './components/memory/MemoryGame';
import WordGame from './components/word/WordGame';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/induction" component={Induction} />
            <Route path="/introduction" component={Introduction} />
            <Route path="/angry" component={Angry} />
            <Route path="/happy" component={Happy} />
            <Route path="/sad" component={Sad} />
            <Route path="/scared" component={Scared} />
            <Route path="/disapointed" component={Disapointed} />
            <Route path="/shocked" component={Shocked} />
            <Route path="/games" component={Game} />
            <Route path="/memory" component={MemoryGame} />
            <Route path="/word" component={WordGame} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
