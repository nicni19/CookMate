import React,{ Component } from "react";
import { View,Text, FlatList } from "react-native";
import { Recipe } from "../../shared/view-models/Recipe";
import { StyleSheet} from 'react-native';

type cardProps = {
    recipe: Recipe
}


class IngredientInstructionCard extends Component<cardProps,any>{
    render(){
        //TODO: Change the flatlist item render from Text to something more fitting
        return(
            <View style={styles.wrapper}>
                <View style={styles.listStyle}>
                    <Text>Ingredients</Text>
                    <FlatList 
                        data={this.props.recipe.ingredients}
                        renderItem={({item}) => <Text>{item.name}</Text>}/>
                </View>
                <View>
                <View style={styles.listStyle}>
                    <Text>Instructions</Text>
                    <FlatList 
                        data={this.props.recipe.instructions}
                        renderItem={({item}) => <Text>{item.text}</Text>}/>
                </View>
            </View>
            </View>
        )
    }
}

export default IngredientInstructionCard;

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flexDirection: 'row',
        padding: "10",
        justifyContent:"space-between",
        height: "100%",
    },
    listStyle: {
        backgroundColor: "grey",
        height: "100%",
    },
    ingredientsStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
    }
});