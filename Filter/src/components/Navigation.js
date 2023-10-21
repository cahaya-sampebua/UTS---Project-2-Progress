import { Navbar,NavDropdown,Nav,Container,Form,Button } from "react-bootstrap"; 

export default function Navigasi(){
    return(
        
        <Navbar expand="lg"  className="bg-dark navbar-dark" sticky="top">
        <Container fluid>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <span className="text-light me-3">Sinefilia Movie</span>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="#home" className="me-2">Home</Nav.Link>
                    <Nav.Link href="#link1" className="me-2">Filter</Nav.Link>
                    <Nav.Link href="#link2" className="me-2">Film</Nav.Link>

                    <NavDropdown title="Profile" id="basic-nav-dropdown" className="me-2">

                    <NavDropdown.Item href="#action/3.1">Acount</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}

                    </NavDropdown>
                    
                    <Nav.Link href="#link3" className="me-2">Favorite</Nav.Link>
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Pencarian"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="success">Search</Button>
                </Form>

            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}