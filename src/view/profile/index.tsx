import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../componentes/Button";
import Card from "../../componentes/Card";
import Container from "../../componentes/Container";
import ContainerGradient from "../../componentes/ContainerGradient";
import Texto from "../../componentes/Texto";
import Jogo from "../../model/Jogo";
import Usuario from "../../model/Usuario";
import ConnectDb from "../../neo4J/ConnectDb";


async function findAllFriends(usuario: Usuario, setAmigos: any) {
    const connectDb = new ConnectDb();
    const arrayAmigos = await connectDb.getRelationships(usuario);
    setAmigos(arrayAmigos);
}

function Profile() {

    const usuario: Usuario = useRoute().params as Usuario;
    const [opcao, setOpcao] = useState(0);

    const [perfilUsuario, setPerfilUsuario] = useState<Usuario>(new Usuario("", ""));
    const [jogoSelecionado, setJogoSelecionado] = useState<Jogo | null>();
    const [editarPerfil, setEditarPefil] = useState(false);
    const [novoNome, setNovoNome] = useState("");

    useEffect(() => {
        findAllFriends(usuario, setPerfilUsuario);
    }, []);

    return (
        <ContainerGradient>
            <Container style={{ padding: 15 }}>

                <View style={styles.usuario}>
                    <View style={styles.imagem}>
                        <View style={styles.fotoVazia}></View>
                    </View>
                    <View style={styles.info}>
                        {editarPerfil ?
                            <TextInput style={styles.input} onChangeText={setNovoNome}
                                value={novoNome} onSubmitEditing={async () => {
                                    setEditarPefil(false);
                                    if (novoNome !== "" && novoNome !== perfilUsuario.nome) {
                                        const connectDb = new ConnectDb();
                                        perfilUsuario.nome = await connectDb.alterarApelido(perfilUsuario, novoNome);
                                        setOpcao(0);
                                        setOpcao(1);
                                    }
                                }} />
                            :
                            <Texto style={styles.title}>{perfilUsuario.nome}</Texto>
                        }
                    </View>
                </View>

                <View style={styles.tabContainer}>

                    <TouchableOpacity style={opcao === 0 ? styles.tabSelect : styles.tabUnselect}
                        onPress={() => setOpcao(0)}
                    >
                        <Texto>Amigos</Texto>
                    </TouchableOpacity >

                    <TouchableOpacity style={opcao === 1 ? styles.tabSelect : styles.tabUnselect}
                        onPress={() => setOpcao(1)}
                    >
                        <Texto>Biblioteca</Texto>
                    </TouchableOpacity >
                </View>

                <View style={{ flex: 1 }}>
                    {
                        opcao === 0 ?
                            <FlatList
                                data={perfilUsuario.listaAmigos}
                                renderItem={({ item }) => <Card usuario={item} />}
                                keyExtractor={(item) => item.id.toString()}
                                style={{ flex: 1 }}
                            />
                            :
                            <FlatList
                                data={perfilUsuario.bibliotecaJogos}
                                renderItem={({ item }) => <Card jogo={item} isSelected={item.id === jogoSelecionado?.id} onPress={() => setJogoSelecionado(item)} />}
                                keyExtractor={(item) => item.id.toString()}
                                style={{ flex: 1 }}
                            />
                    }
                </View>

                <View style={styles.viewButton}>
                    <Button style={styles.button} title={"Editar Perfil"} onPress={() => setEditarPefil(true)} />
                    <Button style={styles.button} title={"Excluir Jogo"} onPress={async () => {
                        if (jogoSelecionado !== null && jogoSelecionado !== undefined)
                            await perfilUsuario.deleteGame(jogoSelecionado.id)
                        setOpcao(0);
                        setOpcao(1);
                    }} />
                </View>

            </Container>
        </ContainerGradient>
    );
}
export default Profile;

const styles = StyleSheet.create({
    usuario: {
        flexDirection: "row",
        height: 100,
    },
    imagem: {
        borderColor: "rgba(86, 120, 134, 0.5)",
        borderWidth: 1,
        height: 90,
        width: 90,
        shadowColor: '#101214',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    fotoVazia: {
        flex: 1,
        alignSelf: "stretch",
        borderWidth: 0.5,
        borderColor: "rgba(150,150,150,0.3)"
    },
    info: {
        alignSelf: "stretch",
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "600",
        textAlign: "center"
    },
    tabContainer: {
        height: 40,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        borderColor: "rgba(150,150,150,0.3)",
        justifyContent: "space-between",
        marginTop: 10
    },
    tabUnselect: {
        alignItems: "center",
        marginHorizontal: 10,
        flex: 1,
    },
    tabSelect: {
        alignItems: "center",
        marginHorizontal: 10,
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: "#FFFF"
    },
    viewButton: {
        flexDirection: "row",
    },
    button: {
        margin: 20,
        flex: 1
    },
    input: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        color: "rgb(235, 235, 235)",
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
});