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
            <ul className="navigation hide">
                <li>
                    <a href="bootstrap.html" title="Inicio">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="#mis_favoritos" title="Mis_favoritos">
                        Mis favoritos
                    </a>
                </li>
                <li>
                    <button>
                       
                        Géneros
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16">
                            <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                        </svg>
                    </button>
                    <div className="dropdown__wrapper">
                        <div className="dropdown">
                            <ul className="list-items-with-description" id="lista1">
                                {/* Contenido de la lista 1 */}
                                <li>
                                        <div className="item-title">
                                            <h3>Acción</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Anime</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Cine de intriga</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Clásicas</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Cortos</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>De Argentina</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>De Hollywood</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Deportes</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Documentales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Dramas</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Fantasía</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Fe y espiritualidad</h3>
                                        </div>
                                    </li>

                            </ul>
                            <ul className="list-items-with-description" id="lista2">
                                {/* Contenido de la lista 2 */}
                                <li>
                                        <div className="item-title">
                                            <h3>Independientes</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Internacionales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Los favoritos de la crítica</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Música y musicales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Navidad</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Para reír</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Para ver en familia</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Películas en español</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Pelis policiales</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Romances</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Sci-fi</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item-title">
                                            <h3>Terror</h3>
                                        </div>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#ayuda" title="Ayuda">
                        Ayuda
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <div className="action-buttons hide">
        <a href="Login.js" title="Log in" className="secondary">
            Iniciar sesión
        </a>
        <a href="#sign-up" title="Sign up" className="primary">
            Crear cuenta
        </a>
    </div>
</header>

    );
}

export default Navbar;
