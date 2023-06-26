import React from "react";
import { View, Text, Button } from 'react-native';
export default function DetailsPost({ route, navigation }) {
  const { postInfo } = route.params;

  const formatDate = (date) => {
    const dataDate = new Date(date).toLocaleDateString('pt-BR');
    const timeDate = new Date(date).toLocaleTimeString('pt-BR');
    return `${dataDate} às ${timeDate}`;
  };


  return(
    <View>
      <Text>Post Details</Text>
      <Text>{postInfo.title}</Text>
      <Text>{postInfo.content}</Text>
      <Text>Create at: {formatDate(postInfo.created)}</Text>
      <Text>Last edited at: {formatDate(postInfo.updated)}</Text>
      <Text>Author: {postInfo.authorId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}