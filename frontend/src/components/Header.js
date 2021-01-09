import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const Header = () => {
    return <header>
    <Navbar bg="dark" variant='dark' expand="lg" CollapseOnSelect>
    <Container>
     <Navbar.Brand href="/">iShop</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/login">Sign In</Nav.Link>      
      </Nav>    
     </Navbar.Collapse>
    </Container>
    </Navbar>           
    </header>
}

export default Header;