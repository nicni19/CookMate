import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import Card from './Card';

const DATA = ['TestCard', 'TestCard2', '3', '4', '5', '6']
const cardComponents = DATA.map(type => <Card></Card>)

class RecipeFeed extends Component {
    styles = StyleSheet.create({
        horizontalCard: {
            height: 170,
            width: 118,
            margin: 5,
            borderWidth: 0,
            borderRadius: 15,
            padding: 3,
            flex: 1,
            backgroundColor: "#af3c3c",
            alignItems: "center",
        },
        verticalCard: {
            height: 170,
            width: 118,
            margin: 5,
            borderWidth: 0,
            borderRadius: 15,
            padding: 3,
            backgroundColor: "#167542",
            alignItems: "center",
        },
        horizontalContainer: {
            width: "100%",
            margin: 0,
            borderWidth: 0,
            flex: 1,
        },
        verticalContainer: {
            width: "100%",
            margin: 0,
            borderWidth: 0,
            flex: 3,
            alignSelf: "center",
        }
    })
    render() {
        return (
            <View>
                <SafeAreaView style={this.styles.horizontalContainer}>
                <FlatList
                    data={cardComponents}
                    renderItem={item => <Card cardStyle={this.styles.horizontalCard} title="Lasagna" duration="2h" persons="4"/>}
                    horizontal={true}
                    />
                </SafeAreaView>
                <SafeAreaView style={this.styles.verticalContainer}>
                    <FlatList
                        data={cardComponents}
                        renderItem={item => <Card cardStyle={this.styles.verticalCard} title="Lasagna 2" duration="4h" persons="8"/>}
                        numColumns={2}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

export default RecipeFeed;
