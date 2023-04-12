import {Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';

export default function NavigationBar(){
   return (
      <>
         <Navbar expand='lg'>
            <Container>
               <Navbar.Brand href='/'>Henly Su</Navbar.Brand>

               <Navbar.Toggle aria-controls='basic-navbar-nav'/>
               <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                  <Nav>
                     <Nav.Link href='/'>Home</Nav.Link>
                     <Nav.Link href='/about'>About</Nav.Link>
                     <Nav.Link href='/projects'>Projects</Nav.Link>
                     <Nav.Link href='/contact'>Contact</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}