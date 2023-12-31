import { Navbar, Nav, Container } from 'react-bootstrap';
import "./style.css"
import { Link } from 'react-router-dom';
const HeaderNav = () => {
  return (
    <Navbar className="navbar" expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="d-flex flex-row">
          <Nav className="ml-auto d-flex" style={{ width: "100%", justifyContent: "space-around"}}>
  
              <Nav.Link className="nav-link" as={Link} to="/">
                About Me
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/current">
                Current Projects
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/skills">
                Technical Skills and Certifications
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/students">
               My Featured Students
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/portfolio">
                My Portfolio
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/resume">
                Resume
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
