import React from 'react'
import Navbar from '../components/Navbar'
import { LoginStatus } from '../components/LoginStatus'
import styled from 'styled-components'

const DivStyled = styled.div `
    border: 1px solid black;
    height: calc(100vh - 200px);
`

export const Goodbye = () => {
    return (
        <>
        <Navbar/>
        <DivStyled className="container px-0 mt-4">
            <LoginStatus/>
        <div className="inner-div h-100 d-flex flex-column justify-content-center">
         <h3 class="text-center">Farewell, see you soon!</h3>
        </div>
        </DivStyled>
        </>
    )
}
