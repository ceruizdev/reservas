import { Tarifa } from 'src/app/model/establecimiento/tarifa';

export class Cancha {
    id: String;
    capacidad: number;
    tipoGrama: String;
    tipoTecho: String;
    tarifa:Tarifa;
}