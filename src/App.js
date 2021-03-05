import React from 'react'
import {
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Basket from './pages/Basket';

export default function App() {
    return (
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
    )
}
