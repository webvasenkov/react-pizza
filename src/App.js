import React from 'react';
import {Header} from "./components";
import {Main, Cart} from './pages'
import {Switch, Route, Redirect} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Switch>
                <Redirect exact path='/' to='/main'/>
                <Route path='/main' render={() => <Main/>}/>
                <Route path='/cart' render={() => <Cart/>}/>
            </Switch>
        </div>

    );
}

export default App;
