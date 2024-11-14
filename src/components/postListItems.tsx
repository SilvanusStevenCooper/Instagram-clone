import { View, Text, Image } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

interface PostListItemsProps {
  post: {
    id: string;
    image: string;
    image_url: string;
    caption: string;
    user: {
      id: string;
      avatar_url: string;
      image_url: string;
      username: string;
    };
  };
}

const PostListItems = ({ post }: PostListItemsProps) => {
  return (
    <View className="bg-white">
      {/* post user Icon/image */}
      <View className="m-1 p-3 flex-row items-center gap-4">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      {/* post image */}
      <Image
        source={{ uri: post.image_url }}
        className="w-full aspect-square"
      />

      {/*post footer */}
      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubbles-outline" size={20} />
        <Feather name="send" size={20} />
        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
};

export default PostListItems;
