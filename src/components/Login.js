import React from 'react';
import blockbusterlogin from "../assets/img/blockbusterlogin.png"
import '../assets/css/Formularioblockbuster.css'

function Login() {
    return (
        <form className="my-form">
            <div className="login-welcome-row">
                <a href="www.ejemplo.com" title="Logo">
                    <img src={blockbusterlogin.png} alt="Logo" className="logo" />
                </a>
                <h1>Iniciar Sesión</h1>
            </div>
            <div className="input__wrapper">
                <input type="email" id="email" name="email" className="input__field" placeholder="Your Email" required />
                <label htmlFor="email" className="input__label">Email:</label>
                <svg className="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                </svg>
            </div>
            <div className="input__wrapper">
                <input id="password" type="password" className="input__field" placeholder="Your Password"
                    title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required />
                <label htmlFor="password" className="input__label">
                    Contraseña
                </label>
                <svg className="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                </svg>
            </div>
            <button type="submit" className="my-form__button">
                INICIAR SESIÓN
            </button>
            <div className="socials-row">
                <a href="www.ejemplo.com" title="Use Google">
                    <img src="assets/google.png" alt="Google" />
                    Ingresar con Google
                </a>
            </div>
            <div className="my-form__actions">
                <div className="my-form__row">
                    <span>¿No tienes una cuenta? </span>
                    <a href="www.ejemplo.com" title="Create Account">
                        Registrarse
                    </a>
                </div>
            </div>
        </form>
    );
}

export default Login;
