import Card from './components/Card.js';
import Carrusel from './components/Carrusel.js';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario.js'

 
function App() {
  return (
    <div className="container"> 
      <Navbar />
      <Carrusel/>
      <Card/>
      <Footer/>
      <Formulario/>
    </div>
  );
}

export default App;
