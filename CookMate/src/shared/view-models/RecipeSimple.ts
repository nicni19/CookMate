export class RecipeSimple {
    id : string;
    cookbookId : string;
    name : string;
    estimatedCookingTime : number; // In minutes
    servings : number;
    imageURL : string;

    constructor(id: string, cookbookId: string, name: string, estimatedCookingTime: number, servings: number, imageURL: string) {
        this.id = id;
        this.cookbookId = cookbookId;
        this.name = name;
        this.estimatedCookingTime = estimatedCookingTime;
        this.servings = servings;
        this.imageURL = imageURL;
    }
}
