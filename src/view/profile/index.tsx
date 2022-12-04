import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
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
                        <Texto style={styles.title}>{usuario.nome}</Texto>
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
                            renderItem={({ item }) => <Card jogo={item} />}
                            keyExtractor={(item) => item.id.toString()}
                            style={{ flex: 1 }}
                        />

                }

            </Container>
        </ContainerGradient>
    );
}
export default Profile;

const styles = StyleSheet.create({
    usuario: {
        flexDirection: "row",
        flex: 0.2,
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
    }
});