import {UserSimple} from "./UserSimple";

export class CookbookSimple {
    id : string;
    name : string;
    owner : UserSimple;


    constructor(id : string, name: string, owner: UserSimple) {
        this.id = id;
        this.name = name;
        this.owner = owner;
    }
}