import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../src/services/constants/Colors';
import { House, ListDashes, Package } from 'phosphor-react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="ProductListScreen"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <ListDashes color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="Home"
        options={{
          title: 'Inicio2',
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="products"
        options={{
          title: 'Cadastrar Produto',
          tabBarIcon: ({ color }) => <Package color={color} />,
        }}
      />
    </Tabs>
  );
}
