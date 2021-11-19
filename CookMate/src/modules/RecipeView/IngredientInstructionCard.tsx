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
        <ScrollView style={{display:"flex"}} horizontal={true}>
            <View style={[styles.listStyle,{paddingTop:10,paddingLeft:5,paddingBottom:5}]}>
                <FlatList 
                    data={this.props.recipe.ingredients}
                    renderItem={({item}) => <View style={styles.ingredientListStyle}>
                                                <Text style={{backgroundColor:"lightgrey",borderRadius:40,flex:0,paddingRight:10,paddingLeft:10,fontSize:20}}>{item.quantity}{item.unit.symbol}</Text>
                                                <Text style={{backgroundColor:"lightgrey",borderRadius:40,flex:1,paddingRight:10,paddingLeft:10,fontSize:20}}>{item.name}</Text>
                                            </View>}/>
            </View>

            <View style={styles.listStyle}>
                <FlatList 
                    data={this.props.recipe.instructions}
                    renderItem={({item}) => <View style={styles.insttuctionListStyle}>
                                                <Text style={{alignContent:"center",marginLeft:10,width:60,borderRadius:100,paddingLeft:5,paddingRight:5,flexDirection:"row",display:"flex",paddingBottom:5,flex:0, backgroundColor:"white",fontSize:15}}>{item.sortingNumber}</Text>
                                                <Text style={{alignContent:"center",marginLeft:10,width:"100%",paddingLeft:5,paddingRight:5,flexDirection:"row",display:"flex",paddingBottom:5,flex:1,fontSize:15}}>{item.text}</Text>
                                            </View>}/>
            
            </View>
        </ScrollView>
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
        width:"100%",
        alignContent: "center",
        borderRadius:30,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
        marginBottom:5,
        backgroundColor:"grey",
    },
    ingredientListStyle:{
        width:"100%",
        paddingLeft:5,
        paddingRight:5,
        flexDirection:"row",
        display:"flex",
        paddingBottom:5,
        flex:1,
    },
    insttuctionListStyle:{
        width:"100%",
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        flexDirection:"row",
        display:"flex",
        paddingBottom:5,
        flex:1
    }

});