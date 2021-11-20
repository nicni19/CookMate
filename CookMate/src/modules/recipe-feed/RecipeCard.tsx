import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StyleProp,
    ViewStyle,
    ImageStyle
} from "react-native";

interface ICard {
    cardStyle: StyleProp<ViewStyle>;
    imageStyle: StyleProp<ImageStyle>;
    imageUrl: string;
    title: string;
    duration: number;
    persons: number;
    onPress: Function;
}

class RecipeCard extends React.Component<ICard> {
    constructor(props: any) {
        super(props);
    }
    styles = StyleSheet.create({
        text: {
            marginLeft: "5%",
            fontFamily: "Roboto"
        }
    });
    render() {
        return (
            <TouchableOpacity
                style={this.props.cardStyle}
                onPress={() => this.props.onPress()}
            >
                <Image
                    style={this.props.imageStyle}
                    source={{ uri: this.props.imageUrl }}
                />
                <Text style={this.styles.text}>{this.props.title}</Text>
                <Text style={this.styles.text}>{this.props.duration} h</Text>
                <Text style={this.styles.text}>
                    {this.props.persons} Person(s)
                </Text>
            </TouchableOpacity>
        );
    }
}

export default RecipeCard;
