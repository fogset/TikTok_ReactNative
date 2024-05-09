import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import PlayVideoListItem from "./PlayVideoListItem";
import React, { useState, useEffect } from "react";
export default function PlayVideoList() {
    const params = useRoute().params;
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        setVideoList([params.selectedVideo]);
        console.log("params" + params);
    }, []);
    return (
        <View>
            <Text>play video</Text>

            <PlayVideoListItem />
        </View>
    );
}
// <FlatList data={videoList} renderItem={({ item, index }) => <PlayVideoListItem video={item} />} />;
