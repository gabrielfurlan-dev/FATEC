import { View, Button, Text, Input, NativeBaseProvider, Spacer, Select } from 'native-base';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Keyboard } from 'react-native';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import db from '../../src/services/connectionFirebase';
import { InputPadrao } from '../../src/components/InputPadrao';
import { Punch } from './ListarPontos';

export default function CadastrarProdutos() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [local, setLocal] = useState("");
  const [tipoPonto, setTipoPonto] = useState("");
  const [horaAtual, setHoraAtual] = useState("");
  const [opcoesTipoPonto, setOpcoesTipoPonto] = useState(["Entrada", "Entrada do Almoço", "Saída do Almoço", "Saída"]);

  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString();
    setHoraAtual(currentTime);
  }, []);

  async function cadastrar() {
    function limparDados() {
      setNome("");
      setCargo("");
      setLocal("");
      setTipoPonto("");
    }

    function validarTodosCamposPreenchidos(): boolean {
      return nome !== "" && cargo !== "" && local !== "" && tipoPonto !== "";
    }

    async function cadastrarPonto(): Promise<boolean> {
      if (!validarTodosCamposPreenchidos()) {
        alert("Preencha todos os campos corretamente para registrar o ponto.");
        return false;
      }

      try {

        const punchData: Punch = {
          id: Date.now().toString(),
          nome: nome,
          cargo: cargo,
          local: local,
          tipoPonto: tipoPonto,
          horaAtual: horaAtual,
        };

        const collectionRef = collection(db, "pontos");

        const docRef = await addDoc(collectionRef, punchData);

        const docId = docRef.id;

        const docToUpdate = doc(collectionRef, docId);

        await updateDoc(docToUpdate, { id: docId });

        alert('Ponto registrado com sucesso!');
        return true;
        
      } catch (error) {
        alert(`Não foi possível registrar o ponto. Erro: ${error}`);
        return false;
      }
    }

    if (!cadastrarPonto()) return;

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
            <View>
              <InputPadrao
                value={nome}
                type='text'
                label='Nome'
                placeHolder='Nome'
                onChange={(text) => setNome(text)}
              />
              <InputPadrao
                value={cargo}
                type='text'
                label='Cargo'
                placeHolder='Cargo'
                onChange={(text) => setCargo(text)}
              />
              <InputPadrao
                value={local}
                type='text'
                label='Local'
                placeHolder='Local'
                onChange={(text) => setLocal(text)}
              />

              <Text marginTop={2}>Tipo de Registro</Text>
              <Select
                selectedValue={tipoPonto}
                placeholder="Selecione o Tipo de Ponto"
                onValueChange={(value) => setTipoPonto(value)}
              >
                {opcoesTipoPonto.map((opcao, index) => (
                  <Select.Item key={index} label={opcao} value={opcao} />
                ))}
              </Select>

              <Text marginTop={2}>Hora Atual</Text>
              <Input
                value={horaAtual}
                isDisabled={true} // Impede a edição do campo
                placeholder='Hora Atual'
              />
            </View>
            <Spacer />
            <View>
              <Button
                onPress={() => cadastrar()}
                backgroundColor="green.500"
                rounded={10}
                accessibilityLabel="Registrar Ponto"
                marginY={10}
              >
                Registrar Ponto
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};
