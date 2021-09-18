import { React, useState } from "react"
import firebaseApp from "../firebase/initFirebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModalLoginForm = ({ handleClose, show }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth()
    const handleSubmit = (evt) => {
        evt.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log('signed-in!', user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
            });

    }


    return (
        <Modal
            show={show}
            onHide={ () => handleClose('login') }
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>Login into your account here</Modal.Title>
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


                    <Button variant="primary" type="submit" onClick={ () => handleClose('login')}>
                        Login
                    </Button>

                </Form>

            </Modal.Body>

        </Modal>
    )
}

export default ModalLoginForm