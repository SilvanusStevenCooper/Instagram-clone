import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Button from "@/src/components/button";

const CreateScreen = () => {
  const [caption, setCaption] = useState("Hello world. How are you all doing?");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View className="m-4 gap-4 h-full">
        {/* image picker */}
        <View className="p-3 items-center">
          <Image
            source={{
              uri: image
                ? image
                : "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
            }}
            className="w-80 aspect-[3/4] rounded-lg bg-slate-300"
          />

          <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
            Change
          </Text>
        </View>

        {/* caption text input */}

        <TextInput
          value={caption}
          onChangeText={(newVal) => setCaption(newVal)}
          placeholder="What's on your mind"
          className="w-full p-3 border border-slate-200"
        />

        {/* upload button */}

        <View className="mt-auto w-full">
          <Button title={"Share"} onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateScreen;
