import { StyleSheet, TouchableOpacity, View } from "react-native";
import Texto from "./Texto";

function Button({ title, style, onPress }: any) {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
            <Texto style={styles.text}> {title}</Texto>
        </TouchableOpacity>
    );
}
export default Button;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(92, 126, 16)",
        height: 40,
        width: 150,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "rgb(229, 228, 220)",
        fontSize: 14
    }
});