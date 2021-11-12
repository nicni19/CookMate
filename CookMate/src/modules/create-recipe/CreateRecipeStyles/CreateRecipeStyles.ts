import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        backgroundColor: "white",
        width: "100%",
        height: "100%"
    },
    textfield: {
        flex: 1,
        padding: "5%",
        backgroundColor: "#DDDDDD",
        textAlign: "center"
    },
    button: {
        padding: "5%",
        backgroundColor: "green",
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
        marginTop: "5%"
    },
    btnText: {
        fontSize: 18,
        fontWeight: "500",
        color: "white",
        textAlign: "center"
    },
    form: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "#EEEEEE",
        padding: "3%"
    },
    arrowBtn: {}
});
