
import { IClient } from "./IClient";
import { ICity } from "./ICity";
import { IFamily } from "./IFamily";
import { ICitizenship } from "./ICitizenship";
import { IDisability } from "./IDisability";

export interface AuthResponse{
    clients: IClient[];
    familystatus: IFamily[];
    city: ICity[];
    citizenship: ICitizenship[];
    disability: IDisability[];
}