import React, { useContext, useEffect } from "react";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import './App.css';
import ListOfClient from "./html/ClientsList"

function App() {

  const {store} = useContext(Context)

  //будет отрабатывать при первом запуске приложения
  useEffect(()=>{
    store.getLists();
    store.getAllClients();
      
 },[])
   
  






  return <ListOfClient/>
 

}

export default (App);