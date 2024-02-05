import { observer } from "mobx-react-lite";
import { Context } from "../index"
import React, { useContext, useState } from "react"
import '../css/clientsList.css'
import '../css/addClient.css'
import AddClient from '../html/AddClient'
import EditClient from "../html/EditClient";

function ListOfClient() {
    const {store} = useContext(Context);
    

    return(
        <div className='home-page'>

            {store.isAddClient       ?'': <AddClient/>        }
            {store.isEditClient      ?'': <EditClient/>        }

            <div className= 'list-dev'>
                {store.isListOfClientNull === false ? 
            (store.Clients).map(client => 
                <div className= 'form-dev'>
                    <button className='deleteClient-btn'  onClick={() => {store.deleteClient(client.id); console.log("ID = ",client.id)}}>delete</button>
                    <button className='editClient-btn'  onClick={() => {store.setCurrentClient(client); store.isEditClient = false}}>edit</button>
            
                    <div className="main-info">
                        <pre className='main-pre'>Name: {client.name}</pre>
                        <pre className='main-pre'>Surname: {client.surname}</pre>
                        <pre className='main-pre'>Father's name: {client.fathers_name}</pre>
                        <pre className='main-pre'>Date of birth: {client.date_of_birth}</pre>
                        <pre className='main-pre'>Gender: {client.Gender}</pre>
                        <pre className='main-pre'>Phone house: {client.Phonehouse}</pre>
                        <pre className='main-pre'>Phone mob: {client.Phonemob}</pre>
                        <pre className='main-pre'>E-mail: {client.Email}</pre>
                        
                    </div>

                    <div className="pasport-info">
                        <pre className='main-pre'>№ passport: {client.Passport}</pre>
                        <pre className='main-pre'>Series: {client.Passportseries}</pre>
                        <pre className='main-pre'>Issued by: {client.Issuedby}</pre>
                        <pre className='main-pre'>Date of issue: {client.Dateofissue}</pre>
                        <pre className='main-pre'>Ident. number: {client.Identnumber}</pre>
                        <pre className='main-pre'>Place of birth: {client.Placeofbirth}</pre>
                        <pre className='main-pre'>Family status: {client.Familystatus}</pre>
                        <pre className='main-pre'>Citizenship: {client.Citizenship}</pre>
                    </div>

                    <div className="other-info">
                        <pre className='main-pre'>City of actual residence: {client.City}</pre>
                        <pre className='main-pre'>Actual residence address: {client.ActResidAddress}</pre>
                        <pre className='main-pre'>Place of work: {client.Placeofwork}</pre>
                        <pre className='main-pre'>Job position: {client.Jobposition}</pre>
                        <pre className='main-pre'>Disability: {client.Disability}</pre>
                        <pre className='main-pre'>Pensioner: {client.Pensioner}</pre>
                        <pre className='main-pre'>Monthly income: {client.Monthlyincome}</pre>
                        <pre className='main-pre'>military service: {client.Militaryservice}</pre>
                    </div>
                    

                </div>
            ): ''}
            </div>
            <div className= 'add-dev'>
            <button className='addClient-btn'  onClick={() => {store.isAddClient = false; console.log('ADD ',store.isAddClient)}}>+</button>
            </div>
        </div>
    )}
    export default observer(ListOfClient);