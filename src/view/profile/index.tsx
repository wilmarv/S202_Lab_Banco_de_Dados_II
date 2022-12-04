import { useRoute } from "@react-navigation/native";
import Container from "../../componentes/Container";
import ContainerGradient from "../../componentes/ContainerGradient";

function Profile() {

    const params = useRoute().params;

    return (
        <ContainerGradient>
            <Container>

            </Container>
        </ContainerGradient>
    );
}
export default Profile;