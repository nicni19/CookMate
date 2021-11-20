import React,{Component} from "react";
import {StyleSheet, Text, View, Image, FlatList, ScrollView} from "react-native";
import { Recipe } from "../../shared/view-models/Recipe";
import { UserSimple } from "../../shared/view-models/UserSimple";
import IngredientInstructionCard from "./IngredientInstructionCard";

type RecipeViewProps = {
    recipe: Recipe | undefined,
    owner: UserSimple | undefined
}

class RecipeView extends Component<RecipeViewProps,any> {
    render(){
        return(
            <ScrollView style={{backgroundColor:"white",height:"100%"}}>
                <View style={{}}>
                    <Text style={styles.title}>{this.props.recipe?.name}</Text>
                    <Text style={{paddingLeft:"2.5%",paddingBottom:5,fontSize:20}}>{this.props.owner?.firstName} {this.props.owner?.lastName}</Text>
                    <Image style={styles.picture} source={{uri: this.props.recipe?.imageURL}}/>
                    <Text style={{padding:15, marginBottom: 20, fontSize: 16, fontFamily: "Roboto"}}>{this.props.recipe?.description}</Text>
                </View>
                <View style={{height:500}}>
                    <IngredientInstructionCard recipe={this.props.recipe}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor:"white",
    },
    title: {
        fontSize: 40,
        paddingHorizontal:"2.5%",
    },
    picture: {
        width: "100%",
        height: 250,
        backgroundColor: "purple",
        marginBottom: 20
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