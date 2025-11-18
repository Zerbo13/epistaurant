import {Container, Row, Col, Carousel} from 'react-bootstrap'

const Home = function(){
    return(
        <Container className="mt-3">
    <Row className="justify-content-center">
    {/*<Col className="col col-12 col-md-8 col-lg-4">*/}
    <Col xs={12} md={8} lg={4}>
         <Carousel>
      <Carousel.Item>
        <img src="https://placedog.net/300/300" className="w-100"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://placecats.com/300/300" className="w-100"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://placebear.com/300/300" className="w-100"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Col>
    </Row>
      </Container>
    )
}
export default Home