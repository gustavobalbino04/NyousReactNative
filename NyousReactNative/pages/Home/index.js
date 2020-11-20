import React, { useState, useEffect, }from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useEffect, useState } from 'react';

const Home = () => {

    const [token, setToken] = useState('');
    const [eventos, setEventos] = useState([]);

    useEffect(()=>{
        Listar();
    }, [])

    const Listar = () =>{
        fetch( 'http://192.168.4.38:5000/api/eventos',{
            method : 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setEventos(data.data)
        })
        .catch(err => console.log(err));
    }

    const renderItem = (evento) => {
        return (
            <ItemEvento 
                nome={evento.item.nome} 
                imagem={evento.item.urlImagem}
                link={evento.item.link} />
        )
    }   

    return(
        <View>
            <Text>Home</Text>
            <FlatList 
                data={eventos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
export default Home;