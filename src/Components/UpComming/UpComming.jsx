import { Container, Row } from "react-bootstrap";
import SectonHeading from "../../Pages/SectonHeading/SectonHeading";
import UppSlider from "../UppSlider/UppSlider";
import "./UpComming.css";

const UpComming = () => {
  return (
    <section className="upcomming-area">
      <Container>
        <SectonHeading heading="Upcomming" />
        <Row>
          <UppSlider />
        </Row>
      </Container>
    </section>
  );
};

export default UpComming;
