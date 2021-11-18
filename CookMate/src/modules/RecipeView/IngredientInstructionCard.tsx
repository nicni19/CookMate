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
                <View style={[styles.listStyle,{backgroundColor:"lightgreen",alignContent:"center"}]}>
                    <FlatList 
                        data={this.props.recipe.ingredients}
                        renderItem={({item}) => <Text>{item.name},{item.quantity}</Text>}/>
                </View>
                <View style={[styles.listStyle,{backgroundColor:"purple"}]}>
                    <FlatList 
                        data={this.props.recipe.instructions}
                        renderItem={({item}) => <Text style={{alignContent:"center"}}>{item.text}</Text>}/>
                </View>
            </View>
        )
    }
}

export default IngredientInstructionCard;

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        alignContent: "center"
        
    },
    listStyle: {
        height: 400,
        width:200,
        alignContent: "center",
        borderRadius:30,
    },
    ingredientsStyle: {
        flex: 1,
        justifyContent: 'space-evenly',
    }
});