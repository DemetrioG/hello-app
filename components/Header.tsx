import { StyleSheet } from "react-native";
import Text from "./Text";
import View from "./View";
import { useWeather } from "@/hooks/useWeather";

const Header = () => {
  const { currentCondition, currentTemperature } = useWeather();

  return (
    <View style={styles.container}>
      <Text>{currentCondition}</Text>
      <Text>{currentTemperature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.8,
  },
});

export default Header;
