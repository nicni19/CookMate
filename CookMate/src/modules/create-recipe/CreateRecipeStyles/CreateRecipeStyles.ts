import { StyleSheet } from "react-native";
import { theme } from "../../../shared/theme";

export const styles = StyleSheet.create({
    root: {
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
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#d6d4d4"
    },
    button: {
        padding: "5%",
        backgroundColor: theme.palette.secondaryColor,
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
        backgroundColor: theme.palette.backgroundColor,
        padding: "3%"
    },
    imagePicker: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.backgroundColor,
        maxHeight: "50%",
        width: "70%",
        borderRadius: 6
    },
    recipeImage: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    list: {
        width: "100%", 
        maxHeight: "60%", 
        margin: "10%"
    },
    listItem: {
        fontWeight: "200",
        padding: "5%",
        backgroundColor: theme.palette.backgroundColor,
        textAlign: "center",
        minWidth: "90%",
        marginBottom: "2%",
        alignSelf: "auto",
        borderWidth: 1,
        borderColor: "#d6d4d4"
    }
});
