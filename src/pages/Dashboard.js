import {React, useState } from "react"
import Navbar from "../components/Navbar"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebaseApp from "../firebase/initFirebase"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const Dashboard = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUserInput = () =>{
    console.log('change')
  }

  const onPasswordInput = () =>{
    
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log('submitting');
  }

  const doFirebaseLogin = (email, password) => {
    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user
        console.log('logged in')
        console.log('user info is', user)
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }

  return (
    <>
      <Navbar />

      {/* <button onClick={() => doFirebaseLogin('test123@gmail.com', 'test123')} >
        Test Login
      </button> */}

      <div className="container">

        

      </div>

    </>
  )
}

export default Dashboard;