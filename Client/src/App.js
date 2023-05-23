import "./App.css"
import MainPage from "./Pages/MainPage/MainPage";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout";
import RegistartionPage from "./Pages/RegistrPage/RegistartionPage";
import Admin from "./Pages/Admin";
import Basket from "./Pages/Basket";
import DevicePage from "./Pages/DevicePage";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        })
    }, [])



    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="registration" element={<RegistartionPage/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="device/:id" element={<DevicePage/>}/>
                {user._isAuth && <Route path="admin" element={<Admin/>}/>}
                {/*<Route*/}
                {/*    path="*"*/}
                {/*    element={<Navigate to="/" replace />}*/}
                {/*/>*/}
            </Routes>
        </div>
    );
}

export default App;
