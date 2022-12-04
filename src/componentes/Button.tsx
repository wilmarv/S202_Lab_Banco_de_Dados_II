import { StyleSheet, Text, View } from "react-native";

function Button() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Novo Usuario</Text>
        </View>
    );
}
export default Button;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(92, 126, 16)",
        height: 40,
        width: 150,
        alignSelf: "center",
        marginTop: 20,
        justifyContent:"center",
        alignItems:"center"
    },
    text: {
        color: "rgb(229, 228, 220)",
        fontSize: 14
    }
});