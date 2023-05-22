import MainPage from "./MainPage/MainPage";
import Header from "../Components/Header/Header";
import {observer} from "mobx-react-lite";

const Layout = observer(() => {
    return (
        <div>
            <MainPage/>
        </div>
    )
})


export default Layout