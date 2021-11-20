import {Unit as string} from "./Unit";

export class Ingredient {
    id : string;
    name : string;
    unit : string;
    quantity : number;


    constructor(id: string, name: string, unit: string, quantity: number) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
    }
}