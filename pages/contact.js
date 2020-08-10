import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default class extends Component {
  render () {
    return (
      <Container>
        <Row>
            <Col sm>
              Col 1 of 3
          </Col>
          <Col sm>
              Col 2 of 3
          </Col>
          <Col sm>
              Col 3 of 3
          </Col>
        </Row>
      </Container>
    )
  }
}