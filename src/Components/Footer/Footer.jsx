// React Icon
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../public/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-area">
      <Container>
        <Row>
          <Col className=" text-center py-3 text-white ">
            <div className="footer-logo">
              <img src={Logo} alt="Footer Logo" width={"210px"} />
            </div>
            <div className="SocialMedia">
              <AiOutlineInstagram /> <AiOutlineTwitter /> <BiLogoFacebook />
              <BiLogoLinkedin />
            </div>
            <p>Coppyright &copy; 2023 by Ponkoj Mondol</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
