import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import Card from './Card';
import data from './recipes.json';

class RecipeFeed extends Component {
    styles = StyleSheet.create({
        horizontalCard: {
            width: 100,
            height: 100,
            margin: 5,
            marginLeft: 0,
            marginRight: 10,
            borderWidth: 0,
            borderRadius: 10,
            padding: 0,
            flex: 1,
            backgroundColor: "#af3c3c",
            alignItems: "center",
        },
        verticalCard: {
            width: "43%",
            margin: 5,
            marginLeft: 0,
            marginRight: "6.3%",
            marginBottom: "5%",
            borderWidth: 0,
            borderRadius: 10,
            padding: 0,
            backgroundColor: "#167542",
            alignItems: "flex-start",
        },
        horizontalContainer: {
            width: 300,
            height: 100,
            margin: 0,
            padding: 0,
            marginLeft: "4%",
            borderWidth: 0,
            flex: 2,
        },
        verticalContainer: {
            width: "100%",
            margin: 0,
            marginVertical: "0%",
            padding: 0,
            marginLeft: "4%",
            marginRight: "0%",
            borderWidth: 0,
            flex: 6 ,
            //alignSelf: "center",
        },
        text: {
            fontFamily: "Roboto",
        },
        titleText: {
            fontFamily: "Roboto",
            fontSize: 20,
            fontWeight: "bold",
        },
        lineView: {
            borderBottomColor: 'black',
            width: 328,
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 4,
            marginLeft: "4%",
            marginRight: "4%",
        },
        image: {
            width: "100%",
            height: 100,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
        },
        profileImage: {
            width: "70%",
            marginTop: "13%",
            marginBottom: "8%",
            height: 80,
            borderRadius: 50,
        },
    })
    render() {
        return (
            <View>
                <SafeAreaView style={this.styles.horizontalContainer}>
                    <Text style={this.styles.titleText}>Cookbooks</Text>
                    <FlatList
                        data={data.cookbooks}
                        renderItem={({item}) => <Card cardStyle={this.styles.horizontalCard} imageStyle={this.styles.profileImage} title={item.title} author={item.author} imageUrl={item.imageUrl}/>}
                        horizontal={true}
                    />
                </SafeAreaView>
                <View style={this.styles.lineView}></View>
                <SafeAreaView style={this.styles.verticalContainer}>
                    <Text style={this.styles.text}>News from cookbooks you follow</Text>
                    <FlatList
                        data={data.recipes}
                        renderItem={({item}) => <Card cardStyle={this.styles.verticalCard} imageStyle={this.styles.image} title={item.title} duration={item.duration} persons={item.persons} imageUrl={item.imageUrl}/>}
                        numColumns={2}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

export default RecipeFeed;
