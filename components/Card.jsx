import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Card = ({ data }) => {
    return (
        <VerticalList showsVerticalScrollIndicator={false}>
            {data.map((item) => (
                <ListContainer key={item.id}>
                    <Header>
                        <Row>
                            <SmallAvatar
                                source={{
                                    uri: item.userAvatar,
                                }}
                            />

                            <UserName>{item.userName}</UserName>
                        </Row>
                    </Header>
                    <PostDescription>{item.postText}</PostDescription>
                    <PostImage
                        source={{
                            uri: item.postImage,
                        }}
                    />
                </ListContainer>
            ))}
        </VerticalList>
    );
};
export default Card;

const VerticalList = styled.ScrollView`
    background-color: #e7e7e7;
    padding-top: 20;
    padding-bottom: 20;
    flex: 1;
`;
const ListContainer = styled.View``;
const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
`;
const Row = styled.View`
    align-items: center;
    flex-direction: row;
`;
const SmallAvatar = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`;
const UserName = styled.Text`
    padding-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #010101;
`;
const PostDescription = styled.Text`
    font-size: 14px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`;
const PostImage = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`;
