// import { Text, SafeAreaView } from "react-native";

import { Redirect } from "expo-router";
import { Text } from "react-native";

const Home = () => {
  return <Redirect href="./(auth)/welcome" />;
};

export default Home;