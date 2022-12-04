import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../../componentes/Button";
import Container from "../../componentes/Container";
import ContainerGradient from "../../componentes/ContainerGradient";
import Texto from "../../componentes/Texto";
import Usuario from "../../model/Usuario";
import ConnectDb from "../../neo4J/ConnectDb";

function NewProfile() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    return (
        <ContainerGradient>
            <Container style={styles.container}>
                <View style={styles.formView}>
                    <Texto style={styles.email}> E-mail: </Texto>
                    <TextInput style={styles.input} onChangeText={setEmail}
                        value={email} />
                    <Texto style={styles.nome}> Nome: </Texto>
                    <TextInput style={styles.input} onChangeText={setNome}
                        value={nome} />
                </View>
                <Button title={"Cadastrar Usuário"} style={styles.button}
                    onPress={async () => {
                        if (nome !== "" && email !== "") {
                            const novoUsuario = new Usuario(nome, email);
                            await new ConnectDb().createNewUsuario(novoUsuario);
                            navigation.goBack();
                        }
                    }}
                />
            </Container>
        </ContainerGradient>
    );
}
export default NewProfile;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    formView: {

    },
    nome: {
        color: "#afafaf",
        marginVertical: 10,
    },
    email: {
        color: "#1999ff",
        fontWeight: "500",
        fontSize: 16,
        marginBottom: 10
    },
    input: {
        paddingHorizontal: 10,
        color: "rgb(235, 235, 235)",
        width: 250,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: "rgba(86, 120, 134, 0.4)",
        shadowColor: '#101214',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        alignSelf: "center",
        margin: 20,
        width: 250
    },
});