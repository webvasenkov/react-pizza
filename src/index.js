import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    // StrictMode (строгий режим) - это инструмент для выделения потенциальных проблем в приложении.
    // Запускает два раза рендер
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

