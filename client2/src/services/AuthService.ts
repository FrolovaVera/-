import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";


export default class AuthService{
    static async getAllClients (): Promise<AxiosResponse<AuthResponse>>{
        console.log("GET All CLIENTS - ")
        return $api.get<AuthResponse>('/clientList',{});
    } 

    static async getLists (): Promise<AxiosResponse<AuthResponse>>{
        console.log("GET LISTS - ")
        return $api.get<AuthResponse>('/getLists',{});
    } 

    static async addClient (
        Name:string, Surname:string,Fathersname:string, Dateofbirth:Date,
        Gender:string,  Phonehouse:string, Phonemob:string, Email:string,
        Passport: string, Passportseries:string, Issuedby:Date, Dateofissue:Date,
        Identnumber:string, Placeofbirth:string, Familystatus:string, Citizenship:string,
        City:string, ActResidAddress:string, Placeofwork:string, Jobposition:string,
        Disability:string, Pensioner:string, Monthlyincome:string, Militaryservice:string): Promise<AxiosResponse<AuthResponse>>{
        
            console.log("ADD CLIENT - ")
            return $api.post<AuthResponse>('/addClient',{
            Name, Surname,Fathersname, Dateofbirth,
            Gender,  Phonehouse, Phonemob, Email,
            Passport, Passportseries, Issuedby, Dateofissue,
            Identnumber, Placeofbirth, Familystatus, Citizenship,
            City, ActResidAddress, Placeofwork, Jobposition,
            Disability, Pensioner, Monthlyincome, Militaryservice});
    } 

    static async deleteClient (id:BigInt): Promise<AxiosResponse<AuthResponse>>{
        console.log("DELETE CLIENT - ", id)
        return $api.post<AuthResponse>('/deleteClient',{id});
    } 

    static async editClient (id:BigInt,
        Name:string, Surname:string,Fathersname:string, Dateofbirth:Date,
        Gender:string,  Phonehouse:string, Phonemob:string, Email:string,
        Passport: string, Passportseries:string, Issuedby:Date, Dateofissue:Date,
        Identnumber:string, Placeofbirth:string, Familystatus:string, Citizenship:string,
        City:string, ActResidAddress:string, Placeofwork:string, Jobposition:string,
        Disability:string, Pensioner:string, Monthlyincome:string, Militaryservice:string): Promise<AxiosResponse<AuthResponse>>{
        
            console.log("EDIT CLIENT - ")
            return $api.post<AuthResponse>('/editClient',{id,
            Name, Surname,Fathersname, Dateofbirth,
            Gender,  Phonehouse, Phonemob, Email,
            Passport, Passportseries, Issuedby, Dateofissue,
            Identnumber, Placeofbirth, Familystatus, Citizenship,
            City, ActResidAddress, Placeofwork, Jobposition,
            Disability, Pensioner, Monthlyincome, Militaryservice});
    } 

    
}

