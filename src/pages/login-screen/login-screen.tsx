import Header from '../../components/header/header';
import { FormEvent, useRef } from 'react';
import { getFakeUser } from '../../mocks/mock-messages';

type LoginScreenProps = {
    setLoginData: (loginData: {email: string, userName: string}) => void;
}

function LoginScreen ({setLoginData}: LoginScreenProps): JSX.Element {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
  
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
  
      if (loginRef.current && passwordRef.current) {
        const data = getFakeUser(loginRef.current.value);
        setLoginData({email: data.email, userName: data.username})
        console.log(data);
      }

    };


    return (
        <div className="page--login">
        <Header/>
        <main className="page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    data-testid="loginElement"
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    data-testid="passwordElement"
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    )
}

export default LoginScreen;