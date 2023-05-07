import { NativeBaseProvider, Text, View, Image, Container, Spacer } from 'native-base';
import { Package } from 'phosphor-react-native';
import { ImageBackground } from 'react-native';

export default function PaginaInicial() {
  return (
    <NativeBaseProvider>
      <View backgroundColor={'white'}>
        <View display={'flex'} height={'full'} width={'full'} flexDirection={'column-reverse'}>

          <View margin={10}>
          <View display={'flex'} flexDirection={'row'} margin={2}>
              <Package size={38} />
              <Text fontSize={26} marginLeft={2}>Bem Vindo</Text>
            </View>

            <Text marginLeft={2} width={'auto'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam voluptate nesciunt ratione? Animi pariatur aspernatur quas minus, itaque in quod dignissimos est aliquid. Modi optio officiis nihil laboriosam non.
            </Text>
          </View>

        </View>

      </View>
    </NativeBaseProvider>
  );
}
