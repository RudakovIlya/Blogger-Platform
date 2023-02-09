import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalStyled} from "./end/Global";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <GlobalStyled/>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
