import { Col } from "react-bootstrap";

const SingleCard = ({ item }) => {
  return (
    <Col className="m-3 d-flex justify-content-center">
      <div className="single-card">
        <div className="front-face">
          <img src={item.image} alt="" />
        </div>
        <div className="back-face">
          <h5>{item.name}</h5>
          <p>{item.category}</p>
          <p className="price">{item.price}</p>
          <a href="#">Order Now</a>
        </div>
      </div>
    </Col>
  );
};

export default SingleCard;
