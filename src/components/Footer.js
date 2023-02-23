import { Col, Container, Form, Row } from 'react-bootstrap';
import Logo from '../assets/images/farmtrackLogo.png';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='wrap-footer'>
      <div className='app-footer'>
        <div className='subcribe'>
          <h3>recieve news and specials</h3>
          <button className='btn btn-danger'>sign up</button>
        </div>
        <div className='info' id='contacts'>
          <Container>
            <Row className='row-cols-md-3'>
              <Col>
                <h4>Never miss a row again</h4>
                <p>
                  {' '}
                  <FaPhoneVolume color='yellowgreen' />
                  +27(0)28 212 3346
                </p>
                <p>
                  <FaEnvelope color='yellowgreen' /> info@Farmtrack.co.za
                </p>
                <p>Privacy policy</p>
              </Col>
              <Col className='latest'>
                <h4>Latest news</h4>
                <p> this is a strory header and title</p>
                <p> text line number 2</p>
                <hr className=''></hr>
                <p> this is a strory header and title</p>
                <p> text line number 2</p>
              </Col>
              <Col>
                <h4>Categories</h4>
                <p> orchards</p>
                <p> nuts</p>
                <p> avo's</p>
                <p> fruits</p>
                <p> technology</p>
              </Col>
              <Col>
                <Form>
                  <h4>let us call you</h4>
                  <Form.Group controlId='username'>
                    <Form.Control
                      type='text'
                      placeholder='leave your name'
                      name='username'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='phone'>
                    <Form.Control
                      type='tel'
                      placeholder='leave your number'
                      name='phone'
                      required
                    />
                  </Form.Group>
                  <button type='submit'>Call me</button>
                </Form>
              </Col>
              <Col>
                <div className='socials'>
                  <a href='#' target='_blank' rel='noreferrer'>
                    <FaInstagram color='yellowgreen' />
                  </a>
                  <a href='#' target='_blank' rel='noreferrer'>
                    <FaFacebook color='yellowgreen' />
                  </a>
                  <a href='#' target='_blank' rel='noreferrer'>
                    <FaTwitter color='yellowgreen' />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
          <div className='footer-logo'>
            <img src={Logo} alt='logo' />
            <p>Copyright &copy;2023 Farmtrack. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
