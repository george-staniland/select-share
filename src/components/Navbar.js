import React from "react"
import styled from 'styled-components'

const NavbarDiv = styled.div `
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
    return (
        <NavbarDiv className="bg-light">

            <h1>Select Share</h1>
            
            <div className="menu-items">

                <a className="item" 
                   href=""
                >
                Login 
                </a>

                <a className="item" 
                   href=""
                >
                Sign Up 
                </a>

                <a className="item" 
                   href=""
                >
                Logout
                </a>
            </div>

        </NavbarDiv>
    )
}

export default Navbar

