import "./Header.css"
import logo from "../../Assets/logo.png"
const Header = () => {
    return (
        <div className="header">
            <a href="/"><img src={logo} className="logo"/></a>

            <div className="menu">
                <a href="/">Главная</a>
                <a href="lk-user">ЛК Пользователя</a>
                <a href="lk-admin">ЛК Админа</a>
                <a href="login">Войти</a>
            </div>

        </div>
    )
}
export default Header