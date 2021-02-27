import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col>
              <h2 style={{ color: "white" }}>
                Middlebrook 7th Floor Ping Pong Winter Tournament - February
                26th-27th, 2020
              </h2>
              <iframe
                src="https://challonge.com/mb7winter/module"
                width="100%"
                height="500"
                frameborder="0"
                scrolling="auto"
                allowtransparency="true"
              ></iframe>{" "}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
