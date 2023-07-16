import { Col, Container, Row } from "react-bootstrap";
import "./Plants.css";

// import Left Img
import { useEffect, useState } from "react";
import SectonHeading from "../../Pages/SectonHeading/SectonHeading";
import Card from "../Card/Card";
import LeftSide from "./LeftSide";

const Plants = () => {
  // Fatch plant data from json
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);
  return (
    <section className="plants-area">
      <Container>
        <SectonHeading heading="Most Recent" />
        <Row className="plants-row ">
          <Col lg={4} className="left-side">
            {plants.map((item) => (
              <LeftSide key={item.id} item={item}></LeftSide>
            ))}
          </Col>
          <Col lg={8} className="middle-side">
            <h3>New Plants</h3>
            <Card />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Plants;
