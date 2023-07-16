import { NavLink } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

// import Banner images
import Banner1 from "../../../public/1 copy.jpg";
import Banner2 from "../../../public/2 copy.jpg";
import Banner3 from "../../../public/3 copy.jpg";

const Banner = () => {
  return (
    <div className="banner-slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Plant Home</h3>
            <p>The Best Place To Buy Indoor Plants Online.</p>
            <NavLink href="#link">View More</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Plant Home</h3>
            <p>The Best Place To Buy Indoor Plants Online.</p>
            <NavLink href="#link">View More</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Plant Home</h3>
            <p>The Best Place To Buy Indoor Plants Online.</p>
            <NavLink href="#link">View More</NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
