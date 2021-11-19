import React, {Component, SetStateAction, useEffect, useState} from "react";
import {User} from "../../shared/view-models/User";
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Cookbook} from "../../shared/view-models/Cookbook";
import {UserProfileHeader} from "./UserProfileHeader";
import RecipeCard from "../RecipeFeed/RecipeCard";
import QueryService from "../../shared/services/QueryService";
import {Center} from "../../shared/components/style/Center";
import {FeedNavProps} from "../../shared/components/navigation/param-lists/FeedParamList";
import {theme} from "../../shared/theme";

type UserProfileProps = {} & FeedNavProps<"UserScreen">

export const UserProfile : React.FC<UserProfileProps> = (props) => {
    const params = props.route.params;

    let recipeStyles = StyleSheet.create({
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

    const [isLoading, setLoading] = useState(true);
    const [cookbook, setCookbook] = useState<Cookbook>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        console.log("UserId: ", params.userId)
        setLoading(true);

        Promise.all(
            [
                QueryService.users.getUser(params.userId)
                    .then((user : User) => {
                        setUser(user);
                    })
                    .catch(reason => console.log("Error during load of user", reason)),

                QueryService.cookbooks.getUserCookbook(params.userId)
                    .then((cookbook : Cookbook) => {
                        setCookbook(cookbook);
                    })
                    .catch(reason => console.log("Error during load of cookbook", reason))
            ]
        ).finally(() => setLoading(false));

    }, []);



    return (
        <View style={{flex: 1}}>
            {isLoading ?
                <Center>
                    <ActivityIndicator size="large" color={theme.palette.secondaryColor} />
                </Center>
            :
                <View style={styles.container}>
                    <UserProfileHeader user={user} cookbook={cookbook}/>
                    <Text style={styles.recipeHeader}>Recipes</Text>
                    <FlatList
                        style={styles.listStyling}
                        data={cookbook?.recipes}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("RecipeFeedScreen")} /* Should point to RecipeView */>
                                <RecipeCard
                                    cardStyle={recipeStyles.verticalCard}
                                    imageStyle={recipeStyles.image}
                                    title={item.name}
                                    duration={item.estimatedCookingTime}
                                    persons={item.servings}
                                    imageUrl={item.imageURL}
                                />
                            </TouchableOpacity>
                        )}
                        numColumns={2}
                    />
                </View>
            }
        </View>
    )
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
