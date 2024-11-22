import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { AuthContext } from "../../contexts/auth";

import Header from '../../components/Header'
import { Backgrooud, ListBalance, Area, Title, List } from './styles'

import api from '../../services/api'
import { format } from "date-fns"; 

import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import HistoricoList from '../../components/HistoricoList';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance ] = useState([]);
    const [movements, setMovements] = useState([]);

    const [dateMoviment, setDateMoviment] = useState(new Date())

    useEffect(() => {
        let isActive = true;

        async function getMoviment(){
            let dateFormated = format(dateMoviment, 'dd/MM/yyyy')

            const receives = await api.get('/receives', {      /* Busca listagem */
                params:{
                    date:dateFormated
                }
            })
            
            const balance = await api.get('/balance', {
                params:{
                    date:dateFormated
                }
            })
            if(isActive){
                setMovements(receives.data)
                setListBalance(balance.data)
            }
        }

        getMoviment();

        return () => isActive = false;

    }, [isFocused])

    async function handleDelete(id){
        try{
            await api.delete('receives/delete', {
                params:{
                    item_id: id
                }
            })
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Backgrooud>
            <Header title="Minhas movimentacoes" />

        <ListBalance
            data={listBalance}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={ item => item.tag }
            renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
        />

        <Area>
            <TouchableOpacity>
                <Icon name="event" color='#121212' size={30}/>
            </TouchableOpacity>
            <Title>Ultimas movimentações</Title>
        </Area>

        <List 
            data={[movements]}
            keyExtractor={ item => item.id }
            renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDelete} /> }
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{ paddingBottom:20 }}
        />

        </Backgrooud>
    )
}