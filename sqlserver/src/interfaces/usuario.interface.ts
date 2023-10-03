import { Auth } from './auth.interface'

export interface User extends Auth{
    nombre: string;
    tipo: string;
    // apellidos: string;
    // Fnacimiento: string;
    // email: string;
    // telefono: string;
    // foto: string;
    // anotaciones: string;

}