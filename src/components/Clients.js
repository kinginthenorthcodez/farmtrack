import { Col, Row } from 'react-bootstrap';
import image1 from '../assets/images/logo.svg';
import image2 from '../assets/images/clients/De-Grendel-Logo.png';
import image3 from '../assets/images/clients/Du-Toit-Logo-01-1024x1024.jpg';
import image4 from '../assets/images/clients/kleine.jpg';
import image5 from '../assets/images/clients/delaire-graff.jpg';
import image6 from '../assets/images/clients/boschk.jpg';
import image7 from '../assets/images/clients/Paul-Cluver-Logo.jpg';
import image8 from '../assets/images/clients/vergelegen.jpg';
import image9 from '../assets/images/clients/fruitfarm.jpg';
import image10 from '../assets/images/clients/meerlust.jpg';
import image11 from '../assets/images/clients/koov.jpg';
const Clients = () => {
  return (
    <>
      <div className='app-clients'>
        <div className='clients-title'>
          <h4>Our happy Clients</h4>
          <span className='line'></span>
        </div>
        <div className='card-container'>
          <div className='client-card'>
            <img src={image5} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image6} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image7} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image4} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image8} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image9} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image11} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image2} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image10} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image3} alt='client' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
