import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Button from "../componentes/Button";
import Card from "../componentes/Card";
import Container from "../componentes/Container";
import ContainerGradient from "../componentes/ContainerGradient";
import Usuario from "../model/Usuario";
import ConnectDb from "../neo4J/ConnectDb";

function Home() {

    useEffect(() => {
        finAllUsuarios();
    }, []);

    async function finAllUsuarios() {
        const usuarios = new ConnectDb();
        const arrayUsuario: Array<Usuario> = await usuarios.findAllUsuarios();
        setUsuario(arrayUsuario);
    }

    const [listUsuario, setUsuario] = useState<Array<Usuario>>([]);
    const navigation = useNavigation();

    return (
        <ContainerGradient>
            <Container>
                <Text style={styles.title}> Usuários Cadastrados</Text>
                <FlatList
                    data={listUsuario}
                    renderItem={({ item }) => <Card usuario={item} />}
                    keyExtractor={(usuario) => usuario.id.toString() as string}
                />
                <Button style={styles.button} />
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