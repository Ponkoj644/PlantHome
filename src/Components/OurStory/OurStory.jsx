import { Col, Container, Row } from "react-bootstrap";
import StoryImg from "../../../public/sr1 copy.jpg";
import SectonHeading from "../../Pages/SectonHeading/SectonHeading";
import "./OurStory.css";

const OurStory = () => {
  return (
    <section className="our-story">
      <Container>
        <SectonHeading heading="Our Story" />
        <Row className=" align-items-center mt-3">
          <Col lg={5} md={12}>
            <div className="story-img">
              <img src={StoryImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg={7} md={12}>
            <div className="story-text p-4">
              <h3>About Us</h3>
              <p>
                In the heart of our bustling city, a shared love for nature
                brought us together and sparked the idea of creating an indoor
                plant business. Our journey began with a simple passion for
                greenery and a desire to bring the beauty of the outdoors into
                people's lives. With unwavering determination, we scoured
                nurseries, sourced the finest plants, and carefully handpicked
                each one for its unique charm and health. Our mission was clear:
                to provide a haven of serenity and rejuvenation amidst the
                concrete jungle. As word spread about our exceptional plants and
                personalized service, our humble business blossomed into a
                thriving community. From busy professionals seeking tranquility
                to plant enthusiasts seeking rare specimens, we catered to the
                diverse needs of our ever-growing clientele.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
