import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { DiceFour, DiceOne, DiceThree, DiceTwo} from 'phosphor-react-native';
import Index from '..';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarShowLabel: false,

      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One'
          ,
          tabBarIcon: () => <DiceOne size={24} color='#fff' />
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: () => <DiceTwo size={24} color='#fff' />
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: 'Tab Three',
          tabBarIcon: () => <DiceThree size={24} color='#fff' />,
        }}
      />

      <Tabs.Screen
        name="four"
        options={{
          title: 'Tab Four',
          tabBarIcon: () => <DiceFour size={24} color='#fff' />,
        }}
      />
    </Tabs> 
  );
}
