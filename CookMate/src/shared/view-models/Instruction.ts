export class Instruction {
    id : string;
    sortingNumber : number;
    text : string;

    constructor(id: string, sortingNumber: number, text: string) {
        this.id = id;
        this.sortingNumber = sortingNumber;
        this.text = text;
    }
}