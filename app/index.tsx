import { Text } from "@/components/Text";
import { View } from "@/components/View";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Hello!</Text>
    </View>
  );
}
