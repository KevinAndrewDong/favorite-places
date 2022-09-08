import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import Map from "./screens/Map";
import PlaceDetails from "./screens/PlaceDetails";
import MapForPlaceDetails from "./screens/MapForPlaceDetails";
import DeletePlace from "./screens/DeletePlace";

import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import { useEffect, useState } from "react";
import { init } from "./util/database";
import AppLoading from "expo-app-loading";

import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "最喜欢的地点",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  size={24}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "新增地点",
            }}
          />

          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={{
              title: "加载中...",
            }}
          />
          <Stack.Screen
            name="MapForPlaceDetails"
            component={MapForPlaceDetails}
            options={{
              title: "定位",
            }}
          />
          <Stack.Screen
            name="DeletePlace"
            component={DeletePlace}
            options={{
              title: "删除",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
