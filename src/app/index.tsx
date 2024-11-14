import { Link } from "expo-router";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text className="">Home</Text>
      <Link href={"/about"}>About Us</Link>
      <Link href={"/(tabs)"}>Feeds</Link>
    </View>
  );
};

export default Home;
