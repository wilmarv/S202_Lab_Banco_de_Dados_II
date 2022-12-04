import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Button from "../componentes/Button";
import Card from "../componentes/Card";
import Container from "../componentes/Container";
import ContainerGradient from "../componentes/ContainerGradient";
import Texto from "../componentes/Texto";
import Usuario from "../model/Usuario";
import ConnectDb from "../neo4J/ConnectDb";

async function finAllUsuarios(setUsuario: any) {
    const usuarios = new ConnectDb();
    setUsuario([]);
    const arrayUsuario: Array<Usuario> = await usuarios.findAllUsuarios();
    setUsuario(arrayUsuario);
}

function Home() {

    const [listUsuario, setUsuario] = useState<Array<Usuario>>([]);
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.isFocused())
            finAllUsuarios(setUsuario);
    }, [navigation]);

    return (
        <ContainerGradient>
            <Container>
                <Texto style={styles.title}> Usuários Cadastrados</Texto>
                <FlatList
                    data={listUsuario}
                    renderItem={({ item }) => <Card usuario={item} onPress={() => navigation.navigate("Profile", item)} />}
                    keyExtractor={(usuario) => usuario.id.toString() as string}
                />
                <Button style={styles.button} title={"Novo Usuário"} onPress={() => navigation.navigate("NewProfile")} />
            </Container>
        </ContainerGradient>
    );
}
export default Home;
const styles = StyleSheet.create({
    title: {
        color: "rgb(150, 150, 150)",
        fontSize: 15,
        margin: 20
    },
    button: {
        alignSelf: "flex-end",
        margin: 20
    }
});