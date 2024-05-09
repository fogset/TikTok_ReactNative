import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { supabase } from "../../../Utils/SupabaseConfig";
import { FlatList } from "react-native";
import SingleVideo from "./SingleVideo";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        GetLastVideoList();
    }, []);
    async function GetLastVideoList() {
        const { data, error } = await supabase
            .from("PostList")
            .select("username,thumbnail")
            .range(0, 9);
        if (data) {
            setLoading(false);
            console.log(data);
            setVideoList(data);
        }
    }
    return (
        <Container>
            <Container2>
                <Text1>Home</Text1>
                <Image
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhVpPVV8Fs6oaJFnKFV0wuw8m4deMwYX_FbnEwyzSGQ&s",
                    }}
                />
            </Container2>
            <Container3>
                {videoList !== null && (
                    <FlatList
                        data={videoList}
                        onRefresh={GetLastVideoList}
                        refreshing={loading}
                        onEndReached={() => console.log("end")}
                        numColumns={2}
                        renderItem={({ item }) => <SingleVideo video={item} />}
                    />
                )}
            </Container3>
        </Container>
    );
}
const Container = styled.View`
    padding: 20px;
`;
const Container2 = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Container3 = styled.View`
    /* padding: 20px; */
`;
const Text1 = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;
const Image = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 32px;
`;
