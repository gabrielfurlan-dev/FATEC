import React, { useEffect, useState } from 'react';
import { View, Text, NativeBaseProvider, FlatList, Button, Spacer, Flex } from 'native-base';
import { PencilSimple, TrashSimple } from 'phosphor-react-native';
import { InputPadrao } from '../../src/components/InputPadrao';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../../src/services/connectionFirebase';
import { useFocusEffect } from 'expo-router';

export interface Punch {
  id: string;
  nome: string;
  cargo: string;
  local: string;
  tipoPonto: string;
  horaAtual: string;
}

export default function ListarPontos() {
  const [punches, setPunches] = useState<Punch[]>([]);
  const [editingId, setEditingId] = useState("");
  const [idEdit, setIdEdit] = useState("");
  const [nomeEdit, setNomeEdit] = useState("");
  const [cargoEdit, setCargoEdit] = useState("");
  const [localEdit, setLocalEdit] = useState("");
  const [tipoPontoEdit, setTipoPontoEdit] = useState("");
  const [horaAtualEdit, setHoraAtualEdit] = useState("");

  useEffect(() => {
    getPunches();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getPunches();
    }, [])
  );

  const getPunches = async () => {
    try {
      const reportsCollection = collection(db, "pontos");
      const snapshot = await getDocs(reportsCollection);
      const punchesData = snapshot.docs.map((doc) => {
        const punch = { id: doc.id, ...doc.data() } as Punch;
        return punch;
      });
      setPunches(punchesData);
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  function validarTodosCamposPreenchidos(): boolean {
    return (
      nomeEdit !== '' &&
      cargoEdit !== '' &&
      localEdit !== '' &&
      tipoPontoEdit !== '' &&
      horaAtualEdit !== ''
    );
  }

  async function atualizarPonto(item: Punch) {
    if (!validarTodosCamposPreenchidos()) {
      alert("Preencha todos os campos corretamente para atualizar o ponto.");
      return false;
    }

    try {
      const docRef = doc(db, "pontos", idEdit);

      await updateDoc(docRef, {
        nome: nomeEdit,
        cargo: cargoEdit,
        local: localEdit,
        tipoPonto: tipoPontoEdit,
        horaAtual: horaAtualEdit
      });
      getPunches();
      alert('Ponto Atualizado!');
      return true;
    } catch (error) {
      alert(`Não foi possível atualizar o ponto. Erro: ${error}`);
      return false;
    }
  }

  async function handleDelete(punchId: string) {
    try {
      const docRef = doc(db, 'pontos', punchId);
      await deleteDoc(docRef);
      const filteredPunches = punches.filter((item) => item.id !== punchId);
      setPunches(filteredPunches);
      alert('Ponto excluído!');
    } catch (error) {
      alert(`Não foi possível excluir o ponto. Erro: ${error}`);
    }
  }

  function limparCampos(nome: string, cargo: string, local: string, tipoPonto: string, horaAtual: string) {
    setNomeEdit(nome);
    setCargoEdit(cargo);
    setLocalEdit(local);
    setTipoPontoEdit(tipoPonto);
    setHoraAtualEdit(horaAtual);
  }

  function cardPunch(item: Punch) {
    return (
      <View display={'flex'} flexDirection={'row'} alignItems={'center'}>
        <View>
          <Text fontSize={12}>{item.cargo}</Text>
          <Text fontSize={22}>{item.nome}</Text>
          <Text>{item.local}</Text>
          <Text>{item.tipoPonto}</Text>
          <Text>{item.horaAtual}</Text>
        </View>
        <Spacer />
        <View height={12} display={'flex'} flexDirection={'row'}>
          <Button
            borderRadius={10}
            backgroundColor={'gray.300'}
            onPress={() => {
              setEditingId(item.id);
              setIdEdit(item.id);
              setNomeEdit(item.nome);
              setCargoEdit(item.cargo);
              setLocalEdit(item.local);
              setTipoPontoEdit(item.tipoPonto);
              setHoraAtualEdit(item.horaAtual);
            }}
            marginRight={2}
          >
            <PencilSimple size={16} />
          </Button>
          <Button
            borderRadius={10}
            backgroundColor={'red.500'}
            onPress={() => handleDelete(item.id)}
          >
            <TrashSimple color='white' size={16} />
          </Button>
        </View>
      </View>
    );
  }

  function cardEditPunch(item: Punch) {
    return (
      <View width={'full'} marginY={4}>
        <View display={'flex'} flexDirection={'row'}>
          <Text marginBottom={4}>Edição</Text>
          <Spacer />
          <Button
            borderRadius={10}
            backgroundColor={'white'}
            onPress={() => {
              setEditingId("");
              limparCampos(item.nome, item.cargo, item.local, item.tipoPonto, item.horaAtual);
            }}
          >
            <Text>X</Text>
          </Button>
        </View>
        <View marginBottom={10}>
          <InputPadrao label='Nome' onChange={setNomeEdit} type='text' value={nomeEdit} />
          <InputPadrao label='Cargo' onChange={setCargoEdit} type='text' value={cargoEdit} />
          <InputPadrao label='Local' onChange={setLocalEdit} type='text' value={localEdit} />
          <InputPadrao label='Tipo de Ponto' onChange={setTipoPontoEdit} type='text' value={tipoPontoEdit} />
          <InputPadrao label='Hora Atual' onChange={setHoraAtualEdit} type='text' value={horaAtualEdit} />
        </View>
        <Flex flexDirection={'row'}>
          <Button
            borderRadius={10}
            backgroundColor={'white'}
            onPress={() => {
              setEditingId("");
              limparCampos(item.nome, item.cargo, item.local, item.tipoPonto, item.horaAtual);
            }}
          >
            <Text>Cancelar</Text>
          </Button>
          <Spacer />
          <Button
            borderRadius={10}
            width={100}
            backgroundColor={'green.500'}
            onPress={() => {
              setEditingId("");
              atualizarPonto(item);
              limparCampos(item.nome, item.cargo, item.local, item.tipoPonto, item.horaAtual);
            }}
          >
            <Text color={'white'}>Salvar</Text>
          </Button>
        </Flex>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Punch }) => (
    <View
      margin={4}
      backgroundColor={'white'}
      width={'auto'}
      borderRadius={10}
    >
      <Flex
        marginX={6}
        padding={2}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        {editingId !== item.id ? cardPunch(item) : cardEditPunch(item)}
      </Flex>
    </View>
  );

  return (
    <NativeBaseProvider>
      <FlatList
        data={punches}
        renderItem={renderItem}
        keyExtractor={(item) => { return item.id }}
      />
    </NativeBaseProvider>
  );
}
