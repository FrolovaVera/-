import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/AuthResponse";
import { IClient } from "../models/IClient";


export default class UserService{
    static getClients():Promise<AxiosResponse<IClient[]>>{
        return $api.get<IClient[]>('/clientList')
    }



}

