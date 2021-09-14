import { React, useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModalLoginForm = ({handleClose, showValue}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('email is ---', email)
        console.log('password is ---', password)
    }

    return (
        <Modal
            show={showValue}
            onHide={handleClose}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            placeholder="Enter email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            placeholder="Password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                    </Form.Group>


                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Submit
                    </Button>

                </Form>

            </Modal.Body>

        </Modal>
    )
}

export default ModalLoginForm