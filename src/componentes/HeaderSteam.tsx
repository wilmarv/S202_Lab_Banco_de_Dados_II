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
        backgroundColor: "#171a21",
        justifyContent: "center",
        height: 70
    },
    image: {
        marginTop: 10,
        height: 36,
        width: 200
    }
});