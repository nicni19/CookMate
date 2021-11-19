import React, {Component, SetStateAction, useEffect, useState} from "react";
import {User} from "../../shared/view-models/User";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {Cookbook} from "../../shared/view-models/Cookbook";
import {UserProfileHeader} from "./UserProfileHeader";
import RecipeCard from "../RecipeFeed/RecipeCard";
import QueryService from "../../shared/services/QueryService";
import {Center} from "../../shared/components/style/Center";

type UserProfileProps = {
    userId: string
}

export const UserProfile : React.FC<UserProfileProps> = (props) => {
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
        console.log("UserId: ", props.userId)
        setLoading(true);

        Promise.all(
            [
                QueryService.users.getUser(props.userId)
                    .then((user : User) => {
                        setUser(user);
                        console.log("Efter current user", user);
                    })
                    .catch(reason => console.log("Error during load of user", reason)),

                QueryService.cookbooks.getUserCookbook(props.userId)
                    .then((cookbook : Cookbook) => {
                        setCookbook(cookbook);
                        console.log("Efter current cookbook", cookbook);
                    })
                    .catch(reason => console.log("Error during load of cookbook", reason))
            ]
        ).finally(() => setLoading(false));

    }, []);



    return (
        <View style={{flex: 1}}>
            {isLoading ?
                <Center>
                    <Text>Loading...</Text>
                </Center>
            :
                <View style={styles.container}>
                    <UserProfileHeader user={user} cookbook={cookbook}/>
                    <Text style={styles.recipeHeader}>Recipes</Text>
                    <FlatList
                        style={styles.listStyling}
                        data={cookbook?.recipes}
                        renderItem={({item}) => (
                            <RecipeCard
                                cardStyle={recipeStyles.verticalCard}
                                imageStyle={recipeStyles.image}
                                title={item.name}
                                duration={item.estimatedCookingTime}
                                persons={item.servings}
                                imageUrl={item.imageURL}
                            />
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
