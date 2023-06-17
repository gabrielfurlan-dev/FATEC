import { View } from "native-base";
import { Cloud, CloudFog, CloudLightning, CloudSun, Sun, SunDim } from "phosphor-react-native";

type props = {
    clima: String,
    size: number
}

export function IconeClima({ clima, size }: props) {

    function retornaIcone(clima) {
        if (clima == "Parcialmente nublado") return <CloudSun size={size} />
        if (clima == "Ensolarado") return <Sun size={size} />
        if (clima == "Chuva leve") return <CloudLightning size={size} />
        if (clima == "Céu limpo") return <SunDim size={size} />
        if (clima == "Nublado") return <CloudFog size={size} />
    }

    return (
        <View>
            {retornaIcone(clima)}
        </View>
    );

}