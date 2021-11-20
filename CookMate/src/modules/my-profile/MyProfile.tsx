import React, { useContext, useEffect, useState } from "react";
import { User } from "../../shared/view-models/User";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View
} from "react-native";
import { Cookbook } from "../../shared/view-models/Cookbook";
import { MyProfileHeader } from "./MyProfileHeader";
import RecipeCard from "../RecipeFeed/RecipeCard";
import QueryService from "../../shared/services/QueryService";
import { Center } from "../../shared/components/style/Center";
import {
    FeedAllNavProps,
    FeedNavProps
} from "../../shared/components/navigation/param-lists/FeedParamList";
import { theme } from "../../shared/theme";
import { AuthContext } from "../../shared/components/auth/AuthProvider";
import { useIsFocused, useNavigation } from "@react-navigation/core";

type MyProfileProps = {} & FeedNavProps<"UserScreen">;

export const MyProfile: React.FC<MyProfileProps> = (props) => {
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<FeedAllNavProps<"RecipeViewScreen">>();

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
    const [userFetch, setUserFetch] = useState<User>();
    const isFocused = useIsFocused();

    useEffect(() => {
        setLoading(true);

        Promise.all([
            QueryService.users
                .getUser(user?.id as string)
                .then((user: User) => {
                    setUserFetch(user);
                })
                .catch((reason) =>
                    console.log("Error during load of user", reason)
                ),

            QueryService.cookbooks
                .getUserCookbook(user?.id as string)
                .then((cookbook: Cookbook) => {
                    setCookbook(cookbook);
                })
                .catch((reason) =>
                    console.log("Error during load of cookbook", reason)
                )
        ]).finally(() => setLoading(false));
    }, [isFocused]);

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? (
                <Center>
                    <ActivityIndicator
                        size="large"
                        color={theme.palette.secondaryColor}
                    />
                </Center>
            ) : (
                <View style={styles.container}>
                    <MyProfileHeader user={userFetch} cookbook={cookbook} />
                    <Text style={styles.recipeHeader}>Recipes</Text>
                    <FlatList
                        style={styles.listStyling}
                        data={cookbook?.recipes}
                        renderItem={({ item }) => (
                            <RecipeCard
                                onPress={() =>
                                    navigation.navigate("RecipeViewScreen", {
                                        recipeId: item.id
                                    })
                                }
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
            )}
        </View>
    );
};

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
