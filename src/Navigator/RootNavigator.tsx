import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GalleryNavigator } from "./GalleryNavigator";
import { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export const RootNavigator = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  }, []);
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <GalleryNavigator />
    </NavigationContainer>
  );
};
