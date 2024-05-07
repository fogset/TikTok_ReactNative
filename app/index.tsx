import styled from "styled-components/native";
import Test from "./Test";
export default function Page() {
    return (
        <Container>
            <Test />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;
