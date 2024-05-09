import { Video, ResizeMode } from "expo-av";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
// import Video from "react-native-video";
import VideoPlayer from "expo-video-player";
export default function PlayVideoListItem({ video }) {
    return (
        <Container>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    enterFullscreen: false,
                    source: {
                        uri: "https://cdn.pixabay.com/video/2024/04/17/208314_large.mp4",
                    },
                }}
            />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
`;
const styles = StyleSheet.create({
    video: {
        height: 600,
        width: 400,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});
// <Video
//     style={styles.video}
//     source={{
//         uri: "https://www.tiktok.com/@hoops_.world/video/7336790322636180737",
//     }}
//     shouldPlay
//     isLooping={true}
// />;
