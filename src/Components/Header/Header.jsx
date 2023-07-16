import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logo1.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-3" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <img src={Logo} width={"70%"} alt="Site Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>

              <NavLink to="/plants" className="nav-link">
                Plants
              </NavLink>

              <NavLink to="/about" className="nav-link">
                About Us
              </NavLink>

              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <div className="nav-btn">
              <Nav.Link href="mailto:ponkojmondal2019@gmail.com">
                Contact Us
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
