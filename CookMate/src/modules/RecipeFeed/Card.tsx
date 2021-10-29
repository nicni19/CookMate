import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ICard {
    cardStyle: StyleSheet
}

class Card extends React.Component<any,ICard> {
    constructor(props : any) {
        super(props);
    }
    render() {
        return (
            <View style={this.props.cardStyle}>
                <Image source={{uri: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg"}}/>
                <Text>Lasagna</Text>
                <Text>2h</Text>
                <Text>4 persons</Text>
            </View>
        )
    }
}

export default Card;
