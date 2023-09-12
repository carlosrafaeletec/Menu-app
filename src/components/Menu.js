import React from "react";
import { View, Text, Button } from "react-native";

const Menu = ({ navigation }) =>{
    return(
        <View>
            <Text>Menu</Text>
            <Button title="Página 01" onPress={() => navigation.navigate('Tela1')} />
            <Button title="Página 02" onPress={() => navigation.navigate('Tela2')} />
        </View>
    );
};

export default Menu;