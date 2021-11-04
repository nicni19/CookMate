import { StyleSheet } from "react-native";

export const styles = () =>
    StyleSheet.create({
        textfield: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
        },
        image: {},
        button: {}
    });

export const arrowBtnStyles = (arrowColor: string) =>
    StyleSheet.create({
        arrowBtn: {
            backgroundColor: "transparent",
            color: arrowColor
        }
    });
