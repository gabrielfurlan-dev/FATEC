import firebase from '../../src/services/connectionFirebase';
import { View, Button, Text, Input, NativeBaseProvider } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { InputPadrao } from '../../src/components/InputPadrao';
import { useRouter } from 'expo-router';

export default function Products() {

  const router = useRouter();
    
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [key, setKey] = useState("");
  
  async function cadastrar() {

    function limparDados() {
      setNome("");
      setMarca("");
      setPreco("");
    }
    function atualizarProduto() {
      firebase.database().ref('produtos').child(key).update({
        nome: nome, marca: marca, valor: preco
      })

      Keyboard.dismiss();
      alert('Produto Salvo!');
      limparDados();
      setKey('');
      return;
    }
    function validarTodosCamposPreenchidos(): Boolean {
      return nome !== '' && marca !== '' && preco !== ''
    }
    function cadastrarProduto(): Boolean {

      if (!validarTodosCamposPreenchidos()) {
        alert("Preencha todos os campos para cadastrar o produto.")
        return false;
      }

      try {

        let produtos = firebase.database().ref('produtos');
        let chave = produtos.push().key;

        produtos.child(chave == null ? "" : chave).set({
          nome: nome,
          marca: marca,
          valor: preco,
        });

        alert('Produto Cadastrado!');
        return true;

      } catch (error) {
        
        alert(`Não foi possível cadastrar o produto. erro: ${error}`);
        return false;
        
      }
    }

    if (!cadastrarProduto()) return;
    
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
              <InputPadrao value={marca} type='text' label='Marca' placeHolder='Clavin Clain' onChange={(e) => setMarca(e)} />
              <InputPadrao value={preco} type='text' label='Preço' placeHolder='57.90' onChange={(e) => setPreco(e)} />

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

