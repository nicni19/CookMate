import React,{Component} from "react";
import {StyleSheet, Text, View, Image, FlatList} from "react-native";
import { Recipe } from "../../shared/view-models/Recipe";
import IngredientInstructionCard from "./IngredientInstructionCard";

type RecipeViewProps = {
    recipe: Recipe;
}

class RecipeView extends Component<RecipeViewProps,any> {
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={{height:"50%"}}>
                    <Text style={styles.title}>{this.props.recipe.name}</Text>
                    <Text>[TODO: Show user]</Text>
                    <Image style={styles.picture} source={{uri: this.props.recipe.imageURL}}/>
                    <Text>{this.props.recipe.description}</Text>
                </View>
                <View style={{height:"50%"}}>
                    <View style={styles.instructions_ingredients}>
                        <Text>Instructions</Text>
                        <Text>Ingredients</Text>
                    </View>
                    <IngredientInstructionCard recipe={this.props.recipe}></IngredientInstructionCard>
                </View>
            </View>
        )
    }
}

/*
    <FlatList
                        horizontal={true}
                        data={[{key:"Instructions"},{key:"Ingredients"}]}
                        renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}/>
*/

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100%",
    },
    title: {
        fontSize: 40,
    },
    picture: {
        width: "100%",
        height: "200px",
    },
    instructions_ingredients:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
    }
});

export default RecipeView;