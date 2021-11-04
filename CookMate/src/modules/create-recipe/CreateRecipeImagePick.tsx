import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Platform, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { CreateRecipeFormProps } from "./CreateRecipeTypes";

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
        <View>
            <TouchableOpacity onPress={pickRecipePhotoFromLibrary}>
                <Text>Pick Recipe Image</Text>
            </TouchableOpacity>
            {currentPickedRecipeImage && (
                <Image
                    source={{ uri: currentPickedRecipeImage }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
};

export default CreateRecipeImagePick;
