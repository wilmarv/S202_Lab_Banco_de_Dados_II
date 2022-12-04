import { StyleSheet, View, Dimensions } from "react-native";

const height = Dimensions.get("screen").height*0.8;
const width = Dimensions.get("screen").width*0.8;

function Container({ children }: any) {
    return (
        <View style={styles.Container} children={children} />
    );
}
export default Container;
const styles = StyleSheet.create({
    Container: {
        borderRadius: 10,
        backgroundColor: "#101214" + "rgba( 0, 0, 0, 0.3 )",
        height: height,
        width: width
    },
});