import React, { useState, useRef } from "react";
import styled from "styled-components/native";
import { Video, ResizeMode } from "expo-av";
import { StyleSheet } from "react-native";
import { supabase } from "./../../../Utils/SupabaseConfig";

export default function Login() {
    async function googleSignIn() {
        const { data, error } = await supabase
            .from("Users")
            .insert([{ name: "test1", email: "1@2sdf.com" }])
            .select();
        if (data) {
            console.log(data);
        }
    }
    return (
        <Container>
            <Video
                style={styles.video}
                source={{
                    uri: "https://cdn.pixabay.com/video/2024/04/17/208314_large.mp4",
                }}
                shouldPlay
                isLooping={true}
            />
            <View>
                <Title>Tik Tok</Title>
                <Description>
                    Utlimate Place to Share your Short Videos with Great Community
                </Description>
            </View>
            <GoogleSignIn onPress={googleSignIn}>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhVpPVV8Fs6oaJFnKFV0wuw8m4deMwYX_FbnEwyzSGQ&s",
                    }}
                />
                <Description2>Sign In with Google</Description2>
            </GoogleSignIn>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;
const styles = StyleSheet.create({
    video: {
        height: "100%",
        width: 400,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
const View = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20%;
`;
const GoogleSignIn = styled.TouchableOpacity`
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    border-radius: 50px;
    background-color: white;
    position: absolute;
    bottom: 100px;
    width: 100%;
`;
const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
`;
const Description = styled.Text`
    font-size: 13px;
    color: white;
    margin-top: 10px;
`;
const Description2 = styled.Text`
    font-size: 15px;
    color: black;
    margin-top: 20px;
`;
const Image = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
`;
