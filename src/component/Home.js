import React, { useState } from 'react'
import { Row, Button, Form, Col } from 'react-bootstrap'
import NavbarHome from './NavbarHome'
import VoiceSearchModal from './VoiceSearchModal'
import { FaSearch, FaTimes, FaMicrophone } from 'react-icons/fa'
import { recognition } from '../api/VoiceApi'
const Home = ({ setSearch }) => {
    const [term, setTerm] = useState('')
    const [voiceModal, setVoiceModal] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            /^[a-zA-Z0-9].*/.test(term) ||
            /^[a-zA-Z0-9]+[" "]/.test(term) ||
            /^[" "]+[a-zA-Z0-9]/.test(term)
        ) {

            return setSearch(term.trim())
        }

    }
    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const clearTerm = () => {
        setTerm('')
    }
    const handleSearch = () => {
        if (
            /^[a-zA-Z0-9].*/.test(term) ||
            /^[a-zA-Z0-9]+[" "]/.test(term) ||
            /^[" "]+[a-zA-Z0-9]/.test(term)
        ) {
            return setSearch(term.trim());
        }
    };
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
        <>
            {voiceModal ? (<VoiceSearchModal closeVoiceModal={closeVoiceModal} openVoiceModal={openVoiceModal} />) : null}
            <NavbarHome />
            <Row>
                <Col className="col-md-12 align-items-center justify-content-center d-flex flex-column ">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo" />
                    <div className="col-md-6 border search-box my-2 py-4" >
                        <FaSearch className="icon" />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" name="term" value={term} onChange={handleChange} />
                            </Form.Group>
                        </Form>
                        {term ? (<FaTimes onClick={() => clearTerm()} />) : ('')}
                        <FaMicrophone onClick={openVoiceModal} className="icon" />
                    </div>
                </Col>
                <Col className="col-md-12 d-flex justify-content-center align-items-center mt-5">

                    <Button type="button" className="btn btn-light mx-2" onClick={handleSearch}>Google Search</Button>
                    <Button type="button" className="btn btn-light">I'm feeling lucky</Button>

                </Col>
            </Row>
        </>
    )
}

export default Home
