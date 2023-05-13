import Header from "../../Components/Header/Header";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {

    const navigate = useNavigate()

    const ToReg = () => {
        navigate("/login")
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <form action="">
                    <h1>Регистрация</h1>
                    <p>ФИО <input type="text" pattern="[а-яА-ЯЁё-]+\s[а-яА-ЯЁё-]+\s[а-яА-ЯЁё-]+" required/></p>
                    <p>Логин <input type="text" required/></p>
                    <p>Email <input type="text" required/></p>
                    <p>Пароль <input type="password" required/></p>
                    <p>Повторите пароль <input type="password" required/></p>
                    <p>Согласие на обработку персональных данных <input type="checkbox"/></p>
                    <button type="submit">Зарегистрироваться</button>
                </form>
                <a href="login" >Есть аккаунт? Войти</a>
            </div>
        </div>

    )
}
export default RegistrationPage