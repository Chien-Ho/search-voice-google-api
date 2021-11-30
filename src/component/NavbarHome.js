import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'
const NavbarHome = () => {
    return (
        <div>
            <Navbar className='col-md-12'>
                <Container className="py-4">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Gmail</Nav.Link>
                        <Nav.Link href="/">Images</Nav.Link>
                        <Nav.Link href="/"><BsGrid3X3GapFill /></Nav.Link>
                        <Nav.Link href="/"><FaRegUserCircle /></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarHome
