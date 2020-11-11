import React, {useEffect, useState} from 'react';
import {Header} from "./components";
import {Main, Cart} from './pages'
import {Switch, Route, Redirect} from "react-router-dom";
import * as axios from "axios";
import MainContainer from "./pages/MainContainer";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <Switch>
                <Redirect exact path='/' to='/main'/>
                <Route path='/main' render={() => <MainContainer/>}/>
                <Route path='/cart' render={() => <Cart/>}/>
            </Switch>
        </div>

    );
}

export default App;
