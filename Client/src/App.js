import "./App.css"
import MainPage from "./Pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="" element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
