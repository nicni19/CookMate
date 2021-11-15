import React, {Component} from "react";
import {User} from "../../shared/view-models/User";
import {Image, StyleSheet, Text, View} from "react-native";
import {Cookbook} from "../../shared/view-models/Cookbook";
import {CookbookSimple} from "../../shared/view-models/CookbookSimple";
import {UserSimple} from "../../shared/view-models/UserSimple";
import {RecipeSimple} from "../../shared/view-models/RecipeSimple";
import {UserProfileHeader} from "./UserProfileHeader";

type UserProfileProps = {
    userId: string
}

const userJeppe = new UserSimple("5", "Jeppe", "Stenstrup");
const andreasSimpleRecipe = new RecipeSimple("100", "Pasta e Ceci", 45, 4, "https://live.staticflickr.com/65535/49678442758_cb4cf78850_h.jpg");
let testUser = new User("1", "Andreas", "Edal Pedersen", [new CookbookSimple("2", "Jeppes kogebog", userJeppe)]);

export class UserProfile extends Component<UserProfileProps> {
    render() {
        // let currentUser = QueryService.users.getUser(this.props.userId);
        let currentUser = testUser;
        let currentCookbook = new Cookbook("3", "Andreas's Kogebog", currentUser, [userJeppe, userJeppe], [andreasSimpleRecipe]);
        console.log(currentUser);
        return (
            <View style={styles.container}>
                <UserProfileHeader user={currentUser} cookbook={currentCookbook}/>
                <Text style={styles.recipeHeader}>Recipes</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       marginTop: 100,
       margin: 20,
       flex: 1
   },
    recipeHeader: {
       fontSize: 18,
        paddingTop: 10
    }
});
