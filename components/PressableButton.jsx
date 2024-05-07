import React from "react";
import styled from "styled-components/native";

const PressableButton = ({ onPress, primary, bgColor, title }) => (
    <ButtonContainer onPress={onPress} bgColor={bgColor}>
        <ButtonText primary={primary}>{title}</ButtonText>
    </ButtonContainer>
);
export default PressableButton;
const ButtonContainer = styled.TouchableOpacity`
    width: 120px;
    height: fit-content;
    border-radius: 10px;
    background-color: ${(props) => props.bgColor};
`;
const ButtonText = styled.Text`
    font-size: 16px;
    text-align: center;
    color: ${(props) => (props.primary ? "white" : "black")};
`;
