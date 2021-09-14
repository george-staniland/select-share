import { React, useState } from "react"
import styled from 'styled-components'
import ModalLoginForm from './ModalLoginForm'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const NavbarDiv = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    .menu-items{
        width: 30%;
        margin-left: auto;
        display: flex;
        justify-content: end;
    }
    .item{
        margin-left: 40px;
        font-weight: 600;
        text-decoration: none;
        font-size: 1.6rem;
        color: CornflowerBlue;
        transition: all .3 ease-in-out;
    }
    .item:hover{
        color: white;
    }
`

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <NavbarDiv className="bg-light">

            <h1>Select Share</h1>

            <div className="menu-items">

                <Button 
                    variant="primary" 
                    onClick={ () => handleShow() }
                >
                    Register
                </Button>

                <ModalLoginForm 
                    showValue={show} 
                    handleClose={handleClose} 
                />

            </div>

        </NavbarDiv>
    )
}

export default Navbar

