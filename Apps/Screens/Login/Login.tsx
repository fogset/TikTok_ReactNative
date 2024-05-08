import { Button, View, Alert, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import React from "react";
import styled from "styled-components/native";

export default function Login() {
    return (
        <Container>
            <YoutubePlayer
                height={400}
                play={true}
                videoId={"gHD2oREth1M"}
                initialPlayerParams={{
                    loop: true,
                    controls: true,
                }}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
const Container = styled.View`
    flex: 1;
    height: 100%;
    width: 100%;
`;
