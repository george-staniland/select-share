import { React, useState } from "react"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ModalRegisterForm from './ModalRegisterForm'
import ModalLoginForm from "./ModalLoginForm"
import { LogoutButton } from "./LogoutButton"

const NavbarDiv = styled.div`
    padding: 20px 40px;
    display: flex;
    align-items: center;
    border: 1px solid black;

    .menu-items-div{
        width: 30%;
        margin-left: auto;
        display: flex;
        justify-content: end;
    }

    button{
        border: none;
        background: transparent;
        &:hover{
            color: var(--hover-col);
        }
    }
`

const Navbar = () => {

    const [showRegister, setShowRegister] = useState(false)
    const [showLogin, setShowLogin ] = useState(false)
    const history = useHistory();

    const handleClose = (props) => {
        if (props === 'register'){
            setShowRegister(false)
        } else if ( props === 'login'){
            setShowLogin(false)
        }
    }

    const handleShow = (props) => {
        if (props === 'login'){
            setShowLogin(true)
        } else if ( props === 'register'){
            setShowRegister(true)
        }
         
    }

    const goHome = () => {
        history.push("/");
    }
    
    return (
        <NavbarDiv className="mx-2 mt-2">
            
            <button className="text-decoration-none" onClick={goHome}>
             <h1>Select Share</h1>
            </button>

            <div className="menu-items-div">

                <button 
                    onClick={ () => handleShow('register') }
                >
                    Register
                </button>

                <ModalRegisterForm 
                    show={showRegister} 
                    handleClose={handleClose} 
                />

                <button 
                    onClick={ () => handleShow('login') }
                >
                    Login
                </button>

                <ModalLoginForm 
                    handleClose={handleClose}
                    show={showLogin}
                />

                

                <LogoutButton/>

            </div>

        </NavbarDiv>
    )
}

export default Navbar

