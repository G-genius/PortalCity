import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./Store/UserStore";
import {BrowserRouter} from "react-router-dom";
import {createContext} from "react";
import DeviceStore from "./Store/DeviceStore";
import Header from "./Components/Header/Header";
import './fonts/Smokum-Regular.ttf';

export const Context = createContext(null)

ReactDOM.render(
    <BrowserRouter>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore()
        }}>
            <Header/>
            <App />
        </Context.Provider>
    </BrowserRouter>,
    document.getElementById('root')
);