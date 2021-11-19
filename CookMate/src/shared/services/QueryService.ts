import {
    ICookbookQueryService,
    ILoginService,
    IRecipeQueryService,
    IUserQueryService
} from "./QueryServiceInterfaces";
import { User } from "../view-models/User";
import { UserSimple } from "../view-models/UserSimple";
import { Cookbook } from "../view-models/Cookbook";
import { Recipe } from "../view-models/Recipe";
import { RecipeSimple } from "../view-models/RecipeSimple";
import { CookbookSimple } from "../view-models/CookbookSimple";
import { Instruction } from "../view-models/Instruction";
import { Ingredient } from "../view-models/Ingredient";

import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
    documentId,
    setDoc,
    doc,
    addDoc,
    getDoc
} from "firebase/firestore";
import { db, provider, auth } from "../utils/firebaseConfig";
import { Unit } from "../view-models/Unit";

export default class QueryService {
    public static users: IUserQueryService = {
        getUser: async function (userId: string): Promise<User> {
            const w = db.collection("users");
            const wDoc = await w.doc(userId + "").get();

            const getUser = async (id: any, data: any) => {
                if (!data) return null!;
                return new User(
                    id,
                    await data.firstname,
                    await data.lastname,
                    (await data.following.length) > 0
                        ? await QueryService.cookbooks.getFollowedCookbooks(
                              data.following
                          )
                        : null!
                );
            };

            return await getUser(userId, await wDoc.data());
        },
        getUserSimple: async function (userId: string): Promise<UserSimple> {
            const q = query(
                collection(db, "users"),
                where(documentId(), "==", userId)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: UserSimple = null!;

            querySnapshot.forEach((doc) => {
                toReturn = new UserSimple(
                    doc.id,
                    doc.data().firstname,
                    doc.data().lastname
                );
            });

            return toReturn;
        },
        getFollowersOfCookbook: async function (
            cookbookId: string
        ): Promise<UserSimple[]> {
            const q = query(
                collection(db, "users"),
                where("following", "array-contains", cookbookId)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: Array<UserSimple> = [];

            querySnapshot.forEach((doc) => {
                toReturn.push(
                    new UserSimple(
                        doc.id,
                        doc.data().firstname,
                        doc.data().lastname
                    )
                );
            });

            return toReturn;
        }
    };

    public static cookbooks: ICookbookQueryService = {
        getCookbook: async function (cookbookId: string): Promise<Cookbook> {
            const q = query(
                collection(db, "cookbooks"),
                where(documentId(), "==", cookbookId)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: Cookbook = new Cookbook(
                null!,
                null!,
                null!,
                null!,
                null!
            );
            let userId: string = null!;
            let cookbookFollowers: UserSimple[] =
                await QueryService.users.getFollowersOfCookbook(cookbookId);

            querySnapshot.forEach((doc) => {
                userId = doc.data().owner;
                toReturn = new Cookbook(
                    doc.id,
                    doc.data().name,
                    null!,
                    cookbookFollowers,
                    null!
                );
            });

            toReturn.owner = await QueryService.users.getUserSimple(userId);

            return toReturn;
        },
        getUserCookbook: async function (userId: string): Promise<Cookbook> {
            const q = query(
                collection(db, "cookbooks"),
                where("owner", "==", userId)
            );
            const querySnapshot = await getDocs(q);
            const owner: UserSimple = await QueryService.users.getUserSimple(
                userId
            );

            let cookbook: Cookbook = null!;
            querySnapshot.forEach((doc) => {
                cookbook = new Cookbook(
                    doc.id,
                    doc.data().name,
                    owner,
                    [],
                    []
                );
            });

            cookbook.followers = await QueryService.users.getFollowersOfCookbook(cookbook.id);
            cookbook.recipes = await QueryService.recipes.getRecipes(cookbook.id);

            return cookbook;
        },
        getFollowedCookbooks: async function (
            userIds: string[]
        ): Promise<CookbookSimple[]> {
            const q = query(
                collection(db, "cookbooks"),
                where(documentId(), "in", userIds)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: CookbookSimple[] = [];
            querySnapshot.forEach((doc) => {
                toReturn.push(
                    new CookbookSimple(
                        doc.id,
                        doc.data().name,
                        doc.data().owner
                    )
                );
            });

            return toReturn;
        }
    };

    public static recipes: IRecipeQueryService = {
        getRecipe: async function (recipeId: string): Promise<Recipe> {
            const q = query(
                collection(db, "recipes"),
                where(documentId(), "==", recipeId)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: Recipe = null!;

            querySnapshot.forEach((doc) => {
                let instructions: Array<Instruction> = doc
                    .data()
                    .instructions.map((item: any) => {
                        return new Instruction(
                            doc.id,
                            item.sortOrder,
                            item.name
                        );
                    });
                let ingredients: Array<Ingredient> = doc
                    .data()
                    .Ingredients.map((item: any) => {
                        return new Ingredient(
                            doc.id,
                            item.name,
                            new Unit(item.unit, item.unit),
                            item.quantity
                        );
                    });
                toReturn = new Recipe(
                    new RecipeSimple(
                        doc.id,
                        doc.data().cookbookId,
                        doc.data().name,
                        doc.data().estimatedCooktime,
                        doc.data().servings,
                        doc.data().image
                    ),
                    doc.data().description,
                    instructions,
                    ingredients
                );
            });

            return toReturn;
        },
        getRecipes: async function (
            cookbookId: string
        ): Promise<RecipeSimple[]> {
            const q = query(
                collection(db, "recipes"),
                where("cookbookId", "==", cookbookId)
            );
            const querySnapshot = await getDocs(q);

            let toReturn: Array<RecipeSimple> = [];

            querySnapshot.forEach((doc) => {
                toReturn.push(
                    new RecipeSimple(
                        doc.id,
                        doc.data().cookbookId,
                        doc.data().name,
                        doc.data().estimatedCooktime,
                        doc.data().servings,
                        doc.data().image
                    )
                );
            });

            return toReturn;
        },
        addRecipe: async function (
            cookbookId: string,
            recipe: Recipe
        ): Promise<boolean> {
            const docRef = await addDoc(collection(db, "recipes"), {
                cookbookId: cookbookId,
                name: recipe.name,
                description: recipe.description,
                estimatedCooktime: recipe.estimatedCookingTime,
                servings: recipe.servings,
                image: recipe.imageURL,
                Ingredients: recipe.ingredients.map((ingredient: any) => {
                    return {
                        name: ingredient.name,
                        quantity: ingredient.quantity,
                        unit: ingredient.unit.name
                    };
                }),
                instructions: recipe.instructions.map((instruction: any) => {
                    return {
                        name: instruction.text,
                        sortOrder: instruction.sortingNumber
                    };
                })
            });

            return !!docRef.id;
        }
    };

    public static authentication: ILoginService = {
        async requestLogin(
            username: string,
            password: string
        ): Promise<string | null> {
            const q = query(
                collection(db, "users"),
                where("username", "==", username)
            );
            const querySnapshot = await getDocs(q);

            let userId: string = null!;
            querySnapshot.forEach((doc) => {
                if (doc.data().password == password) {
                    userId = doc.data().password == password ? doc.id : null!;
                }
            });
            return userId;
        }
    };
}
