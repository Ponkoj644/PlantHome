import { Col, Container, Row } from "react-bootstrap";
import SectonHeading from "../../Pages/SectonHeading/SectonHeading";
import "./Exclusive.css";

// import images
import ExclusiveImg from "../../../public/e1.png";
import ExclusiveImg2 from "../../../public/e2.png";
import FlotImg from "../../../public/flot1.png";
import FlotImg2 from "../../../public/flot2.png";

const Exclusive = () => {
  return (
    <section className="exclusive-area">
      <Container>
        <SectonHeading heading="Exclusive On" />
        {/* 1st row */}
        <Row className="mt-3 align-items-center">
          {/* Left Side */}
          <Col lg={5}>
            <div className="exclusive-img">
              <img src={ExclusiveImg} alt="" className="w-100" />

              <div className="flot-img1">
                <img src={FlotImg} alt="" />
              </div>

              <div className="flot-img2">
                <img src={FlotImg2} alt="" />
              </div>
            </div>
          </Col>

          {/* Right Side */}

          <Col lg={7}>
            <div className="exclusive-text p-4">
              <h1>Philodendron</h1>
              <p>
                The foliage of philodendrons is usually green but may be
                coppery, red, or purplish; parallel leaf veins are usually green
                or sometimes red or white. Shape, size, and texture of the
                leaves vary considerably, depending on species and maturity of
                the plant. The fruit is a white to orange berry. Juvenile and
                adult phases differ, making it almost impossible to identify
                different species of small plants.
              </p>
              <a href="#">Learn More</a>
            </div>
          </Col>
        </Row>

        {/* 2nd row */}
        <Row className="mt-5 align-items-center">
          {/* Right Side */}
          <Col lg={7} xs={{ order: 1 }} md={{ order: 0 }}>
            <div className="exclusive-text p-4 md=p-2">
              <h1>Pothos (Devil's ivy)</h1>
              <p>
                Pothos (also called Devil’s Ivy) is a tropical vine plant that
                has adapted well as a hardy houseplant. It has shiny,
                heart-shaped leaves and comes in a number of natural and
                cultivated varieties to add interesting foliage to your home.
                When Pothos first made its way into the hands of botanists they
                had collected small, juvenile leaves. They were classed in 1880
                as Pothos aureus. In 1908, the group of plants was reclassified
                as Scindapsus. But you will be forgiven for being even more
                confused as in 1964 they were reclassified again as Epipremnum.
                This is why you sometimes see these plants under the botanical
                name of Epipremnum and other times as Scindapsus.
              </p>
              <a href="#">Learn More</a>
            </div>
          </Col>

          {/* Left Side */}
          <Col lg={5} xs={{ order: 0 }} md={{ order: 0 }}>
            <div className="exclusive-img1 ">
              <img src={ExclusiveImg2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Exclusive;
