import React, { useEffect, useState } from 'react';
import { View, Text, NativeBaseProvider, FlatList, Button, Spacer, Flex } from 'native-base'
import firebase from '../../src/services/connectionFirebase';
import { PencilSimple, TrashSimple } from 'phosphor-react-native';

interface Product {
  id: string;
  nome: string;
  marca: string;
  preco: number;
}

function getFakeProducts() {
  const productsData: Product[] = []

  productsData.push({ id: '1', nome: 'Calça', marca: 'TOMMY', preco: 52 })
  productsData.push({ id: '2', nome: 'Camiseta', marca: 'Lacoste', preco: 52 })
  productsData.push({ id: '3', nome: 'Meias Cano Alto', marca: 'Nike', preco: 52 })

  return productsData;

}

const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []); ''

  const fetchProducts = async () => {
    try {

      // Se o firebase funcionar usa esse trecho de codigo
      // const snapshot = await firebase.database().ref('products').once('value');
      // const productsData = snapshot.val();

      let productsData = getFakeProducts();

      if (productsData) {
        const productsArray = Object.keys(productsData).map((key) => ({
          id: key,
          ...productsData[key],
        })) as Product[];
        setProducts(productsArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View margin={4} backgroundColor={'white'} width={'auto'}  borderRadius={10}  >
      <Flex marginX={6} padding={2} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>

        <View>
          <Text fontSize={12}>{item.marca}</Text>
          <Text fontSize={22}>{item.nome}</Text>
          <Text>R$: {item.preco.toFixed(2)}</Text>
        </View>

        <View height={12} display={'flex'} flexDirection={'row'}>
          <Button borderRadius={10} backgroundColor={'gray.300'} onPress={() => handleEdit(item.id)}><PencilSimple size={16}/></Button>
          <Spacer size={2}/>
          <Button borderRadius={10} backgroundColor={'red.500'} onPress={() => handleDelete(item.id)}><TrashSimple color='white' size={16} /></Button>
        </View>

      </Flex>
    </View>
  );

  const handleEdit = (productId: string) => {
    // Lógica para editar um produto específico
  };

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
