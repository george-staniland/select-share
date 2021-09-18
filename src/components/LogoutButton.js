import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom'


export const LogoutButton = () => {

    let history = useHistory()

    const handleSignout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push("/goodbye")
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <button onClick={handleSignout}>
                Logout
            </button>
        </div>
    )
}
