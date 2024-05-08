import styled from "styled-components/native";
import Test from "./Test";
import Login from "@/Apps/Screens/Login/Login";
export default function Page() {
    return (
        <Container>
            <Login />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;
