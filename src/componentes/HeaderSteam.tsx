import { Image, StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

function HeaderSteam() {

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            {navigation.canGoBack() &&
                <AntDesign style={style.buttomBack} onPress={() => navigation.goBack()}
                    name="left" size={24} color="rgb(235, 235, 235)" />
            }
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
        justifyContent: "flex-start",
        alignItems: "center",
        height: 70,
        flexDirection: "row"
    },
    buttomBack: {
        marginTop: 10,
        marginLeft: 10
    },
    image: {
        marginTop: 10,
        height: 36,
        width: 150
    }
});