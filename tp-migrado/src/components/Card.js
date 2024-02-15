import Volveralfuturo from "../assets/img/Volveralfuturo.jpg";
import Rocky from "../assets/img/Rocky.jpg";
import Rambo from "../assets/img/Rambo.jpg";
import Pulpfiction from "../assets/img/Pulpfiction.jpg";
import Pesadilla from "../assets/img/Pesadilla.jpg";
import Miprobreangelito from "../assets/img/Miprobreangelito.jpg";
import Memoriasdeafrica from "../assets/img/Memoriasdeafrica.jpg";
import Jurassicpark from "../assets/img/Jurassicpark.jpg";
import indianaarca from "../assets/img/indianaarca.jpg";
import Django from "../assets/img/Django.jpg";
import clubdeloscinco from "../assets/img/clubdeloscinco.jpg";
import Esperando from "../assets/img/Esperando.jpg";
import Durodematar2 from "../assets/img/Durodematar2.jpg";
import extraterrestre from "../assets/img/extraterrestre.png";
import Terminator from "../assets/img/Terminator.jpg";

import '../assets/css/style.css';

function Card() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card">
          <img src={Volveralfuturo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">VOLVER AL FUTURO</h5>
              <p className="card-text">
                Del ganador al Premio de la Academia a mejor Productor Steven Spielberg y Robert Zemeckis regresa la trilogía de Volver Al Futuro- la aventura original más impactante y éxitosa que marcó a una generación. Cuando el adolescente Marty McFly (Michael J. fox) es al año 1955 en el De Lorean una máquina del tiempo que creó el Doc Brown (Christopher Lloyd), se encuentra mezclado en una cadena de conflictos que podrían desaparecer su existencia y dejarlo atrapado en el pasado.
              </p>
              <a href="www.ejemplo.com" className="btn btn-price">$1,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Jurassicpark} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">JURASSIC PARK</h5>
              <p className="card-text">El multimillonario John Hammond hace realidad su sueño de clonar dinosaurios del Jurásico y crear con ellos un parque temático en una isla. Antes de abrir el parque al público general, Hammond invita a una pareja de científicos y a un matemático para que comprueben la viabilidad del proyecto. Sin embargo, el sistema de seguridad falla y los dinosaurios se escapan.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$1,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={indianaarca} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">INDIANA JONES Y LOS CAZADORES DEL ARCA PERDIDO</h5>
              <p className="card-text">Después de una infructuosa misión en Sudamérica, el Gobierno estadounidense encarga al arqueólogo Indiana Jones la búsqueda del Arca de la Alianza, una reliquia bíblica que contiene los diez mandamientos y que convierte en invencible a su portador. Jones deberá enfrentarse a los nazis para adquirir este precioso objeto.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,75</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Pulpfiction} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PULP FICTION</h5>
              <p className="card-text">Historias de dos matones, un boxeador y una pareja de atracadores de poca monta en una violencia espectacular e irónica.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,75</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Django} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">DJANGO UNCHAINED</h5>
              <p className="card-text">Un antiguo esclavo une sus fuerzas con un cazador de recompensas alemán que lo libera y ayuda a cazar a los criminales más buscados del Sur, todo ello con la esperanza de encontrar a su esposa perdida hace mucho tiempo.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,75</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={extraterrestre} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">E.T EL EXTRATERRESTRE</h5>
              <p className="card-text">Un pequeño extraterrestre de otro planeta queda abandonado en la Tierra cuando su nave se olvida de él. Está completamente solo y asustado hasta que Elliott, un niño de nueve años, lo encuentra y decide esconderlo en su casa para protegerlo. El chico y sus hermanos intentarán encontrar la forma de devolver al extraterrestre a su planeta antes de que lo encuentren los científicos y la policía.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,75</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Terminator} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">TERMINATOR</h5>
              <p className="card-text">En el año 2029 las máquinas dominan el mundo. Los rebeldes que luchan contra ellas tienen como líder a John Connor, un hombre que nació en los años ochenta. Para eliminarlo y así acabar con la rebelión, las máquinas envían al pasado el robot Terminator con la misión de matar a Sarah Connor, la madre de John, e impedir así su nacimiento. Sin embargo, un hombre del futuro intentará protegerla.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,75</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Rocky} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">ROCKY</h5>
              <p className="card-text">Rocky Balboa es un desconocido boxeador de Philadelphia a quien se le ofrece la posibilidad de alcanzar la fama y ganar el título mundial de los pesos pesados enfrentándose al actual campeón, Apollo Creed. Con una gran fuerza de voluntad, Rocky se prepara concienzudamente para el combate y también para los cambios que acabarán produciéndose en su vida.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Rambo} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">RAMBO</h5>
              <p className="card-text">Rambo es excarcelado y enviado de vuelta al Vietnam con una nueva misión: averiguar el paradero de unos soldados norteamericanos desaparecidos. Tras saltar en paracaídas en la jungla, portando únicamente un cuchillo y un arco con flechas, se le dice que no ataque al enemigo y que sólo haga fotografías de reconocimiento. Pero el plan no saldrá como estaba previsto.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={clubdeloscinco} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">EL CLUB DE LOS CINCO</h5>
              <p className="card-text">Cinco estudiantes de secundaria son castigados en la biblioteca de su instituto por diversos motivos. En ella, se les asigna escribir un ensayo en el que deben redactar lo que piensan de sí mismos. El grupo, reúne a jóvenes con perfiles completamente diferentes. Durante el día, se van conociendo mejor y aceptar sus diferencias, compartiendo sus mayores secretos.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Esperando} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">ESPERANDO LA CARROZA</h5>
              <p className="card-text">Mamá Cora; muy cerca de los ochenta años; tiene tres hijos y una hija. Vive con uno de ellos. Un día toda la familia se reúne para celebrar una comida y reciben la noticia de que la anciana se ha tirado a las vías del tren. Los tres hermanos se movilizan para organizar el velatorio. Durante los preparativos irán apareciendo sus viejas disputas que no sólo los involucran a ellos sino también a sus respectivas esposas.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Memoriasdeafrica} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MEMORIAS DE AFRICA</h5>
              <p className="card-text">A principios del Siglo XX, Karen Blixen, una mujer danesa, se establece en Kenia con su infiel esposo. Allí conocerá a un misterioso y solitario cazador.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Pesadilla} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PESADILLA EN LA CALLE DEL INFIERNO</h5>
              <p className="card-text">Una nueva familia se ha trasladado a la calle Elm, a una casa que lleva cinco años sin ser habitada. Pasado poco tiempo allí, los jóvenes comienzan a tener extrañas pesadillas, tal y como ocurriese años atrás. Uno de ellos, Jesse, logra descubrir que Freddy intenta poseerlo desde el mundo de los sueños para continuar con su obra en el mundo real. Aunque intente resistirse, no puede evitar que el asesino lo obligue a realizar terribles acciones.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Miprobreangelito} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">MI POBRE ANGELITO</h5>
              <p className="card-text">Kevin McAllister es un niño de ocho años, miembro de una familia numerosa, que accidentalmente se queda abandonado en su casa cuando toda la familia se marcha a pasar las vacaciones a Francia. Kevin aprende a valerse por sí mismo e incluso a protegerse de Harry y Marv, dos bribones que se proponen asaltar todas las casas cerradas de su vecindario. En cuanto su madre lo echa en falta, regresa apresuradamente a Chicago para recuperar a su hijo.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card">
            <img src={Durodematar2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">DURO DE MATAR 2</h5>
              <p className="card-text">En esta ocasión, el detective John McClane se enfrenta a un comando que ha tomado el aeropuerto de Washington DC con el fin de interceptar la extradición de un traficante de drogas centroamericano.</p>
              <a href="www.ejemplo.com" className="btn btn-price">$0,50</a>
              <a href="www.ejemplo.com" className="btn btn-primary">Añadir al carrito</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
