import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSearch, FaNewspaper, FaImages, FaTools, FaShoppingBag, FaVideo } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
const NavbarSubSearch = () => {
    return (
        <div>
            <Navbar expand="lg" bd="light" className="sub-navbar-search col-md-12">
                <Container>
                    <Nav>
                        <Nav.Link to='#'><FaSearch /> All</Nav.Link>
                        <Nav.Link to='#' ><FaImages /> Images</Nav.Link>
                        <Nav.Link to='#' ><FaNewspaper /> News</Nav.Link>
                        <Nav.Link to='#' ><FaVideo /> Videos</Nav.Link>
                        <Nav.Link to='#' ><FaShoppingBag /> Shopping</Nav.Link>
                        <Nav.Link to='#'><BsThreeDotsVertical /> More</Nav.Link>
                        <Nav.Link to='#' ><AiFillSetting /> Settings</Nav.Link>
                        <Nav.Link to='#' ><FaTools /> Tools</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSubSearch
