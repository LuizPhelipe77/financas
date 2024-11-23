import React from "react";
import { View, Text, Image } from "react-native";

import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'

export default function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props} >
            <View style={{ alignItems:'center', justifyContent:'center', marginTop: 25}}>
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{width: 90, height: 90}}
                    resizeMode="contain"
                />
                <Text style={{fontSize: 18, marginTop: 14}}>
                    Bem-Vindo
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold', marginBottom:15, paddingHorizontal:20}}>
                    Luiz phelipe
                </Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}