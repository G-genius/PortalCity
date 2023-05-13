import "./App.css"
import MainPage from "./Pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Layout from "./Pages/Layout";
import RegistartionPage from "./Pages/RegistrPage/RegistartionPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="registration" element={<RegistartionPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
