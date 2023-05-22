import Header from "../../Components/Header/Header";

const LoginPage = () => {


  return (
      <div>
          <div className="container center">
              <form action="">
                  <h1>Вход в аккаунт</h1>
                  <p>Логин <input type="text" required/></p>
                  <p>Пароль <input type="password" required/></p>
                  <button type="submit">Войти</button>
                  <br/>
                  <a href="registration">Нет аккаунта? Зарегистрировать</a>
              </form>
          </div>
      </div>

  )
}
export default LoginPage