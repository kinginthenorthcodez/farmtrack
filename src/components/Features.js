import { Card, Row, Col, Container } from 'react-bootstrap';

const Features = () => {
  return (
    <>
      <div className='app-features'>
        <div className='feature-details'>
          <div className='feature-line'>
            <span className='line'></span>
            <h2>Features</h2>
          </div>
          <Container>
            <Row>
              <Col>
                <Card className='mb-3'>
                  <Card.Img src='' />
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
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Features;
