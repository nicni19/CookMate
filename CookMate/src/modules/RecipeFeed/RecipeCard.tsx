import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ICard {
    cardStyle: StyleSheet
    imageStyle: StyleSheet
    imageUrl: string
    title: string
    duration: string
    persons: number
}

class RecipeCard extends React.Component<any,ICard> {
    constructor(props : any) {
        super(props);
    }
    styles = StyleSheet.create({
    text: {
        marginLeft: "5%",
        fontFamily: "Roboto"
    }
    })
    render() {
        return (
            <View style={this.props.cardStyle}>
                <Image style={this.props.imageStyle} source={{uri: this.props.imageUrl}}/>
                <Text style={this.styles.text}>{this.props.title}</Text>
                <Text style={this.styles.text}>{this.props.duration} h</Text>
                <Text style={this.styles.text}>{this.props.persons} Person(s)</Text>
            </View>
        )
    }
}



export default RecipeCard;
