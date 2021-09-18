import { React } from "react"
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import { LoginStatus } from "../components/LoginStatus"

const DashboardDiv = styled.div`
  border: 1px solid black;
  height: calc(100vh - 200px);
`

const Dashboard = () => {

  return (
    <>
      <Navbar />
      <DashboardDiv className="container px-0 mt-4">
        <LoginStatus/>
      </DashboardDiv>
    </>
  )
}

export default Dashboard;