import { Component } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
class Bookings extends Component{
    render(){
        return(
            <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
          <h2 className="text-center">PRENOTAZIONI A DB</h2>
          </Col>
          </Row>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
           <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
          </Col>
          </Row>
          </Container>
        )
    }
}

export default Bookings