import React, { useEffect, useState } from 'react';
import { Button, NativeBaseProvider, ScrollView, Text, View } from 'native-base';
import { HandPointing, List, Package } from 'phosphor-react-native';
import { IconeClima } from '../../src/components/IconeClima';
import { NavigateButtons } from '../components/NavigateButtons';

export default function PaginaInicial() {
  const [dadosClima, setDadosClima] = useState(null);


  useEffect(() => {
  }, []);

  return (
    <NativeBaseProvider>
      <View backgroundColor={'white'}>
        <View display={'flex'} height={'full'} width={'full'} flexDirection={'column'}>
          <View margin={10}>
            <View display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} margin={2}>
              <HandPointing size={38} />
              <Text fontSize={26} marginLeft={4}>Bem Vindo ao <Text bold>ClockingOn</Text></Text>
            </View>

            <NavigateButtons/>

          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
