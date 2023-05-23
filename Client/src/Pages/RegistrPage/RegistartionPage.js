import Header from "../../Components/Header/Header";
import {useContext, useEffect, useState} from "react";
import "./RegistrationPage.css"
import {Context} from "../../index";
import {login, registration} from "../../http/userAPI";

const RegistrationPage = () => {const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const reg = async () => {
        let data
        data = await registration(email, password)
        user.setUser(user)
        user.setIsAuth(true)
    }

    const [pass1, setPass1] = useState("")
    const [pass2, setPass2] = useState("")

    setTimeout(()=>{
        const error = document.getElementById("error")
        if (pass1 !== pass2) {
            error.style.display="block"
        }
        else {
            error.style.display="none"
        }
    },10)


    return (
        <div>
            <div className="container center">
                <form action="">
                    <h1>Регистрация</h1>
                    <p>ФИО <input type="text" pattern="[а-яА-ЯЁё-]+\s[а-яА-ЯЁё-]+\s[а-яА-ЯЁё-]+" required/></p>
                    <p>Логин <input type="text" required/></p>
                    <p>Email <input type="text" required/></p>
                    <p id="error">Пароль не совпадают!</p>
                    <p>Пароль <input
                        type="password"
                        required
                        id="pas1"
                        value={pass1}
                        onChange={e => (setPass1(e.target.value))}
                    />
                    </p>
                    <p>Повторите пароль <input
                        type="password"
                        required
                        id="pas2"
                        value={pass2}
                        onChange={e => (setPass2(e.target.value))}
                    /></p>
                    <p>Согласие на обработку персональных данных <input type="checkbox"/></p>
                    <button type="submit" onClick={reg}>Зарегистрироваться</button>
                    <br/>
                    <a href="login" >Есть аккаунт? Войти</a>
                </form>

            </div>
        </div>

    )
}
export default RegistrationPage