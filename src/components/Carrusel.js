import Blockbustertienda4 from '../assets/img/Blockbustertienda4.jpg';
import Blockbustertienda2 from '../assets/img/Blockbustertienda2.jpg';
import Blockbustertienda from '../assets/img/Blockbustertienda.jpg';
import "../assets/css/style.css"
import Carousel from 'react-bootstrap/Carousel';


function Caroussel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Blockbustertienda4} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
         <img src={Blockbustertienda} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Blockbustertienda2} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;