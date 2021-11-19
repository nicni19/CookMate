import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, StyleProp, ViewStyle, ImageStyle} from 'react-native';

interface ICookBookCard {
    cardStyle: StyleProp<ViewStyle>
    imageStyle: StyleProp<ImageStyle>
    title: string
    onPress: Function
}

class CookBookCard extends React.Component<ICookBookCard> {
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
            <TouchableOpacity onPress={() => this.props.onPress()} style={this.props.cardStyle}>
                <Text style={this.styles.text}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    }
}



export default CookBookCard;
