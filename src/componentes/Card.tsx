import { StyleSheet, Text, View } from "react-native";

function Card() {
    return (
        <View style={styles.container}>
            <View style={styles.imagem}>
                <View style={styles.fotoVazia}></View>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}> Wilmar Vitor Fonseca</Text>
                <Text style={styles.descricao}> Wilmar@email.com</Text>
            </View>
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderColor: "rgba(86, 120, 134, 0.37)",
        height: 80,
        marginHorizontal: 20,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    imagem: {
        borderColor: "rgba(86, 120, 134, 0.5)",
        borderWidth: 1,
        height: 45,
        width: 45,
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
        flex: 0.8,
        paddingTop: 20
    },
    title: {
        fontSize: 12,
        color: "rgb(235, 235, 235)"
    },
    descricao: {
        fontSize: 10,
        marginTop: 5,
        color: "rgb(235, 235, 235)"
    }
});