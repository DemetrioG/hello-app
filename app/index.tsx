import Text from "@/components/Text";
import { useColor } from "@/hooks/useColor";
import { Pressable } from "react-native";

const Home = () => {
  const { color, handleChange } = useColor();

  return (
    <Pressable
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color,
      }}
      onPress={handleChange}
    >
      <Text style={{ fontSize: 20 }}>Hello there</Text>
    </Pressable>
  );
};

export default Home;
