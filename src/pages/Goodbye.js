import React from 'react'
import Navbar from '../components/Navbar'
import { LoginStatus } from '../components/LoginStatus'
import styled from 'styled-components'

const DivStyled = styled.div `
    border: 1px solid black;
    height: 700px;
    .inner-div{
        background-color: #7291B3;
        height: 90%;
    }
`

export const Goodbye = () => {
    return (
        <>
        <Navbar/>
        <DivStyled className="container p-0 mt-5">

            <LoginStatus/>

            <div className="inner-div p-0 m-0 d-flex flex-column justify-content-center">
                <h1 className="text-center text-light">Farewell, see you soon!</h1>
            </div>

        </DivStyled>
        </>
    )
}
