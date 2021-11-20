import { StyleSheet } from "react-native";
import { theme } from "../../../shared/theme";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    textfield: {
        flex: 1,
        padding: "5%",
        backgroundColor: "#DDDDDD",
        textAlign: "left",
        borderWidth: 1,
        borderColor: "#d6d4d4",
        maxWidth: "80%",
        flexBasis: "100%",
        marginTop: "1%",
        marginBottom: "1%"
    },
    button: {
        padding: "4%",
        backgroundColor: theme.palette.primaryColor,
        alignSelf: "center",
        textAlign: "center",
        alignItems: "center",
        flexBasis: "100%",
        marginTop: "5%",
        borderRadius: 15,
        maxWidth: "40%"
    },
    btnText: {
        fontSize: 14,
        fontWeight: "300",
        color: "white",
        textAlign: "center"
    },
    form: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        padding: "3%"
    },
    secondaryBtnText: {
        fontSize: 14,
        fontWeight: "300",
        color: theme.palette.secondaryColor,
        textAlign: "center"
    }
});
