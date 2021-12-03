import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { fetchFonts } from "./shared/helpers";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Routes from "./routes";
import AppLoading from "expo-app-loading";
import store from "./store";

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("Error on fetching fonts!")}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
