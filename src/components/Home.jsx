import {Container, Row, Col, Carousel} from 'react-bootstrap'
import pastasciutte from '../data/menu.json'

const Home = function(){
    return(
        <Container className="mt-3">
    <Row className="justify-content-center">
    <Col xs={12} md={8} lg={6}>
    <h1 className="text-center my-3">Le migliori pastasciutte del web!</h1>
    </Col>

    <Col xs={12} md={8} lg={6}>
         <Carousel>
            {pastasciutte.map((pasta) =>{
                return(
                    <Carousel.Item key={pasta.id}>
        <img src={pasta.image} className="w-100"/>
        <Carousel.Caption>
          <h3>{pasta.name}</h3>
          <p>{pasta.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
                )
                })}
    </Carousel>
    </Col>
    </Row>
    </Container>
    )
}
export default Home