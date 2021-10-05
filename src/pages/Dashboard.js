import { React, useState } from "react"
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import { DashboardNav } from "../components/DashboardNav"
import { DisplayCollections } from "../components/DisplayCollections"
import { LoginStatus } from "../components/LoginStatus"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '../firebase/initFirebase'

const DashboardDiv = styled.div`
  border: 1px solid black;
  min-height: 700px;
  position: relative;
  background-color: white;

  .welcome-msg{
    height: 700px;
  }

  .title{
    color: #7291B3;
    font-size: 45px;
  }

  .sub-title{
    font-size: 35px;
  }

  .body{
    color: #adbac7;
  }
`

const Dashboard = () => {

  const [loggedIn, setLoggedIn ] = useState(false)
 
  const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLoggedIn(true)
        } else {
            
        }
    });

  return (
    <>
      <Navbar />
      <DashboardDiv className="container px-0 mt-4">

        <LoginStatus/>
        
        {loggedIn ? <DashboardNav/> : '' }
        
        {loggedIn ? 
          <div className="ms-3 mt-2" >
            <DisplayCollections/>
          </div> 
        :
          <div className="welcome-msg d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
            <h1 className="title">Welcome to Select Share</h1>
            <h2 className="sub-title text-center">A place for photographers to get client feedback with speed and ease</h2>
            <h2 className="mt-5 body">Please login or register an account</h2>
          </div>
        }

      </DashboardDiv>
    </>
  )
}

export default Dashboard;