import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";


ReactDOM.render(
    // StrictMode (строгий режим) - это инструмент для выделения потенциальных проблем в приложении.
    // Запускает два раза рендер
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

