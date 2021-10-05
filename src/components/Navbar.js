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

    const history = useHistory();

    const goHome = () => {
        history.push("/");
    }

    const[showLogin, setShowLogin] = useState(false);
    const[showRegister, setShowRegister] = useState(false);

    const toggleRegister = () => {
        setShowRegister(!showRegister);
    }
    
    const toggleLogin = () => {
        setShowLogin(!showLogin);
    }

    return (
        <NavbarDiv className="mx-2 mt-2">
            
            <button className="text-decoration-none" onClick={goHome}>
             <h3>Select Share</h3>
            </button>

            <div className="menu-items-div">

                <button 
                    onClick={ () => toggleRegister() }
                >
                    Register
                </button>

                <ModalRegisterForm 
                    show={showRegister} 
                    handleClose={toggleRegister} 
                />

                <button 
                    onClick={ () => toggleLogin() }
                >
                    Login
                </button>

                <ModalLoginForm 
                    toggleLogin={toggleLogin}
                    show={showLogin}
                />

                <LogoutButton/>

            </div>

        </NavbarDiv>
    )
}

export default Navbar

