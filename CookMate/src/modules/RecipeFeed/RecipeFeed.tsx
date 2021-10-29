import React, {Component} from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import Card from './Card';

const DATA = ['TestCard', 'TestCard2']
const cardComponents = DATA.map(type => <Card></Card>)

class RecipeFeed extends Component {
    styles = StyleSheet.create({
        container: {
            margin: 50,
        }
    })
    render() {
        return (
            <View>
                <SafeAreaView style={this.styles.container}>
                <FlatList
                    data={cardComponents}
                    renderItem={item => <Card cardStyle={this.styles.container}/>}
                    horizontal={true}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

export default RecipeFeed;