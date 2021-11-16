import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ICookBookCard {
    cardStyle: StyleSheet
    imageStyle: StyleSheet
    imageUrl: string
    title: string
    author: string
}

class CookBookCard extends React.Component<any,ICookBookCard> {
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
                <Text style={this.styles.text}>by: {this.props.author}</Text>
            </View>
        )
    }
}



export default CookBookCard;
