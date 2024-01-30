import '../assets/css/Formularioblockbuster.css'

function formulario() {
    return (
        <div className="formulario">
            <div className="input-group">
                <h3>Contactanos</h3>

                <form>
                    <div className="input-box">
                        <input className="input" required autoComplete="off" type="text" id="nombre" />
                        <label className="label" htmlFor="nombre">Nombre</label><br />
                    </div>

                    <div className="input-box">
                        <input className="input" required autoComplete="off" type="text" id="apellido" />
                        <label className="label" htmlFor="apellido">Apellido</label><br />
                    </div>

                    <div className="input-box">
                        <input className="input" required autoComplete="off" type="text" id="mail" />
                        <label className="label" htmlFor="mail">Mail</label><br />
                    </div>

                    <div className="input-box">
                        <input className="input" required autoComplete="off" type="text" id="mensaje" />
                        <label className="label" htmlFor="mensaje">Mensaje</label><br />
                    </div>

                    <button type="submit" className="button">Enviar</button>
                </form>
            </div>
        </div>
    );
}


export default formulario

