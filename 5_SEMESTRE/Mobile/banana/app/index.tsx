import firebase from 'firebase/compat';
import { Box, Button, Center, FormControl, HStack, Heading, Link, NativeBaseProvider, Text, VStack, View } from 'native-base'
import { useNavigation, useRouter } from 'expo-router';
import { useState } from 'react';
import { InputPadrao } from '../src/components/InputPadrao';

export default function Index() {
  const router = useRouter();

  //Pular login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const user = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        router.push('PaginaInicial')
      }).catch((error) => {
        alert(`Email ou senha incorretos: ${error}`)
      })
  }

  return (
    <NativeBaseProvider>
      <View display={'flex'} alignItems={'center'} margin='auto' width={'full'} >
        <Box p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
            color: "warmGray.50"
          }}>
            Welcome
          </Heading>
          <Heading mt="1" _dark={{
            color: "warmGray.200"
          }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <View>

            <InputPadrao type="text" onChange={(e) => setEmail(e)} label="Email" value={email} />
            <InputPadrao type="password" onChange={(e) => setPassword(e)} label="Password" value={password} />

            <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>

          </View>

          <Button onPress={() => router.push('PaginaInicial')} mt="2" colorScheme="indigo"> Sign in </Button>

          <HStack mt="6" justifyContent="center">
            <Text>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
              Sign Up
            </Link>
          </HStack>

        </Box>
        <View />
      </View >
    </NativeBaseProvider>
  );
}
