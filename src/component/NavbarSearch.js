import React, { useState } from 'react'
import { Navbar, Form, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSearch, FaTimes, FaMicrophone } from 'react-icons/fa'
import { FaRegUserCircle } from 'react-icons/fa'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import VoiceSearchModal from './VoiceSearchModal'
import { recognition } from '../api/VoiceApi'
const NavbarSearch = ({ searchTerm, setSearch }) => {

    const [term, setTerm] = useState('')
    const [voiceModal, setVoiceModal] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (
            /^[a-zA-Z0-9].*/.test(term) ||
            /^[a-zA-Z0-9]+[" "]/.test(term) ||
            /^[" "]+[a-zA-Z0-9]/.test(term)
        ) {
            setSearch(term.trim())
        }

    }
    const clearTerm = () => {
        setTerm('')
    }
    const openVoiceModal = () => {
        setVoiceModal(true)
        recognition.start();
        recognition.onresult = event => {
            const { transcript } = event.results[0][0];
            if (transcript !== null || transcript !== "" || transcript !== " ") {
                setVoiceModal(false)
                setSearch(transcript)
            } else {
                recognition.start()
                alert('please try it again')
            }

        }
    }
    const closeVoiceModal = () => {
        setVoiceModal(false)
    }
    return (
        <div>
            <Navbar bg="light" className="col-md-12 my-1 navbar-search" >
                <Container>
                    <Navbar.Brand to="/" as={Link}>
                        <img
                            alt="goolge logo"
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                            height={30}

                        />

                    </Navbar.Brand>
                    <div className="col-md-8 search-box border d-flex py-4 justify-content-between align-items-center">
                        {voiceModal ? (<VoiceSearchModal closeVoiceModal={closeVoiceModal} openVoiceModal={openVoiceModal} />) : null}
                        <FaSearch className="icon" />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" name="term" value={term} onChange={(e) => setTerm(e.target.value)} />
                            </Form.Group>
                        </Form>
                        {term && <FaTimes onClick={() => clearTerm()} className="icon" />}
                        <FaMicrophone className="icon" onClick={openVoiceModal} />
                    </div>
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Gmail</Nav.Link>
                        <Nav.Link href="/">Images</Nav.Link>
                        <Nav.Link href="/" className="icon"><BsGrid3X3GapFill /></Nav.Link>
                        <Nav.Link href="/" className="icon"><FaRegUserCircle /></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSearch
