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
    },
    button: {
        padding: "5%",
        backgroundColor: theme.palette.secondaryColor,
        alignSelf: "center",
        textAlign: "center",
        flexBasis: "100%",
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
        width: "90%", 
        maxHeight: "60%", 
        margin: "5%"
    },
    listItem: {
        fontSize: 17,
        fontWeight: "200"
    },
    listItemView: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: theme.palette.backgroundColor,
        textAlign: "left",
        minWidth: "90%",
        maxWidth: "100%",
        marginBottom: "2%",
        borderWidth: 1,
        borderColor: "#d6d4d4",
        padding: "5%"
    },
    informationForm: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: theme.palette.backgroundColor,
        padding: "10%",
        width: "100%"
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
        height: "20%"
      },
      modalViewCloseBtn: {
          color: "red",
          fontWeight: "500",
          paddingTop: "5%",
          marginTop: "5%"
      },
      modalViewTextfieldIcon: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
      },
      modalViewTextfield: {
        flex: 1,
        padding: "5%",
        backgroundColor: "#DDDDDD",
        textAlign: "left",
        borderWidth: 1,
        borderColor: "#d6d4d4",
        width: "90%",
        height: "100%"
    }
});
