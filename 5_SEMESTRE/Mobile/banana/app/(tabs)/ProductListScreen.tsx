import React, { ReactElement, useEffect, useState } from 'react';
import { View, Text, NativeBaseProvider, FlatList, Button, Spacer, Flex, Input } from 'native-base'
import firebase from '../../src/services/connectionFirebase';
import { PencilSimple, TrashSimple, X, XCircle } from 'phosphor-react-native';
import { InputPadrao } from '../../src/components/InputPadrao';

interface Product {
  id: string;
  nome: string;
  marca: string;
  preco: string;
}

const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editandoId, setEditandoId] = useState("");

  const [idEdit, setIdEdit] = useState("");
  const [nomeEdit, setNameEdit] = useState("");
  const [marcaEdit, setMarcaEdit] = useState("");
  const [precoEdit, setPrecoEdit] = useState("");

  useEffect(() => {
    async function getProducts() {
      await firebase
        .database()
        .ref("produtos")
        .on("value", (snapshot) => {
          setProducts([]);
          snapshot.forEach((chilItem) => {
            let data = {
              id: chilItem.val().id,
              nome: chilItem.val().nome,
              marca: chilItem.val().marca,
              preco: chilItem.val().valor,
            };
            setProducts((oldArray) => [...oldArray, data].reverse());
          });
        });
    }
    getProducts();
  }, []);

  function validarTodosCamposPreenchidos(): Boolean {

    function isConvertibleToNumber(value: string): boolean {
      return !isNaN(parseFloat(value)) && isFinite(Number(value));
    }

    return nomeEdit !== '' && marcaEdit !== '' && isConvertibleToNumber(precoEdit)
  }

  function AtualizarProduto(item: Product): Boolean {

    if (!validarTodosCamposPreenchidos()) {
      alert("Preencha todos os campos corretamente para cadastrar o produto.")
      return false;
    }

    try {
      firebase.database().ref("produtos").child(item.id).update({
        nome: nomeEdit,
        marca: marcaEdit,
        valor: precoEdit,
      });
      alert('Produto Atualizado!');
      return true;

    } catch (error) {

      alert(`Não foi possível atualizar o produto. erro: ${error}`);
      return false;

    }
  }

  function cardProduto(item: Product): ReactElement {
    return (
      <View display={'flex'} flexDirection={'row'} alignItems={'center'}>

        <View>
          <Text fontSize={12}>{item.marca}</Text>
          <Text fontSize={22}>{item.nome}</Text>
          <Text>R$: {item.preco}</Text>
        </View>

        <Spacer />

        <View height={12} display={'flex'} flexDirection={'row'}>

          <Button borderRadius={10} backgroundColor={'gray.300'} onPress={() => {
            setEditandoId(item.id);

            setIdEdit(item.id)
            setNameEdit(item.nome);
            setMarcaEdit(item.marca);
            setPrecoEdit(String(item.preco));
          }} marginRight={2} >
            <PencilSimple size={16} />
          </Button>

          <Button borderRadius={10} backgroundColor={'red.500'} onPress={() => handleDelete(item.id)}>
            <TrashSimple color='white' size={16} />
          </Button>

        </View>

      </View>
    );
  }

  function cardEditProduto(item: Product): ReactElement {
    return (
      <View width={"full"} marginY={4}>

        <Text marginBottom={4}>Edição</Text>

        <View marginBottom={10}>
          <InputPadrao label='Nome' onChange={setNameEdit} type='text' value={nomeEdit} />
          <InputPadrao label='Email' onChange={setMarcaEdit} type='text' value={marcaEdit} />
          <InputPadrao label='Preço' onChange={setPrecoEdit} type='text' value={String(precoEdit)} />
        </View>

        <Flex flexDirection={'row'}>
          <Button
            borderRadius={10}
            backgroundColor={'green.500'}
            onPress={() => {
              setEditandoId("");
              AtualizarProduto(item)
              LimpaCampos(item.nome, item.marca, item.preco);
            }}
          >
            <Text color={'white'}>Salvar</Text>
          </Button>

          <Spacer />

          <Button
            borderRadius={10}
            backgroundColor={'gray.300'}
            onPress={() => {
              setEditandoId("");
              LimpaCampos(item.nome, item.marca, item.preco);
            }}
          >
            <XCircle size={16} />
          </Button>
        </Flex>
      </View>
    );
  }

  function LimpaCampos(nome: string, marca: string, preco: string) {
    setNameEdit(nome)
    setMarcaEdit(marca)
    setPrecoEdit(preco)
  }

  const renderItem = ({ item }: { item: Product }) => (

    <View margin={4} backgroundColor={'white'} width={'auto'} borderRadius={10}  >
      <Flex marginX={6} padding={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
        {(editandoId !== item.id) ? cardProduto(item) : cardEditProduto(item)}
      </Flex >
    </View >
  );

  const handleDelete = (productId: string) => {
    // Lógica para excluir um produto específico
  };

  return (
    <NativeBaseProvider>
      <View>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </NativeBaseProvider>
  );

};

export default ProductListScreen;