import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Tela1 from "./src/screens/Tela1";
import Tela2 from "./src/screens/Tela2";
import Menu from "./src/components/Menu";

const Drawer = createDrawerNavigator;

const App = () =>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela1" drawerContent={(props) => <Menu {...props}/>}>
        <Drawer.Screen name="Tela1" component={ Tela1 } />
        <Drawer.Screen name="Tela1" component={ Tela2 } />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}