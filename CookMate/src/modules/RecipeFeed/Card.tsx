import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface ICard {
    cardStyle: StyleSheet
    imageStyle: StyleSheet
    imageUrl: string
    title: string
    duration: string
    persons?: number
    author?: string
}

class Card extends React.Component<any,ICard> {
    constructor(props : any) {
        super(props);
    }
    styles = StyleSheet.create({
    text: {
        marginLeft: "5%",
        fontFamily: "Roboto",
    }
    })
    render() {
        return (
            <View style={this.props.cardStyle}>
                <Image style={this.props.imageStyle} source={{uri: this.props.imageUrl}}/>
                <Text style={this.styles.text}>{this.props.title}</Text>
                {this.props.author && <Text style={this.styles.text}>by: {this.props.author}</Text>}
                {this.props.duration && <Text style={this.styles.text}>{this.props.duration} h</Text>}
                {this.props.persons && <Text style={this.styles.text}>{this.props.persons} Person(s)</Text>}
            </View>
        )
    }
}



export default Card;
