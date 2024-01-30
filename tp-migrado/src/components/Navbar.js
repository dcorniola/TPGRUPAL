import '../assets/css/style.css'

function Navbar() {
    return (
        <header className="menu__wrapper">
            <div className="menu__bar">
                <a href="www.ejemplo.com" title="Home" aria-label="home" className="logo">
                    <h3>BLOCKBUSTER</h3>
                </a>
                <nav>
                    {/* Contenido del menú */}
                </nav>
            </div>
            <div className="action-buttons hide">
                <a href="Login.html" title="Log in" className="secondary">
                    Iniciar sesión
                </a>
                <a href="wwww.wjwmplo.com" title="Sign up" className="primary">
                    Crear cuenta
                </a>
            </div>
            <img className="menu-icon" src="bars-solid.svg" title="Burger Menu" alt="Burger Menu" onClick="toggleMenu(this)" />
        </header>
    );
}

export default Navbar;
