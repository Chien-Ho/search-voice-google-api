import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaMicrophone } from 'react-icons/fa'
const VoiceSearchModal = ({ openVoiceModal, closeVoiceModal }) => {
    return (
        <div>
            <Modal show={openVoiceModal} onHide={closeVoiceModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Voice Search</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex align-items-center justify-content-center">
                    <FaMicrophone className="microphone" />Recording...
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeVoiceModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default VoiceSearchModal
