import { View, Text, Image, useWindowDimensions } from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { AdvancedImage } from "cloudinary-react-native";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "./cloudinary";

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
  const { width } = useWindowDimensions();

  // cld.image returns a CloudinaryImage with the configuration set.
  const image = cld.image(post.image);
  image.resize(thumbnail().width(width).height(width));

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(
    thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face()))
  );

  return (
    <View className="bg-white">
      {/* post user Icon/image */}
      <View className="m-1 p-3 flex-row items-center gap-4">
        <AdvancedImage
          cldImg={avatar}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      {/* post image */}

      <AdvancedImage cldImg={image} className="w-full aspect-square" />

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
