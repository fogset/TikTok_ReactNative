import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { KeyboardAvoidingView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Preview() {
    const navigation = useNavigation();
    const params = useRoute().params;
    const [description, setDescription] = useState(null);
    useEffect(() => {
        console.log(params);
    }, []);
    useEffect;
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <BackContainer onPress={() => navigation.goBack()}>
                    <AntDesign name="back" size={34} color="black" />
                    <Text4>Back</Text4>
                </BackContainer>
                <Container>
                    <Text1>Add Details</Text1>
                    <Image source={{ uri: params?.thumbnail }} />
                    <TextInput
                        numberOfLines={3}
                        placeholder="Description"
                        onChangeText={(value) => setDescription(value)}
                    ></TextInput>
                    <UploadButton>
                        <Text3>Publish</Text3>
                    </UploadButton>
                </Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
const Container = styled.View`
    padding: 10px;
    align-items: center;
`;
const ScrollView = styled.ScrollView`
    background-color: white;
`;
const Text1 = styled.Text`
    font-size: 20px;
    margin-top: 10px;
`;
const Image = styled.Image`
    width: 200px;
    height: 300px;
    border-radius: 20px;
    margin-top: 15px;
`;
const TextInput = styled.TextInput`
    border-width: 1;
    width: 100%;
    border-radius: 15px;
    margin-top: 25px;
    border-color: black;
`;
const UploadButton = styled.TouchableOpacity`
    background-color: black;
    padding: 10px;
    border-radius: 50px;
    margin-top: 5%;
`;
const Text3 = styled.Text`
    color: white;
`;
const Text4 = styled.Text`
    font-size: 15px;
`;
const BackContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
`;
