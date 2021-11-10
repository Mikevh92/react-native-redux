import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { actionCreators as action } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function LoginScreen({ navigation }) {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();

  const validate = () => {
    if(name && password){
      dispatch(action.save_user({
        name: name,
        password: password
      }))
      navigation.navigate('Home')
    }else{
      console.log('error, faltan datos')
    }
  }


  return (
    <View style={styles.container}>
      <Input
        leftIcon={<Icon name="person" type="ionicon"/>}
        label="Nombre de usuario"
        placeholder="Escribe el nombre"
        onChangeText={(text)=> setName(text)}
        value={name}
      />
      <Input
        leftIcon={<Icon name="person" type="ionicon"/>}
        label="Contraseña"
        onChangeText={(text)=>setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Entrar" onPress={validate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
});
