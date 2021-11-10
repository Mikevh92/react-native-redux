import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as action } from '../redux/actions';

export default function HomeScreen(props) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(user)
  return (
    <View>
      <Text> { user.name } </Text>

      <Button title="actualizar" onPress={()=>{
        dispatch(action.save_user({
          name: 'julian arias',
          pasword: '123'
        }))
      }}/>
    </View>
  );
}
