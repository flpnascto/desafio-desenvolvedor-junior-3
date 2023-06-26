import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from 'react-native';
import postService from "../../services/post.service";

export default function BlogPosts({ navigation }) {
  const postsFilter = {
    author: false,
    order: 'asc',
  }

  const [filter, setFilter] = useState(postsFilter);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function loadPosts() {
      const response = await postService.getAll(filter);
      setPosts(response);
      setIsLoading(false);
    }
    loadPosts();
  }, [filter]);

  const toggleFilterOrder = () => {
    if (filter.order === 'asc') {
      setFilter({ ...filter, order: 'desc' });
    } else {
      setFilter({ ...filter, order: 'asc' });
    }
  };

  const toggleFilterAuthor = () => {
    if (filter.author) {
      setFilter({ ...filter, author: false });
    } else {
      setFilter({ ...filter, author: true });
    }
  };

  const RenderRow = (post) => {
    return(
      <View key={post.id}>
        <Text>{post.title}</Text>
        <Text>{post.content}</Text>
        <Button
          title="Details"
          onPress={() => { navigation.navigate('DetailsPost',
            {
              postInfo: {...post},
            });
          }}
        />
        <Button
          title="Update"
          onPress={() => { navigation.navigate('UpdatePost',
            {
              postInfo: {...post},
            });
          }}
        />
      </View>
    );
  }

  const loading = () => {
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return(
    <View>
      <Button
        onPress={toggleFilterOrder}
        title={
          filter.order
            ? 'Order by DESC'
            : 'Order by ASC'
        }
      />
      <Button
        onPress={toggleFilterAuthor}
        title={
          filter.author
            ? 'Get All Posts'
            : 'Get only my posts'
        }
      />
      {
        isLoading ? loading() : 
         (<FlatList
          data={posts}
          renderItem={({ item }) => RenderRow(item)}
          keyExtractor={post => post.id}
          />)
      }
    </View>
  );
}