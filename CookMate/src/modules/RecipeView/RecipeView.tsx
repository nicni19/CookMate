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
                    <Text style={{paddingLeft:"2.5%",paddingBottom:5}}>[TODO: Show user]</Text>
                    <Image style={styles.picture} source={{uri: this.props.recipe.imageURL}}/>
                    <Text style={{paddingTop:5}}>{this.props.recipe.description}</Text>
                </View>
                <View style={{height:"50%"}}>
                    <View style={{borderBottomColor:"lightgrey",borderBottomWidth:1}}/>
                    <View style={styles.instructions_ingredients}>
                        <Text style={styles.instructions_ingredients_text}>Ingredients</Text>
                        <Text style={styles.instructions_ingredients_text}>Instructions</Text>
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
        
    },
    title: {
        fontSize: 50,
        paddingLeft:"2.5%",
    },
    picture: {
        width: "100%",
        height: 250,
        backgroundColor: "purple",
    },
    instructions_ingredients:{
        paddingLeft: "15%",
        paddingRight: "15%",
        paddingBottom:5,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    instructions_ingredients_text:{
        fontSize:18,
    }
});

export default RecipeView;