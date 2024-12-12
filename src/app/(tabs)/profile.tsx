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

const ProfileScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <View className="p-4 gap-4 h-full">
        {/* avatar picker */}
        <View>
          <Image
            source={{
              uri: image
                ? image
                : "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
            }}
            className="w-40 aspect-square self-center rounded-full bg-slate-300"
          />
          <Text
            onPress={pickImage}
            className="text-blue-500 text-center font-semibold m-5"
          >
            Change
          </Text>
        </View>

        {/* form */}
        <View className="gap-4">
          <Text className="text-gray-500 font-semibold">Username</Text>
          <TextInput
            placeholder="username"
            value={username}
            onChangeText={setUsername}
            className="border border-gray-300 p-4 rounded-md"
          />
        </View>

        {/* button */}
        <View className="mt-auto gap-4">
          <Button title="Save" onPress={() => console.log(username)} />
          <Button title="Sign Out" onPress={() => console.log(username)} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
