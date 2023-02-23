import { Card, Row, Col, Container } from 'react-bootstrap';
import image1 from '../assets/images/meter1.svg';
import image2 from '../assets/images/MaskGroup3.png';
import image4 from '../assets/images/MaskGroup1.png';
import image5 from '../assets/images/MaskGroup2.png';
import image3 from '../assets/images/Group296.png';

const Features = () => {
  return (
    <div className='app-features' id='about'>
      <div className='feature-details'>
        <div className='line-col'>
          <span className='line'></span>
          <h2>Features</h2>
        </div>
        <Container>
          <Row className='row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
            <Col>
              <Card className='mb-3'>
                <Card.Img src={image1} />
                <Card.Body>
                  <Card.Title>no more missed rows</Card.Title>
                  <Card.Text>
                    Farmtrack's row counting algorithm helps you pinpoint
                    whether others may have missed a row in a block whilist
                    spraying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-3'>
                <Card.Img src={image1} />
                <Card.Body>
                  <Card.Title>no more missed rows</Card.Title>
                  <Card.Text>
                    Farmtrack's row counting algorithm helps you pinpoint
                    whether others may have missed a row in a block whilist
                    spraying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-3'>
                <Card.Img src={image1} />
                <Card.Body>
                  <Card.Title>no more missed rows</Card.Title>
                  <Card.Text>
                    Farmtrack's row counting algorithm helps you pinpoint
                    whether others may have missed a row in a block whilist
                    spraying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-3'>
                <Card.Img src={image1} />
                <Card.Body>
                  <Card.Title>no more missed rows</Card.Title>
                  <Card.Text>
                    Farmtrack's row counting algorithm helps you pinpoint
                    whether others may have missed a row in a block whilist
                    spraying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-3'>
                <Card.Img src={image1} />
                <Card.Body>
                  <Card.Title>no more missed rows</Card.Title>
                  <Card.Text>
                    Farmtrack's row counting algorithm helps you pinpoint
                    whether others may have missed a row in a block whilist
                    spraying.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='mb-3'>
                <button>
                  <span>Get more details</span>
                </button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='feature-gallery'>
        <div className='gallery-img '>
          <img src={image2} alt='fruit' />
          <p>Fruit</p>
        </div>
        <div className='gallery-img'>
          <img src={image4} alt='wine' />
          <p>wine</p>
        </div>
        <div className='gallery-img'>
          <img src={image5} alt='nuts' />
          <p>nuts</p>
        </div>
      </div>
      <div className='feature-insight'>
        <img src={image3} alt='insight' />
        <div className='insight'>
          <h4>
            Insight is a powerful tool in <br /> business
          </h4>
          <div className='line-col'>
            <span className='line'></span>
            <p>
              Unfortunately, the simple truth about farming is that you are
              dependent on unpredictable behaviours from both people and nature
              to help you reach your goals.This dependency could prove to be a
              real challenge when it comes to efficient crop management - but
              what if there was a smarter way to farm? Farmtrack® is a solution
              that would allow you to reduce the risk of uncertainty and monitor
              all the elements of the production cycle with complete accuracy.
            </p>
          </div>

          <p>
            Farmtrack &trade; is asolution that would allow you to reduce the
            risk of uncertainity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
