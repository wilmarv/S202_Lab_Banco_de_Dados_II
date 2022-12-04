import { StyleSheet, Text,  } from "react-native";

function Texto({ children, style }: any) {

    return (
        <Text style={{...styles.texto,...style}}>{children}</Text>
    );
}
export default Texto;

const styles = StyleSheet.create({
    texto: {
        fontSize: 14,
        color: "rgb(235, 235, 235)",
        fontWeight: "500"
    },
});