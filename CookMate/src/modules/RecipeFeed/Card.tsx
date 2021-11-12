import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ICard {
    cardStyle: StyleSheet
    imageUrl: string
    title: string
    duration: string
    persons?: number
}

class Card extends React.Component<any,ICard> {
    constructor(props : any) {
        super(props);
    }
    styles = StyleSheet.create({
    image: {
        width: 110,
        height: 110,
        borderRadius: 15,
        }
    })
    render() {
        return (
            <View style={this.props.cardStyle}>
                <Image style={this.styles.image} source={{uri: this.props.imageUrl}}/>
                <Text>{this.props.title}</Text>
                <Text>{this.props.duration} h</Text>
                {this.props.persons && <Text>{this.props.persons} Person(s)</Text>}
            </View>
        )
    }
}



export default Card;
