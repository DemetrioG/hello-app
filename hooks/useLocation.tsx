import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [error, setError] = useState<string>();

  const getLocation = useCallback(async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }, [setLocation, setError]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { location, error };
};
