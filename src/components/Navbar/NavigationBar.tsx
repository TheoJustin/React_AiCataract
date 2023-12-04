import './NavigationBar.scss'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/logo.png'

export const NavigationBar = () => {
    return(
        <>
            <Navbar bg="light" variant="light" className="navbar">
                <Container className="mx-3 my-2">
                    <Navbar.Brand as={Link} to={"/"} className="navbar-brand">
                        <img
                            alt=""
                            src={Logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-3"
                        />
                        Cataract Detector
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}