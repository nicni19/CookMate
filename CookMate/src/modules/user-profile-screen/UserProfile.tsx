import React, {Component} from "react";
import {User} from "../../shared/view-models/User";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {Cookbook} from "../../shared/view-models/Cookbook";
import {CookbookSimple} from "../../shared/view-models/CookbookSimple";
import {UserSimple} from "../../shared/view-models/UserSimple";
import {RecipeSimple} from "../../shared/view-models/RecipeSimple";
import {UserProfileHeader} from "./UserProfileHeader";
import data from "../RecipeFeed/recipes.json";
import RecipeCard from "../RecipeFeed/RecipeCard";

type UserProfileProps = {
    userId: string
}

const userJeppe = new UserSimple("5", "Jeppe", "Stenstrup");
const andreasSimpleRecipe1 = new RecipeSimple("100", "Pasta e Ceci", 0.45, 4, "https://live.staticflickr.com/65535/49678442758_cb4cf78850_h.jpg");
const andreasSimpleRecipe2 = new RecipeSimple("100", "Pasta e og andet", 0.45, 4, "https://live.staticflickr.com/65535/49678442758_cb4cf78850_h.jpg");
let testUser = new User("1", "Andreas", "Edal Pedersen", [new CookbookSimple("2", "Jeppes kogebog", userJeppe)]);

export class UserProfile extends Component<UserProfileProps> {
    styles = StyleSheet.create({
        verticalCard: {
            width: "48%",
            borderWidth: 0,
            borderRadius: 10,
            marginRight: "4%",
            padding: 0,
            backgroundColor: "#6eda9f",
            paddingBottom: 5
        },
        image: {
            width: "100%",
            height: 100,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10
        }
    });

    render() {
        // let currentUser = QueryService.users.getUser(this.props.userId);
        let currentUser = testUser;
        let currentCookbook = new Cookbook("3", "Andreas's Kogebog", currentUser, [userJeppe, userJeppe], [andreasSimpleRecipe1,andreasSimpleRecipe2]);
        return (
            <View style={styles.container}>
                <UserProfileHeader user={currentUser} cookbook={currentCookbook}/>
                <Text style={styles.recipeHeader}>Recipes</Text>
                <FlatList
                    style={styles.listStyling}
                    data={currentCookbook.recipes}
                    renderItem={({ item }) => (
                        <RecipeCard
                            cardStyle={this.styles.verticalCard}
                            imageStyle={this.styles.image}
                            title={item.name}
                            duration={item.estimatedCookingTime}
                            persons={item.servings}
                            imageUrl={item.imageURL}
                        />
                    )}
                    numColumns={2}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
       margin: 20,
       flex: 1
    },
    recipeHeader: {
        fontSize: 18,
        paddingTop: 10
    },
    listStyling: {
        flex: 1,
        marginTop: 10
    }
});
