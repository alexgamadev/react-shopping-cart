import React, {useState} from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Basket from './pages/Basket';
import Theme from './context/Theme';
import themes from './themes';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
  }
`

export default function App() {
    return (
        <Theme value={themes['dark']}>
            <GlobalStyles />
            <Router basename='/'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/shop">
                        <Shop />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/basket">
                        <Basket />
                    </Route>
                </Switch>
            </Router>
        </Theme>
    )
}
