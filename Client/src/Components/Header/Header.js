import "./Header.css"
import logo from "../../Assets/logo.png"
import {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
const Header = observer(() => {

    const {user} = useContext(Context)

    setTimeout(()=> {
        if (user._isAuth) {
            document.getElementById("logout").style.visibility="visible"
        }
        else {
            document.getElementById("enter").style.visibility="visible"
        }
    }, 1000)

    const logout = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <div className="header">
            <a href="/"><img src={logo} className="logo"/></a>
            <div className="menu">
                <a href="/">Главная</a>
                <a href="lk-user">ЛК Пользователя</a>
                <a href="admin">ЛК Админа</a>
                <a href="login" id="enter">Войти</a>
                <button onClick={()=> logout()} id="logout">Выйти</button>
            </div>

        </div>
    )
})
export default Header