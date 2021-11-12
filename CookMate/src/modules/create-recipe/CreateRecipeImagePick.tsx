import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CreateRecipeFormProps } from "./CreateRecipeTypes";
import { styles } from "./CreateRecipeStyles/CreateRecipeStyles";
import { FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../shared/theme";

const CreateRecipeImagePick: React.FC<CreateRecipeFormProps> = ({ formik }) => {
    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const { status } =
                    await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert(
                        "Sorry, we need camera roll permissions to make this work!"
                    );
                }
            }
        })();
    }, []);

    const pickRecipePhotoFromLibrary = async () => {
        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!pickedImage.cancelled) {
            formik.setFieldValue("createRecipeImagePick", pickedImage.uri);
        }
    };

    const currentPickedRecipeImage = formik.values.createRecipeImagePick;

    return (
        <TouchableOpacity
            style={styles.imagePicker}
            onPress={pickRecipePhotoFromLibrary}
        >
            <View>
                <FontAwesome5
                    name="image"
                    color={theme.palette.secondaryColor}
                    size={40}
                />

                {currentPickedRecipeImage && (
                    <Image
                        source={{ uri: currentPickedRecipeImage }}
                        style={styles.recipeImage}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default CreateRecipeImagePick;
