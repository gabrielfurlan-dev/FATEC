import firebase from '../../services/connectionFirebase';
import { View, Button, Text, Input, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Keyboard,
} from 'react-native';

export default function CreateProduct() {
  const [nome, setNome] = useState("teste");
  const [marca, setMarca] = useState("teste");
  const [imagem, setImagem] = useState("teste");
  const [preco, setPreco] = useState("teste");
  const [key, setKey] = useState("");

  async function cadastrar() {

    
    if (nome !== '' && marca !== '' && preco !== '' && imagem !== '' && key !== '') {
      
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
          fontSize={24}>
          Informações de Cadastro
        </Text>

        <View
          height={screen.availHeight - 350}>
          <View
            height={'full'}
            margin={10}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
          >

            <View>
              <Text>Nome</Text>
              <Input
                marginBottom={2}
                backgroundColor={'gray.900'}
                placeholder='Nome'
                value={nome}
                onChangeText={(text) => setNome(text)}
              />

              <Text>Marca</Text>
              <Input
                marginBottom={2}
                backgroundColor={'gray.900'}
                placeholder='Marca'
                value={marca}
                onChangeText={(text) => setMarca(text)}
              />

              <Text>Imagem</Text>
              <Input
                marginBottom={2}
                backgroundColor={'gray.900'}
                placeholder='Imagem'
                value={imagem}
                onChangeText={(text) => setImagem(text)}
              />

              <Text>Preço</Text>
              <Input
                marginBottom={2}
                backgroundColor={'gray.900'}
                placeholder='Preço'
                value={preco}
                onChangeText={(text) => setPreco(text)}
              />
            </View>
            <View>
              <Button
                onPress={() => cadastrar()}
                backgroundColor="green.200"
                accessibilityLabel=""
              >
                Enviar
              </Button>
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
