import styled from "styled-components/native";
import Test from "./Test";
import Login from "@/Apps/Screens/Login/Login";
import Home from "@/Apps/Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "@/Apps/Navigations/TabNavigation";
export default function Page() {
    return (
        <NavigationContainer independent={true}>
            <Container>
                <TabNavigation />
            </Container>
        </NavigationContainer>
    );
}

const Container = styled.View`
    flex: 1;
`;
