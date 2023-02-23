import { Row, Container, Col, Card } from 'react-bootstrap';
import image1 from '../assets/images/Group550.png';
import image2 from '../assets/images/Group551.png';
import image3 from '../assets/images/MaskGroup10.png';
const Blog = () => {
  return (
    <div className='app-blog'>
      <div className='line-col'>
        <span className='line'></span>
        <h2>latest product and industry news</h2>
      </div>
      <Container>
        <Row className='row-cols-lg-3 row-cols-sm'>
          <Col>
            <Card className='mb-3'>
              <Card.Img src={image1} />
              <Card.Body>
                <Card.Title>this is a blog title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </Card.Text>
                <button>read more &gt;</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mb-3'>
              <Card.Img src={image2} />
              <Card.Body>
                <Card.Title>this is a blog title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </Card.Text>
                <button>read more &gt;</button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='mb-3'>
              <Card.Img src={image3} />
              <Card.Body>
                <Card.Title>this is a blog title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat
                </Card.Text>
                <button>read more &gt;</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <button> See all stories</button>
    </div>
  );
};

export default Blog;
