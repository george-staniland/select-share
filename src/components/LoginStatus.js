import { React, useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '../firebase/initFirebase';
import styled from 'styled-components'

const DivStyled = styled.div `
    border-bottom: 1px solid black;
`

export const LoginStatus = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const loggedInMsg = 'Welcome, you are logged in'
    const loggedOutMsg = 'You are not logged in'

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true)
            const uid = user.uid;
            // ...
        } else {
            
        }
    });

    return (
        <DivStyled className="p-3">
            { loggedIn ? <h4> {loggedInMsg} </h4> : <h4> {loggedOutMsg}</h4> }
        </DivStyled>
    )



}
