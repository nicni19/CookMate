import {Unit} from "./Unit";

export class Ingredient {
    id : string;
    name : string;
    unit : Unit;
    quantity : number;


    constructor(id: string, name: string, unit: Unit, quantity: number) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.quantity = quantity;
    }
}