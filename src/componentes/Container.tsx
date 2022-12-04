import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

function Container({ children }: any) {
    return (
        <LinearGradient
            colors={["rgba(86, 120, 134, 0.37)", "rgba(70, 106, 128, 0.233)"]}
            start={{ x: 1, y: 0.7 }}
            end={{ x: 0.7, y: 1 }}
            style={styles.linearGradient}>
            {children}
        </LinearGradient>
    );
}
export default Container;

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: "stretch",
        flex: 1,
        backgroundColor: "rgba(41, 46, 51, 0.93)"
    },
});