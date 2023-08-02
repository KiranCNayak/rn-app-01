import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useFonts } from "expo-font"

import Home from "../components/Home"
import Details from "../components/Details"

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
}

const App = () => {
  return (
    <NavigationContainer theme={theme} independent>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

