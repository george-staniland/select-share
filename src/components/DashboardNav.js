import {React, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as AddIcon } from '../images/add.svg'
import firebaseApp from '../firebase/initFirebase'
import { getFirestore, collection, addDoc } from "firebase/firestore"

const NavDiv = styled.div `
    min-height: 50px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
    padding: 5px 1rem;

    .icon{
        height: 30px;
        width: auto;
    }

    .add-icon-container{
        height: 100%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .button-secondary{
        :hover{
            color: blue;
        }
    }
`

const FormDiv = styled.div `
    min-height: 200px;
    position: relative;
    padding: 5px 1rem;
    border-bottom: 1px solid black;
    background-color: gainsboro;

    .form-wrapper{
        width: 40%;
        padding-top: 2rem;
    }

    .input-label{
        font-size: 17px;
    }
    .input{
        padding: 10px;
        border: none;
        border-radius: 8px;
    }

    .button{
        max-width: 100px;
        padding: 8px 0;
        border: none;
        border-radius: 3px;
        :hover{
            background-color: white;
        }
    }
`

export const DashboardNav = () => {
    const db = getFirestore()
    const [showForm, setShowForm] = useState(false);
    const [ collectionName, setCollectionName ] = useState("");
 
    const toggleForm = () => {
        setShowForm(!showForm);
        setCollectionName('');
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "collections"), {
              collectionName: collectionName,
              images: ['image1','image2', 'image3'],
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        toggleForm()
    }

    return (
        <>
        <NavDiv>

            <div className="add-icon-container py-2" onClick={toggleForm}>
                <AddIcon className="icon"/>
                <p className="p-0 m-0 button-secondary">Create Collection</p>
            </div>

        </NavDiv>

        {showForm ? 
        <FormDiv>
            <div className="form-wrapper">

                <form  onSubmit={handleSubmit} className="d-flex flex-column">

                    <label 
                        className="input-label d-flex flex-column" htmlFor="collection-name"
                    >
                        Collection Name
                    </label>

                    <input 
                        type="text"
                        name="collection-name"
                        value={collectionName} 
                        onChange={e => setCollectionName(e.target.value)}
                        className="input mt-2"
                    />

                    <input 
                        className="button mt-3" 
                        type="submit" 
                        value="Add" 
                    />

                </form>

            </div>
        </FormDiv> 
        : 
        ''
        }
        
        </>
    )
}
