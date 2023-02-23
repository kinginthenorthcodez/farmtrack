import { Col, Row } from 'react-bootstrap';
import image1 from '../assets/images/logo.svg';
import image2 from '../assets/images/clients/De-Grendel-Logo.png';
import image3 from '../assets/images/clients/Du-Toit-Logo-01-1024x1024.jpg';
import image4 from '../assets/images/clients/kleine.jpg';
import image5 from '../assets/images/logo.svg';
import image6 from '../assets/images/logo.svg';
import image7 from '../assets/images/logo.svg';
import image8 from '../assets/images/logo.svg';
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
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image2} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image3} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image4} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
          <div className='client-card'>
            <img src={image1} alt='client' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
