import posts from "@/assets/data/post.json";
import PostListItems from "@/src/components/postListItems";
import { FlatList, View } from "react-native";

const FeedScreen = () => {
  const post1 = posts[0];

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItems post={item} />}
      contentContainerStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );

  // return (
  //   <View>
  //     <PostListItems post={posts[0]} />
  //     <PostListItems post={posts[1]} />
  //   </View>
  // );
};

export default FeedScreen;
