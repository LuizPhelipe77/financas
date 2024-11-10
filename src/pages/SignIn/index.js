import React, {useState, useContext} from "react";
import { Platform } from "react-native";
import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from './styles'

import { useNavigation } from "@react-navigation/native"; 

import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
    const navigation = useNavigation();
    const {signIn, loadingAuth} = useContext(AuthContext)

    const [email, setEmail ] = useState('');
    const [password, setPasword ] = useState('');

    function handleLogin(){
        signIn(email, password);
    }

    return(
        <Background>

            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo 
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input 
                        placeholder='Digite seu email'
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={ (text) => setPasword(text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.7} onPress={handleLogin}> 
                    <SubmitText>
                        Acessar
                    </SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp') }>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>
    )
}