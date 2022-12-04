import { Image, StyleSheet, View } from "react-native";

function HeaderSteam() {

    return (
        <View style={style.container}>
            <Image
                resizeMode="contain"
                style={style.image}
                source={{
                    uri: "https://community.cloudflare.steamstatic.com/public/shared/images/responsive/header_logo.png"
                }}
            />
        </View>
    );
}
export default HeaderSteam;

const style = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        backgroundColor: "#171a21",
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 0.1
    },
    image: {
        marginTop: 10,
        height: 36,
        width: 200
    }
});