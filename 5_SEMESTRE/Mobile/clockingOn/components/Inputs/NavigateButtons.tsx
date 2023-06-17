import { useRouter } from "expo-router";
import { Button, Link, View } from "native-base";
import { DiceTwo, DiceThree, DiceFour, DiceOne, ArrowLeft } from "phosphor-react-native";

export function NavigateButtons() {

  const router = useRouter();

  return (
    <View  height={"100%"}  display={"flex"}>
      <View margin={"auto"}>
        <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("/")}><ArrowLeft/></Button>
          <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("two")}><DiceTwo /></Button>
          <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("three")}><DiceThree /></Button>
          <Button margin={2} backgroundColor={"#fff"} onPress={() => router.push("four")}><DiceFour /></Button>
        </View>
    </View>
  );
}