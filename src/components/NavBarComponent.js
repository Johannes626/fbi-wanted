import React from 'react'
import { Card, Col, Row, Container, Nav, Navbar, NavDropdown, Alert} from 'react-bootstrap';




function NavBarComponent() {
  return (
    <header>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container className="mx-4">
                <Navbar.Brand href="/">FBI Most Wanted</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Creator Info</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.fbi.gov/wanted">Official FBI Website</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container fluid>
            <Row className="px-3 my-3">
                <Col>
                    <Alert variant="info">This website is a work in progress.</Alert>
                </Col>
            </Row>
            <Row className="px-4 my-3">
                <Card className="text-center bg-light noMarginTop">
                    <Card.Body className="">If you see any of these individuals, do not approach them as they may be armed and dangerous. Instead, please contact the your local police department.</Card.Body>
                </Card>
            </Row>
        </Container>
    </header>
  )
}

export default NavBarComponent

