import Header from "../../Components/Header/Header";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()

    const ToLog = () => {
        navigate("/registartion")
    }

  return (
      <div>
          <Header/>
          <div className="container">
              <form action="">
                  <h1>Вход в аккаунт</h1>
                  <p>Логин <input type="text"/></p>
                  <p>Пароль <input type="text"/></p>
                  <button onClick={ToLog}>Нет аккаунта? Зарегистрировать</button>
              </form>
          </div>
      </div>

  )
}
export default LoginPage