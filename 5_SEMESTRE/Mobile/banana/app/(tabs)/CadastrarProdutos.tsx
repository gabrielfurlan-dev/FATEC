import firebase from '../../src/services/connectionFirebase';
import { View, Button, Text, Input, NativeBaseProvider, Spacer } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { InputPadrao } from '../../src/components/InputPadrao';
import { useRouter } from 'expo-router';

export default function CadastrarProdutos() {

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
    
    function validarTodosCamposPreenchidos(): Boolean {

      function isConvertibleToNumber(value: string): boolean {
        return !isNaN(parseFloat(value)) && isFinite(Number(value));
      }

      return nome !== '' && marca !== '' && isConvertibleToNumber(preco)
    }
    function cadastrarProduto(): Boolean {

      if (!validarTodosCamposPreenchidos()) {
        alert("Preencha todos os campos corretamente para cadastrar o produto.")
        return false;
      }

      try {

        let produtos = firebase.database().ref('produtos');
        let chave = produtos.push().key;

        produtos.child(chave == null ? "" : chave).set({
          id: chave,
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
        <View backgroundColor={'white'}>

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
            </View>

            <Spacer />

            <View>
              <Button
                onPress={() => cadastrar()}
                backgroundColor="green.500"
                rounded={10}
                accessibilityLabel="a"
                marginY={10}
              >
                Salvar
              </Button>
            </View>

          </View>

        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  )
};

