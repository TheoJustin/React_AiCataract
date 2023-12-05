import './NavigationBar.scss'
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from '../../assets/logo.png'

export const NavigationBar = () => {
    return(
        <>
            <Navbar variant="light" className="navbar navbar-expand-lg container-fluid sticky-top">
                <Container className="mx-5 my-2">
                    <Navbar.Brand as={Link} to={"/"} className="navbar-brand me-4">
                        <img
                            alt=""
                            src={Logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-3"
                        />
                        OptiScan
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={Link} to={"/about-us"}>About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}