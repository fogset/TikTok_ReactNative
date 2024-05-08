import React from "react";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import * as VideoThumbnails from "expo-video-thumbnails";
import { useNavigation } from "@react-navigation/native";

export default function Add() {
    const navigation = useNavigation();
    const SelectVideoFile = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            console.log(result.assets[0].uri);
            generateThumbnail(result.assets[0].uri);
        }
    };
    const generateThumbnail = async (videoUrl) => {
        try {
            const { uri } = await VideoThumbnails.getThumbnailAsync(videoUrl, {
                time: 1000,
            });
            console.log("Thumbail", uri);
            navigation.navigate("preview-screen", {
                video: videoUrl,
                thumbnail: uri,
            });
        } catch (e) {
            console.warn(e);
        }
    };
    return (
        <Container>
            <Image
                source={{
                    uri: "https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
            />
            <Text1>Start Uploading Short Video</Text1>
            <Text2>Lets upload short video and start sharing your creativity</Text2>
            <UploadButton onPress={SelectVideoFile}>
                <Text3>Select Video File</Text3>
            </UploadButton>
        </Container>
    );
}
const Image = styled.Image`
    width: 140px;
    height: 140px;
    border-radius: 32px;
`;
const Container = styled.View`
    padding: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;
`;
const Text1 = styled.Text`
    font-size: 22px;
    margin-top: 20px;
`;
const Text2 = styled.Text`
    text-align: center;
    margin-top: 13px;
`;
const UploadButton = styled.TouchableOpacity`
    background-color: black;
    padding: 10px;
    border-radius: 50px;
    margin-top: 10%;
`;
const Text3 = styled.Text`
    color: white;
`;
