import React from 'react';
import {Header} from "./components";
import {MainContainer, CartContainer} from './pages'
import {Switch, Route, Redirect} from "react-router-dom";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Switch>
                <Redirect exact path='/' to='/main'/>
                <Route path='/main' render={() => <MainContainer/>}/>
                <Route path='/cart' render={() => <CartContainer/>}/>
            </Switch>
        </div>
    );
}

export default App;
