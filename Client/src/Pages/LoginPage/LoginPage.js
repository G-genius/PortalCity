import Header from "../../Components/Header/Header";
import {login, registration} from "../../http/userAPI";
import {useContext, useState} from "react";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const LoginPage = observer(() => {


    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const reg = async () => {
        try {
            let data
            data = await login(email, password)
            user.setUser(user)
            user.setIsAuth(true)
            navigate("/")
            window.location.reload()
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div>
            <div className="container center">
                <form action="" onSubmit="javascript:return false">
                    <h1>Вход в аккаунт</h1>
                    <p>Логин
                        <input type="text"
                               required
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               />

                    </p>
                    <p>Пароль
                        <input type="password"
                               required
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                        />
                    </p>
                    <button type="reset" onClick={reg}>Войти</button>
                    <br/>
                    <a href="registration">Нет аккаунта? Зарегистрировать</a>
                </form>
            </div>
        </div>

    )
})
export default LoginPage