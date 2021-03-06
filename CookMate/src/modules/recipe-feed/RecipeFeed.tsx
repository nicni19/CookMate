import React, { Component, useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import RecipeCard from "./RecipeCard";
import CookBookCard from "./CookBookCard";
import QueryService from "../../shared/services/QueryService";
import { UserSession } from "../../shared/components/auth/AuthType";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { Center } from "../../shared/components/style/Center";
import { User } from "../../shared/view-models/User";
import { Recipe } from "../../shared/view-models/Recipe";
import { FeedNavProps } from "../../shared/components/navigation/param-lists/FeedParamList";

type RecipeFeedProps = {} & FeedNavProps<"RecipeFeedScreen">;

export const RecipeFeed: React.FC<RecipeFeedProps> = (props) => {
    const { user } = useContext(AuthContext);
    const [theUser, setTheUser] = useState<User>();
    const [isLoading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    let cookbooks: any = [];
    let tempUser: User;

    useEffect(() => {
        (async function () {
            if (user == null) {
                return;
            }
            await QueryService.users
                .getUser(user.id)
                .then((item: User) => {
                    setTheUser(item);
                    tempUser = item;
                })
                .then(() => {
                    let tempRecipes: Recipe[] = [];
                    tempUser.following.forEach(async (cookbook: any) => {
                        await QueryService.recipes
                            .getRecipes(cookbook.id)
                            .then((recipe: any) => {
                                for (let i = 0; i < recipe.length; i++) {
                                    tempRecipes.push(recipe[i]);
                                }
                            });
                        setRecipes(tempRecipes);
                    });
                });
        })().finally(() => {
            setLoading(false);
        });
    }, [user]);

    let styles = StyleSheet.create({
        horizontalCard: {
            width: 100,
            height: "95%",
            margin: 5,
            marginLeft: 0,
            marginRight: 10,
            borderWidth: 0,
            borderRadius: 10,
            padding: 0,
            flex: 1,
            backgroundColor: "#af3c3c",
            alignItems: "center"
        },
        verticalCard: {
            width: "43%",
            margin: 5,
            marginLeft: 0,
            marginRight: 20,
            marginBottom: "5%",
            borderWidth: 0,
            borderRadius: 10,
            padding: 0,
            backgroundColor: "#167542",
            alignItems: "flex-start"
        },
        horizontalContainer: {
            height: 100,
            margin: 0,
            padding: 0,
            marginLeft: "4%",
            borderWidth: 0,
            flex: 5
        },
        verticalContainer: {
            width: "100%",
            margin: 0,
            marginVertical: "0%",
            padding: 0,
            marginLeft: "4%",
            marginRight: "0%",
            borderWidth: 0,
            flex: 12
        },
        text: {
            fontFamily: "Roboto",
            marginBottom: "2%"
        },
        titleText: {
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: "bold"
        },
        lineView: {
            borderBottomColor: "black",
            width: "100%",
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 4,
            marginLeft: "0%",
            marginRight: "4%"
        },
        image: {
            width: "100%",
            height: 100,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10
        },
        profileImage: {
            width: "70%",
            marginTop: "13%",
            marginBottom: "8%",
            height: "47%",
            borderRadius: 50
        },
        mainView: {
            width: "100%",
            height: "100%",
            flex: 1
        }
    });
    return (
        <View style={styles.mainView}>
            {isLoading ? (
                <Center>
                    <Text>Loading...</Text>
                </Center>
            ) : (
                <View style={styles.mainView}>
                    <SafeAreaView style={styles.horizontalContainer}>
                        <Text style={styles.titleText}>Cookbooks</Text>
                        <Text>{theUser && theUser.firstName}</Text>
                        <FlatList
                            data={theUser && theUser.following}
                            renderItem={({ item: cookbook }) => (
                                <CookBookCard
                                    onPress={() => {
                                        console.log(
                                            "Cookbook card: ",
                                            cookbook
                                        );
                                        props.navigation.navigate(
                                            "UserScreen",
                                            { userId: cookbook.owner.id }
                                        );
                                    }}
                                    cardStyle={styles.horizontalCard}
                                    imageStyle={styles.profileImage}
                                    title={cookbook.name}
                                />
                            )}
                            horizontal={true}
                        />
                    </SafeAreaView>
                    <View style={styles.lineView}></View>
                    <SafeAreaView style={styles.verticalContainer}>
                        <Text style={styles.text}>
                            News from cookbooks you follow
                        </Text>
                        <FlatList
                            data={recipes}
                            renderItem={({ item: recipe }) => (
                                <RecipeCard
                                    onPress={() =>
                                        props.navigation.navigate(
                                            "RecipeViewScreen",
                                            { recipeId: recipe.id }
                                        )
                                    }
                                    cardStyle={styles.verticalCard}
                                    imageStyle={styles.image}
                                    title={recipe.name}
                                    duration={recipe.estimatedCookingTime}
                                    persons={recipe.servings}
                                    imageUrl={recipe.imageURL}
                                />
                            )}
                            numColumns={2}
                        />
                    </SafeAreaView>
                </View>
            )}
        </View>
    );
};

export default RecipeFeed;
