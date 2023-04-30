import firebase from '../../src/services/connectionFirebase';
import { View, Button, Text, Input, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Keyboard,
} from 'react-native';
import { InputPadrao } from '../../src/components/InputPadrao';

export default function Products() {
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [key, setKey] = useState(""); 

  async function cadastrar() {


    if (nome !== '' && marca !== '' && preco !== '' && key !== '') {

      await alert("chegou aqui")

      firebase.database().ref('produtos').child(key).update({
        nome: nome, marca: marca, valor: preco
      })

      Keyboard.dismiss();
      alert('Produto Editado!');
      limparDados();
      setKey('');
      return;
    }

    let produtos = await firebase.database().ref('produtos');

    let chave = produtos.push().key;

    produtos.child(chave == null ? "" : chave).set({
      nome: nome,
      marca: marca,
      valor: preco,
    });

    alert('Produto Cadastrado!');
    limparDados();
  }

  return (
    <NativeBaseProvider>

      <SafeAreaView>
        <Text
          margin={4}
          marginTop={10}
          fontSize={16}
          color={'black'}
          bold
        >
          Informações de Cadastro
        </Text>

        <View>
          <View
            height={'full'}
            marginX={10}
            display={'flex'}
            flexDirection={'column'}
          >

            <View >
              <InputPadrao value={nome} type='text' label='Modelo' placeHolder='Calcinha preta' onChange={(e) => setNome(e)} />
              <InputPadrao value={nome} type='text' label='Marca' placeHolder='Clavin Clain' onChange={(e) => setMarca(e)} />
              <InputPadrao value={nome} type='text' label='Preço' placeHolder='57.90' onChange={(e) => setPreco(e)} />

              <View>

                <Button
                  onPress={() => cadastrar()}
                  backgroundColor="green.600"
                  rounded={10}
                  accessibilityLabel="a"
                  marginY={10}
                >
                  Enviar
                </Button>
              </View>


            </View>
          </View>
        </View>

      </SafeAreaView>
    </NativeBaseProvider>
  )
};

function limparDados() {
  throw new Error('Function not implemented.');
}
