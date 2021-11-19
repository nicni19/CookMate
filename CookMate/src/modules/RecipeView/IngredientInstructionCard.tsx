import React,{ Component } from "react";
import { View,Text, FlatList, ScrollView } from "react-native";
import { Recipe } from "../../shared/view-models/Recipe";
import { StyleSheet} from 'react-native';

type cardProps = {
    recipe: Recipe
}


class IngredientInstructionCard extends Component<cardProps,any>{
    render(){
        return(
        <ScrollView style={{flex:1}} horizontal={true}>
            <View style={[styles.listStyle,{paddingTop:10,paddingLeft:5,paddingBottom:5}]}>
                <FlatList 
                    data={this.props.recipe.ingredients}
                    renderItem={({item}) => <View style={styles.ingredientListStyle}>
                                                <Text style={{backgroundColor:"lightgrey",borderRadius:40,flex:0,paddingRight:10,paddingLeft:10}}>{item.quantity}{item.unit.symbol}</Text>
                                                <Text style={{backgroundColor:"lightgrey",borderRadius:40,flex:1,paddingLeft:10}}>{item.name}</Text>
                                            </View>}/>
            </View>

            <View style={styles.listStyle}>
                <FlatList 
                    data={this.props.recipe.instructions}
                    renderItem={({item}) => <View style={styles.insttuctionListStyle}>
                                                <Text style={{alignContent:"center",marginLeft:10,width:60,borderRadius:100,paddingLeft:5,paddingRight:5,flexDirection:"row",display:"flex",paddingBottom:5,flex:0, backgroundColor:"white"}}>{item.sortingNumber}</Text>
                                                <Text style={{alignContent:"center",marginLeft:10,width:"100%",paddingLeft:5,paddingRight:"10px",flexDirection:"row",display:"flex",paddingBottom:5,flex:1}}>{item.text}</Text>
                                            </View>}/>
            
            </View>
        </ScrollView>
        )
    }
}

export default IngredientInstructionCard;

const cardStyle = StyleSheet.create({
    card: {
        width:"80vw",
        paddingLeft:5,
        paddingRight:5,
        display:"flex",
        paddingBottom:5,
        flex:1,
        fontSize:20,
    }
})

const styles = StyleSheet.create({
    listStyle: {
        height: 400,
        width:"80vw",
        alignContent: "center",
        borderRadius:30,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
        marginBottom:5,
        backgroundColor:"#EFEFEF",
    },
    ingredientListStyle:{
        ...cardStyle.card,
        flexDirection:"row",
        paddingTop:"10px",
        paddingRight:"15px",
        paddingLeft:"10px",
    },
    insttuctionListStyle:{
        ...cardStyle.card,
        flexDirection: "row",
        paddingTop:"20px",
        paddingRight:"10px",
        paddingLeft:"10px",
    }

});