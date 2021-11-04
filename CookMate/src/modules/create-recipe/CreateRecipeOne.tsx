import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Platform, Image } from "react-native";
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
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={pickRecipePhotoFromLibrary}>
                <Text>Pick Recipe Image</Text>
            </TouchableOpacity>
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
}

export default CreateRecipeOne;
