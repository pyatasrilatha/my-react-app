import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header(props) {
    return (
        // <nav class="navbar navbar-dark bg-primary">
        <>
            <Container>
                <Navbar fixed="top" expand="lg" variant="light" bg="light">
                    <Navbar.Brand href="#" class="float-left"><strong>Space X Launch Program</strong></Navbar.Brand>
                </Navbar>
            </Container>
        </>
    )
}
export default Header;