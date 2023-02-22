import { Card, Row, Col, Container } from 'react-bootstrap';
import image1 from '../assets/images/meter1.svg';
import image2 from '../assets/images/2022-Upcoming-Chinese-Wuxia-Xianxia-Drama-List-7-1.jpg';
import image3 from '../assets/images/dev2.svg';

const Features = () => {
  return (
    <>
      <div className='app-features'>
        <div className='feature-details'>
          <div className='line-col'>
            <span className='line'></span>
            <h2>Features</h2>
          </div>
          <Container>
            <Row>
              <Col className='col-4'>
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
              <Col className='col-4'>
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
              <Col className='col-4'>
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
              <Col className='col-4'>
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
              <Col className='col-4'>
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
              <Col className='col-4'>
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
          <div className='gallery-img'>
            <img src={image2} alt='fruit' />
            <p>Fruit</p>
          </div>
          <div className='gallery-img'>
            <img src={image2} alt='fruit' />
            <p>Fruit</p>
          </div>
          <div className='gallery-img'>
            <img src={image2} alt='fruit' />
            <p>Fruit</p>
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
                Decipline coding: Not for lazy programmers like John doe, who
                wanna get done things quickly. Working on large application or
                with other devs, you may end up wasting alot of time catching
                those bugs but typeScript saves you there
              </p>
            </div>

            <p>
              Farmtrack &trade; is asolution that would allow you to reduce the
              risk of uncertainity
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
