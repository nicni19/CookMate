import React, { Component } from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Recipe } from "../../shared/view-models/Recipe";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

type cardProps = {
    recipe: Recipe | undefined;
};

class IngredientInstructionCard extends Component<cardProps, any> {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.instructions_ingredients}>
                    <Text style={styles.instructions_ingredients_text}>
                        Ingredients
                    </Text>
                    <Text style={styles.instructions_ingredients_text}>
                        Instructions
                    </Text>
                </View>
                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={true}
                    snapToInterval={Dimensions.get("window").width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={0.8}
                >
                    <View
                        style={[
                            styles.listStyle,
                            {
                                paddingTop: 10,
                                paddingLeft: 5,
                                paddingBottom: 5,
                                flex: 1
                            }
                        ]}
                    >
                        <FlatList
                            data={this.props.recipe?.ingredients}
                            renderItem={({ item }) => (
                                <View style={styles.ingredientListStyle}>
                                    <Text style={styles.quantityUnitStyle}>
                                        {item.quantity}
                                        {item.unit}
                                    </Text>
                                    <Text style={styles.itemNameStyle}>
                                        {item.name}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>

                    <View style={styles.listStyle}>
                        <FlatList
                            data={this.props.recipe?.instructions}
                            renderItem={({ item }) => (
                                <View style={styles.insttuctionListStyle}>
                                    <Text style={styles.sortingNumberStyle}>
                                        {item.sortingNumber}
                                    </Text>
                                    <Text style={styles.instructionTextStyle}>
                                        {item.text}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default IngredientInstructionCard;

const cardStyle = StyleSheet.create({
    card: {
        display: "flex",
        paddingBottom: 5,
        flex: 1,
        fontSize: 20,
        paddingVertical: 20,
        paddingHorizontal: 10
    }
});

const styles = StyleSheet.create({
    listStyle: {
        width: Dimensions.get("window").width * 0.9,
        alignContent: "center",
        borderRadius: 30,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "#EFEFEF",
        flex: 1
    },
    ingredientListStyle: {
        ...cardStyle.card,
        flexDirection: "row",
        paddingBottom: 10
    },
    insttuctionListStyle: {
        ...cardStyle.card,
        flexDirection: "row",
        paddingBottom: 10
    },
    quantityUnitStyle: {
        backgroundColor: "lightgrey",
        borderRadius: 40,
        flex: 0,
        paddingRight: 10,
        paddingLeft: 10
    },
    itemNameStyle: {
        backgroundColor: "lightgrey",
        borderRadius: 40,
        flex: 1,
        paddingLeft: 10
    },
    sortingNumberStyle: {
        alignContent: "center",
        height: 22,
        marginLeft: 10,
        width: 20,
        borderRadius: 100,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row",
        display: "flex",
        paddingBottom: 5,
        backgroundColor: "white"
    },
    instructionTextStyle: {
        alignContent: "center",
        marginLeft: 10,
        width: "100%",
        paddingLeft: 5,
        paddingRight: 10,
        flexDirection: "row",
        display: "flex",
        paddingBottom: 5,
        flex: 1
    },
    instructions_ingredients_text: {
        fontSize: 18
    },
    instructions_ingredients: {
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
