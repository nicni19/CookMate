import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

function CreateRecipeOne() {
    const [image, setImage] = useState<string | null>(null);

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
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={pickRecipePhotoFromLibrary}>
                <Text>Pick Recipe Image</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreateRecipeOne;
