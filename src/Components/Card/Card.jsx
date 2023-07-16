import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCard from "../SingleCard/SingleCard";
import "./Card.css";

const Card = () => {
  const [newplants, setNewPlants] = useState([]);
  useEffect(() => {
    fetch("newplant.json")
      .then((res) => res.json())
      .then((data) => setNewPlants(data));
  }, []);

  return (
    <Container>
      {/* First row */}
      <Row className="justify-content-md-center overflow-hidden">
        {/* map new plant */}
        {newplants.map((item) => (
          <SingleCard key={item.id} item={item}></SingleCard>
        ))}
        {/* item 1 */}
      </Row>
    </Container>
  );
};

export default Card;
