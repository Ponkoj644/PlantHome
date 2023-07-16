import { Col, Container, Image, Row } from "react-bootstrap";
import AboutLogo from "../../../public/logo.png";

import SubImg from "../../../public/subheader-about.jpg";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SubHeader from "../../Components/SubHeader/SubHeader";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="aboutPage">
      <SubHeader image={SubImg} heading="About Our Company" />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center"></h1>
            <Image
              src={AboutLogo}
              className="img-fluid my-3 text-center"
              alt="Company Logo"
            />
            <p>
              Welcome to our indoor plant company! We are passionate about
              bringing the beauty and benefits of plants into your home or
              office space. With a wide variety of indoor plants to choose from,
              we strive to help you create a green and vibrant environment that
              enhances your well-being and adds a touch of nature to your
              surroundings.
            </p>
            <p>
              Our team of experienced horticulturists carefully curates each
              plant in our collection, ensuring that you receive healthy and
              thriving specimens. We offer plants in various sizes and species,
              catering to both beginners and avid plant enthusiasts. Whether you
              are looking for a statement plant to become the focal point of
              your space or smaller plants to adorn your shelves, we have
              something for everyone.
            </p>
            <p>
              At our indoor plant company, we believe in sustainability and
              eco-friendly practices. We prioritize using environmentally
              friendly materials in our packaging and shipping processes. We
              also provide detailed care instructions for each plant, so you can
              confidently nurture and maintain your plants for years to come.
            </p>
            <p>
              Our dedicated customer support team is here to assist you every
              step of the way. If you have any questions or need guidance
              regarding plant selection, care tips, or order inquiries, please
              do not hesitate to reach out to us. We want to ensure that your
              experience with our indoor plant company is exceptional from start
              to finish.
            </p>
            <p>
              Thank you for choosing our indoor plant company as your trusted
              source for high-quality plants. We look forward to helping you
              create a lush and inviting indoor oasis!
            </p>
          </Col>
        </Row>

        <Row className="mt-4 address">
          <Col md={{ span: 10, offset: 2 }}>
            <Row>
              <Col lg={6} className="">
                <h4> Contact</h4>
                <div className=" d-flex">
                  <LocalPhoneIcon />
                  <p className="">+880-1833-044436</p>
                </div>
                <div className="d-flex">
                  <WhatsAppIcon />
                  <p className="">+880-1722-911644</p>
                </div>
                <div className=" d-flex">
                  <AlternateEmailIcon />
                  <p className=" ">ponkojmondal2019@gmail.com</p>
                </div>
              </Col>

              <Col lg={6}>
                <h4>Location</h4>
                <div className=" d-flex">
                  <LocationOnIcon />
                  <p>Mohakhali, Dhaka-1212, Bangladesh.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
