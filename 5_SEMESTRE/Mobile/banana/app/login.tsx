import { Text, TextInput } from "react-native";
import { Button, Box, Center, FormControl, Heading, HStack, Link, VStack, NativeBaseProvider } from "native-base";
import { useNavigation } from "expo-router";
import { useState } from "react";
import firebase from "../src/services/connectionFirebase";

export default function Login() {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  function handleLogin() {
    if (type == "login") {
      // const user = firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then((user) => {

      //     console.log(`logado com sucesso.\nUsuário: ${user}`)

      //   }).catch((error) => {
      //     alert(`Falha ao obter o login: ${error}`)
      //   })
      navigation.navigate("product")
    }
  }

  type props = {
    changeStatus: (uuid: String) => void;
  }

  return (
    <NativeBaseProvider>
      <FormControl isRequired>
        <Center w="100%" h="200%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
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

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Email ID</FormControl.Label>
                <TextInput onChange={(e) => setEmail(e)} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <TextInput
                  onChange={(e) => setPassword(e)}
                  secureTextEntry
                />
                <Link _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500"
                }} alignSelf="flex-end" mt="1">
                  Forget Password?
                </Link>
              </FormControl>
              <Button
                onPress={handleLogin}
                mt="2" colorScheme="indigo"
              >
                Sign in
              </Button>
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
            </VStack>
          </Box>
        </Center>
      </FormControl >
    </NativeBaseProvider>
  );
}