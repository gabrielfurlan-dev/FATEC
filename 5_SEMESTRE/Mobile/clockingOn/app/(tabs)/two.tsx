import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from 'native-base';
import { NavigateButtons } from '../../components/Inputs/NavigateButtons';

export default function TabTwoScreen() {
  return (
    <View backgroundColor={"blue.200"} >
      <NavigateButtons/>
    </View>
  );
}