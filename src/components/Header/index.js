import React from "react";
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from "@react-navigation/native"; 

import {Container, Title, ButtonMenu} from './styles'

export default function Header({title}){
    const navigation = useNavigation();
    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer() }>
                <Ionicons name='menu' size={35} color='#121212' />
            </ButtonMenu>

            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </Container>
    )
}