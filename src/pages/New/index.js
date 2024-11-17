import React, {useState} from "react";

import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from "react-native";

import Header from '../../components/Header'
import RegisterTypes from "../../components/RegisterTypes";

export default function New(){
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return(
        <TouchableWithoutFeedback onPress={() =>  Keyboard.dismiss() }>
            <Background>
                <Header title='registrando' />

                <SafeAreaView style={{marginTop:14, alignItems:'center' }}>
                    <Input
                        placeholder='descrição do registro'
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text) }
                    />

                    <Input
                        placeholder='valor desejado'
                        keyboardType='numeric'
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text) }
                    />

                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>

                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}