import React from 'react'
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
import BasketStore from './reducers/BasketStore';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
  }
`;

export default function App() {
    
    return (
        <BasketStore>
            <Theme value={themes['light']}>
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
        </BasketStore> 
    )
}
