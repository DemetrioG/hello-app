import { useEffect } from "react";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const useFont = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return { loaded };
};
