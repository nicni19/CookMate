import React,{Component} from "react";
import {StyleSheet, Text, View, Image, FlatList} from "react-native";


class Recipe extends Component {
    render(){
        return(
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>Man Meat</Text>
                    <Text>User</Text>
                    <Image style={styles.picture} source={{uri: "https://restaurantmeat.dk/wp-content/uploads/2021/01/Aftenmenu_Top_Smal-1920x690.jpg"}}/>
                    <Text>I really love this dish, nice and filling. Man meat is a treat for all ages :)</Text>
                </View>
                <View style={styles.flatlist}>
                    <FlatList
                        horizontal={true}
                        data={[{key:"Instructions"},{key:"Ingredients"}]}
                        renderItem={({item}) => <Text style={styles.items}>{item.key}</Text>}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    flatlist: {
        flex: 1,
        marginHorizontal:50,
    },
    items: {
        padding: 20,
        fontSize: 18,
        height: 200,
        backgroundColor:"grey",
        borderRadius:25,
    },
    title: {
        fontSize: 40,
    },
    picture: {
        width: "100%",
        height: "200px",
    }
});

export default Recipe;