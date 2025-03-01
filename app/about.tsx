import { useRouter } from "expo-router";
import { Fragment } from "react";
import { Button, Text, View } from "react-native";

export default function AboutScreen(){
    const router = useRouter();
    return(
    <Fragment>

        <View>
            <Text>
                Página Sobre
            </Text>
            <Button
            title="Voltar"
            onPress={() => router.back()}
            />
        </View>

        <Text>Olá</Text>
    </Fragment>
    )
}