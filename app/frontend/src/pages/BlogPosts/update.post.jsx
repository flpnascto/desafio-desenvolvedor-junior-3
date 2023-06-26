import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import postService from "../../services/post.service";

export default function UpdatePost({ route, navigation }) {
  const { postInfo } = route.params;
  const [ title, setTitle ] = useState(postInfo.title || '');
  const [ content, setContent ] = useState(postInfo.content || '');

  const enabled =
    title.length > 0 &&
    content.length > 0;

  async function fetchUpdatePost() {
    const response = await postService.update({ id: postInfo.id, title, content });
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
      <Button title="Update" onPress={fetchUpdatePost} disabled={!enabled}/>
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
