import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/logo1.png";
import "./Header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="header">
      {/* Navbar */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="py-3"
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <img src={Logo} width={"70%"} alt="Site Logo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/plants"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Plants
              </NavLink>

              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav>
            <div className="nav-btn">
              <Nav.Link
                href="mailto:ponkojmondal2019@gmail.com"
                onClick={() => setExpanded(false)}
              >
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
