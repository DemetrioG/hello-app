import ExternalLink from "@/components/ExternalLink";
import Header from "@/components/Header";
import Text from "@/components/Text";
import View from "@/components/View";
import { useColor } from "@/hooks/useColor";
import { Pressable, StyleSheet } from "react-native";

const Home = () => {
  const { color, handleChange } = useColor();

  return (
    <Pressable
      style={{
        ...styles.background,
        backgroundColor: color,
      }}
      onPress={handleChange}
    >
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Hello there</Text>
      </View>
      <ExternalLink href="https://linkedin.com/in/demetriodev">
        <Text style={styles.link}>Go to Social</Text>
      </ExternalLink>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 24,
  },
  link: {
    textAlign: "center",
  },
});

export default Home;
