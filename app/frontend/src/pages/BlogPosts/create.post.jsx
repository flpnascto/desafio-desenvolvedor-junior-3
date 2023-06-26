import React, { useState } from "react";
import { View, Button, StyleSheet, Text, TextInput } from "react-native";
import postService from "../../services/post.service";

export default function CreatePost({ navigation }) {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  const enabled =
    title.length > 0 &&
    content.length > 0;

  async function fetchNewPost() {
    const response = await postService.create({ title, content });
    navigation.navigate('DetailsPost', { postInfo: response });
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Post title"
        name="post_title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        label="Content"
        name="content"
        editable
        multiline
        numberOfLines={4}
        value={content}
        onChangeText={setContent}
      />
      <Button title="CreatePost" onPress={fetchNewPost} disabled={!enabled}/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
