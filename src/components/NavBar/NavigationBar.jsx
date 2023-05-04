import {Container, Nav, Navbar} from 'react-bootstrap';
import style from './navBar.module.css'

export default function NavigationBar(){
   return (
      <>
         <Navbar expand='lg' className={style.navBar}>
            <Container>
               <Navbar.Brand href='/' className={style.brand}>{'<'}Henly Su{' />'}</Navbar.Brand>

               <Navbar.Toggle aria-controls='basic-navbar-nav' className={style.toggle}/>
               <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                  <Nav>
                     <Nav.Link href='/' className={style.link}>Home</Nav.Link>
                     <Nav.Link href='/about' className={style.link}>About</Nav.Link>
                     <Nav.Link href='/projects' className={style.link}>Projects</Nav.Link>
                     <Nav.Link href='/resume' className={style.link}>Resume</Nav.Link>
                     <Nav.Link href='/contact' className={style.link}>Contact Me</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}