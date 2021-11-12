import {UserSimple} from "./UserSimple";
import {CookbookSimple} from "./CookbookSimple";

export class User extends UserSimple {

    following : CookbookSimple[];

    constructor(id: string, firstName: string, lastName: string, following: CookbookSimple[]) {
        super(id, firstName, lastName);

        this.following = following;
    }
}