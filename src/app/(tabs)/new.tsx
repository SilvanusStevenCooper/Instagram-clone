import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const CreateScreen = () => {
  const [caption, setCaption] = useState("Hello world. How are you all doing?");
  return (
    <ScrollView>
      <View className="m-4 gap-4 h-full">
        {/* image picker */}
        <View className="p-3 items-center">
          <Image
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
            }}
            className="w-80 aspect-[3/4] rounded-lg bg-slate-300"
          />

          <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
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
          <Pressable className="bg-blue-500 w-full p-3 items-center rounded-lg">
            <Text className="text-white font-semibold">share</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateScreen;
