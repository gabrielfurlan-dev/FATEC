import { useRouter } from "expo-router";
import { Button, Text, Link, View } from "native-base";
import { ArrowLeft, ListDashes, HandPointing, House } from "phosphor-react-native";

export function NavigateButtons() {

  const router = useRouter();

  return (
    <View height={"100%"} display={"flex"}>
      <View margin={"auto"}>
        {/* <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("/")}><ArrowLeft /></Button> */}

        <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("ListarPontos")}>
          <View display={'flex'} flexDirection={'row'}>
            <ListDashes />
            <Text> Pontos</Text>
          </View>
        </Button>

        <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("BaterPonto")}>
          <View display={'flex'} flexDirection={'row'}>
            <HandPointing />
            <Text> Bater Ponto</Text>
          </View>
        </Button>

        <Button margin={2} backgroundColor={"amber.100"} borderRadius={100} onPress={() => router.push("PaginaInicial")}>
          <View display={'flex'} flexDirection={'row'}>
            <House />
            <Text> Início</Text>
          </View>
        </Button>

      </View>
    </View>
  );
}