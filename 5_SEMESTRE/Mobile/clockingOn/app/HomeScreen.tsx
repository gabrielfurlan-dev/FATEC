import React from 'react';
import { View, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function HomeScreen(){
  const handleRegisterPunch = async () => {
    try {
    //   const currentUser = firebase.auth().currentUser;
    //   if (currentUser) {
    //     const db = firebase.firestore();
    //     const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    //     await db.collection('punches').add({
    //       userId: currentUser.uid,
    //       timestamp: timestamp,
    //     });

        Alert.alert('Registro de ponto', 'Ponto registrado com sucesso!');
    //   }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao registrar ponto');
    }
  };

  return (
    <View>
      <Button title="Registrar Ponto" onPress={handleRegisterPunch} />
    </View>
  );
};
