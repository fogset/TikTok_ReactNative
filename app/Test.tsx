import React from "react";
import styled from "styled-components/native";
import PressableButton from "./../components/PressableButton";
import Avatar from "./../components/Avatar";
import Header from "./../components/Header";
import InputContainer from "./../components/InputContainer";
import Card from "./../components/Card";
import { DATA } from "./data";
export default function Test() {
    return (
        <Container>
            <PressableButton onPress={() => true} title="sdfsd" bgColor="#aab8d5" primary />
            <Header headerTitle="sdfsdf" />
            <RowContainer>
                <Avatar
                    imageSource={
                        "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                />
                <InputContainer />
            </RowContainer>
            <Card data={DATA} />
        </Container>
    );
}
const Container = styled.View`
    flex: 1;
`;

const RowContainer = styled.View`
    width: 100%;
    flex-direction: row;
`;
