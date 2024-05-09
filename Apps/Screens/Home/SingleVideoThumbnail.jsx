import styled from "styled-components/native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function SingleVideoThumbnail({ video }) {
    const navigation = useNavigation();
    return (
        <TouchableOpactiy1
            onPress={() => navigation.navigate("play-video", { selectedVideo: video })}
        >
            <Container>
                <View2>
                    <View4>
                        <ProfileImage
                            source={{
                                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhVpPVV8Fs6oaJFnKFV0wuw8m4deMwYX_FbnEwyzSGQ&s",
                            }}
                        />
                        <Text1>{video.username}</Text1>
                    </View4>
                    <View3>
                        <Text2>36</Text2>
                        <AntDesign name="hearto" size={24} color="black" />
                    </View3>
                </View2>
                <Thumbnail
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhVpPVV8Fs6oaJFnKFV0wuw8m4deMwYX_FbnEwyzSGQ&s",
                    }}
                />
            </Container>
        </TouchableOpactiy1>
    );
}
const TouchableOpactiy1 = styled.TouchableOpacity`
    flex: 1;
    margin: 5px;
`;
const Container = styled.View``;
const View2 = styled.View`
    position: absolute;
    z-index: 10;
    bottom: 0px;
    left: 0px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
const View4 = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;
const View3 = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

const Thumbnail = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 10px;
`;
const ProfileImage = styled.Image`
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 99px;
`;
const Text1 = styled.Text`
    color: black;
    font-size: 15px;
    z-index: 10;
`;
const Text2 = styled.Text`
    font-size: 12px;
`;
//   <Text1>{video.created_at}</Text1>
//             <Text1>{video.description}</Text1>
//             <Text1>{video.videoUrl}</Text1>
