import { makeAutoObservable } from "mobx";
import { IClient } from "../models/IClient";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { API_URL } from "../http";

import { group } from "console";
import { IFamily } from "../models/IFamily";
import { ICitizenship } from "../models/ICitizenship";
import { ICity } from "../models/ICity";
import { IDisability } from "../models/IDisability";


export default class Store {
    Clients = {} as IClient[];
    currClient = {} as IClient;
    City    = {} as ICity[];
    Family = {} as IFamily[];
    Citizenship = {} as ICitizenship[];
    Disability = {} as IDisability[]

    isAddClient = true;
    isEditClient = true;
    isListOfClientNull = true;
    isError = true;

    
    constructor(){
        makeAutoObservable(this);
    }

    setClients(Clients: IClient[]){
        if(Clients === null){
            this.isListOfClientNull = true;
        }
        else{
            this.isListOfClientNull = false;
        }
        this.Clients = Clients;
    }

    setCurrentClient(client: IClient){
        this.currClient = client;
        console.log('CURRClient', this.currClient)
    }

    async sortBySurname(Clients: IClient[]){
        this.Clients.sort((a, b) => {
            if (a.surname < b.surname) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
        });
        
    }

    async dataCorrectness (Name:string, Surname:string,Fathersname:string, Dateofbirth:Date,
        Gender:string,  Phonehouse:string, Phonemob:string, Email:string,
        Passport: string, Passportseries:string, Issuedby:Date, Dateofissue:Date,
        Identnumber:string, Placeofbirth:string, Familystatus:string, Citizenship:string,
        City:string, ActResidAddress:string, Placeofwork:string, Jobposition:string,
        Disability:string, Pensioner:string, Monthlyincome:string, Militaryservice:string){
        try{
            // passport
            this.isError =false;
            console.log('Name =', Name)
                if( !Name){
                    alert("Error! Name is null");
                    this.isError = true;
                    
                } else if( !Surname){
                    alert("Error! Surname is null");
                    this.isError = true;
                    
                } else if( !Fathersname){
                    alert("Error! Father's name is null");
                    this.isError = true;
                    
                } else if( !Dateofbirth){
                    alert("Error! Date of birth is null");
                    this.isError = true;
                    
                } else if( !Gender){
                    alert("Error! Gender is null");
                    this.isError = true;
                    
                } else if( !Passport){
                    alert("Error! Passport is null");
                    this.isError = true;
                    
                } else if( !Passportseries){
                    alert("Error! Passport series is null");
                    this.isError = true;
                    
                } else if( !Issuedby){
                    alert("Error! Issued by is null");
                    this.isError = true;
                    
                } else  if( !Dateofissue){
                    alert("Error! Date of issue is null");
                    this.isError = true;
                    
                } else if( !Identnumber){
                    alert("Error! Identnubber is null");
                    this.isError = true;
                    
                } else if( !Placeofbirth){
                    alert("Error! Place of birth is null");
                    this.isError = true;
                    
                } else if( !City){
                    alert("Error! City is null");
                    this.isError = true;
                    
                } else if( !ActResidAddress){
                    alert("Error! ActResidAddress is null");
                    this.isError = true;
                    
                } else if( !Familystatus){
                    alert("Error! Family status is null");
                    this.isError = true;
                    
                } else if( !Citizenship){
                    alert("Error! Citizenship is null");
                    this.isError = true;
                    
                } else if( !Disability){
                    alert("Error! Disability is null");
                    this.isError = true;
                    
                } else if( !Pensioner){
                    alert("Error! Pensioner is null");
                    this.isError = true;
                    
                } else if( !Militaryservice){
                    alert("Error! Military service is null");
                    this.isError = true;
                    
                } else if(Name.search(/\d/) != -1){
                    alert("Error! The name must contain only characters");
                    this.isError = true;
    
                }else
                if(Surname.search(/\d/) != -1){
                    alert("Error! The Surname must contain only characters");
                    this.isError = true;
    
                }else
                if(Fathersname.search(/\d/) != -1){
                    alert("Error! The Fathersname must contain only characters");
                    this.isError = true;
    
                }else
                if(Placeofbirth.search(/\d/) != -1){
                    alert("Error! The Placeofbirth must contain only characters");
                    this.isError = true;
    
                }else
                if(Placeofwork.search(/\d/) != -1){
                    alert("Error! The Placeofwork must contain only characters");
                    this.isError = true;
    
                }else
                if(Jobposition.search(/\d/) != -1){
                    alert("Error! The Jobposition must contain only characters");
                    this.isError = true;
    
                }else
                if(Gender.search(/\d/) != -1){
                    alert("Error! The Gender must contain only characters");
                    this.isError = true;
    
                } else {
            for(let n =0; n< this.Clients.length; n++){
                
                  



                if( this.Clients[n].Passport.startsWith(Passport)){
                    alert("Error! There is already a user with such a passport");
                    this.isError = true;
                    break;
                }
                if(this.Clients[n].Identnumber.startsWith(Identnumber)){
                    alert("Error! There is already a user with such a identnumber");
                    this.isError = true;
                    break;
                }
                this.isError =false;
                
               
            }
        }
            
           
        }
        catch(e){
            console.log(e);
        }
    }

    async getAllClients(){
        try{
            const response = await AuthService.getAllClients();
            console.log("CLIENTS - ", response.data.clients);
            this.setClients(response.data.clients);
            this.sortBySurname(this.Clients);
            //sort
            
        }
        catch(e){
            console.log(e);
        }
    }

    async getLists(){
        try{
            const response = await AuthService.getLists();

            console.log("FamilyStatus - ", response.data.familystatus);
            this.Family = response.data.familystatus;

            console.log("City - ", response.data.city);
            this.City = response.data.city;

            console.log("Citizenship - ", response.data.citizenship);
            this.Citizenship = response.data.citizenship;

            console.log("Disability - ", response.data.disability);
            this.Disability = response.data.disability;
    
        }
        catch(e){
            console.log(e);
        }
    }

    async addClient( Name:string, Surname:string,Fathersname:string, Dateofbirth:Date,
        Gender:string,  Phonehouse:string, Phonemob:string, Email:string,
        Passport: string, Passportseries:string, Issuedby:Date, Dateofissue:Date,
        Identnumber:string, Placeofbirth:string, Familystatus:string, Citizenship:string,
        City:string, ActResidAddress:string, Placeofwork:string, Jobposition:string,
        Disability:string, Pensioner:string, Monthlyincome:string, Militaryservice:string){
        try{

            this.dataCorrectness(Name, Surname,Fathersname, Dateofbirth,
                Gender,  Phonehouse, Phonemob, Email,
                Passport, Passportseries, Issuedby, Dateofissue,
                Identnumber, Placeofbirth, Familystatus, Citizenship,
                City, ActResidAddress, Placeofwork, Jobposition,
                Disability, Pensioner, Monthlyincome, Militaryservice);

                if(this.isError === false){
                    const response = await AuthService.addClient(Name, Surname,Fathersname, Dateofbirth,
                        Gender,  Phonehouse, Phonemob, Email,
                        Passport, Passportseries, Issuedby, Dateofissue,
                        Identnumber, Placeofbirth, Familystatus, Citizenship,
                        City, ActResidAddress, Placeofwork, Jobposition,
                        Disability, Pensioner, Monthlyincome, Militaryservice);
        
                    this.setClients(response.data.clients);
                    this.sortBySurname(this.Clients);
                    console.log("CLIENTS - ", response.data.clients);
                }
        }
        catch(e){
            console.log(e);
        }
    }

    async deleteClient(id:BigInt){
        try{

            const response = await AuthService.deleteClient(id);
            this.setClients(response.data.clients);
            this.sortBySurname(this.Clients);
        }
        catch(e){
            console.log(e);
        }
    }

    async editClient( id: BigInt, Name:string, Surname:string,Fathersname:string, Dateofbirth:Date,
        Gender:string,  Phonehouse:string, Phonemob:string, Email:string,
        Passport: string, Passportseries:string, Issuedby:Date, Dateofissue:Date,
        Identnumber:string, Placeofbirth:string, Familystatus:string, Citizenship:string,
        City:string, ActResidAddress:string, Placeofwork:string, Jobposition:string,
        Disability:string, Pensioner:string, Monthlyincome:string, Militaryservice:string){
        try{

            this.dataCorrectness(Name, Surname,Fathersname, Dateofbirth,
                Gender,  Phonehouse, Phonemob, Email,
                Passport, Passportseries, Issuedby, Dateofissue,
                Identnumber, Placeofbirth, Familystatus, Citizenship,
                City, ActResidAddress, Placeofwork, Jobposition,
                Disability, Pensioner, Monthlyincome, Militaryservice);

                if(this.isError === false){

                    const response = await AuthService.editClient(id, Name, Surname,Fathersname, Dateofbirth,
                          Gender,  Phonehouse, Phonemob, Email,
                          Passport, Passportseries, Issuedby, Dateofissue,
                          Identnumber, Placeofbirth, Familystatus, Citizenship,
                          City, ActResidAddress, Placeofwork, Jobposition,
                          Disability, Pensioner, Monthlyincome, Militaryservice);

                    this.setClients(response.data.clients);
                    this.sortBySurname(this.Clients);
                    console.log("CLIENTS - ", response.data.clients);
                }
        }
        catch(e){
            console.log(e);
        }
    }

   
}