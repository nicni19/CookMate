import React, { Component, useContext, useState, useEffect } from "react";
//import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, Text } from "react-native";
import RecipeCard from "./RecipeCard";
import data from "./recipes.json";
import CookBookCard from "./CookBookCard";
import QueryService from "../../shared/services/QueryService";
import { UserSession } from "../../shared/components/auth/AuthType";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import {Center} from "../../shared/components/style/Center";
import {User} from "../../shared/view-models/User";
import {Recipe} from "../../shared/view-models/Recipe";

//const userCook = await QueryService.users.getUser(user?.id?);
//const cookbooks = userCook.following;

interface RecipeFeed {}

//class RecipeFeed extends Component {
export const RecipeFeed: React.FC<RecipeFeed> = () => {

    const { user } = useContext(AuthContext);
    console.log("---",user);
    const [theuser, setTheuser] = useState<User>();
    const [isLoading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    let cookbooks: any = [];
    let tempUser: User;

    useEffect(() => {
        (async function() {
            await QueryService.users.getUser(user.id).then((item: User) => {
                setTheuser(item);
                tempUser = item;
            }).then(() => {
                console.log("TempUser ",tempUser);
                let tempRecipes: Recipe[] = [];
                tempUser.following.forEach(async (cookbook: any) => {
                    await QueryService.recipes.getRecipes(cookbook.id).then((recipe: any) => {
                        for (let i = 0; i < recipe.length; i++) {
                            console.log(recipe[i]);
                            tempRecipes.push(recipe[i]);
                        }
                    })
                    setRecipes(tempRecipes);
                })
            });
        })().finally(() => {setLoading(false)});
    },[user])



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
            marginRight: "6.3%",
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
            //alignSelf: "center",
        },
        text: {
            fontFamily: "Roboto",
            marginBottom: "2%",
        },
        titleText: {
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: "bold"
        },
        lineView: {
            borderBottomColor: "black",
            width: 328,
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 4,
            marginLeft: "4%",
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
        }
    });
    console.log("Theuser2",theuser)
    console.log(recipes);
    return (
        <View style={{ flex: 1 }}>
            {isLoading ?
                <Center>
                    <Text>Loading...</Text>
                </Center>
            :
                <View>
                    <SafeAreaView style={styles.horizontalContainer}>
                        <Text style={styles.titleText}>Cookbooks</Text>
                        <Text>{theuser && theuser.firstName}</Text>
                        <FlatList
                            data={theuser && theuser.following}
                            renderItem={({ item }) => (
                                <CookBookCard
                                    cardStyle={styles.horizontalCard}
                                    imageStyle={styles.profileImage}
                                    title={item.name}
                                    author="DaBoi"
                                    //author={}
                                    //imageUrl={item}
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
                            renderItem={({ item }) => (
                                <RecipeCard
                                    cardStyle={styles.verticalCard}
                                    imageStyle={styles.image}
                                    title={item.name}
                                    duration={item.estimatedCookingTime}
                                    persons={item.servings}
                                    imageUrl={item.imageURL}
                                />
                            )}
                            numColumns={2}
                        />
                    </SafeAreaView>
                </View>
            }
        </View>
    );
}

export default RecipeFeed;
