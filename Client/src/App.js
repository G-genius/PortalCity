import "./App.css"
import MainPage from "./Pages/MainPage/MainPage";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout";
import RegistartionPage from "./Pages/RegistrPage/RegistartionPage";
import Admin from "./Pages/Admin";
import Basket from "./Pages/Basket";
import DevicePage from "./Pages/DevicePage";
import {authRoutes, publicRoutes} from "./routes";
import {useContext} from "react";
import {Context} from "./index";

function App() {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="registration" element={<RegistartionPage/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="device" element={<DevicePage/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </div>
    );
}

export default App;
