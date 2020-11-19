import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const Login = ({navigation}) =>{
    const [email, setEmail] = useState(' ');
    const [senha, setSenha] = useState(' '); 

    const Logar = () => {

        const corpo ={
            email : email,
            senha : senha
        }

       fetch('http://192.168.4.38:5000/api/Account/login',{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
       })
       .then(response => response.json())
       .then(data => { 
            
            if(data.status != 404){

                alert('Seja bem vindo(a)');
                navigation.push('Autenticado')
            }else{
              
                alert('Email invalido');  
            }

        }) 
    }
    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Digite seu email"
                />
            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                />
            <TouchableOpacity
                    style={styles.button}
                    onPress={Logar}
            >
                    <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input : {
        width: '90%',
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginTop : 20,
        padding: 5,
        borderRadius: 6,
    },
    button : {
        backgroundColor : "black",
        width: '90%',
        padding: 5,
        borderRadius: 6,
        marginTop : 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textButton : {
       color : 'blue'
    }
  });
export default Login;