import { Link } from "expo-router";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>About Us</Link>
      <Link href={"/(tabs)"}>Feeds</Link>
      <Link href={"/(tabs)/settings"}>Settings</Link>
    </View>
  );
};

export default Home;
