import "./Header.css"
import logo from "../../Assets/logo.png"
const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo"/>
            <div className="menu">
                <a href="">Главная</a>
                <a href="">Личный кабинет</a>
            </div>

        </div>
    )
}
export default Header