import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Posts from './components/Posts';
import posts_data from './posts-data.json';

function App() {
  const renderPosts = ({item}) => <Posts post={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.stories}>
        <Stories />
      </View>
      <View style={styles.posts}>
        <FlatList
          data={posts_data}
          renderItem={renderPosts}
        />
      </View>
      <View style={styles.footer}>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  header: {
    flex: 1,
  },

  stories: {
    flex: 2,
  },

  posts: {
    flex: 7,
  },

  footer: {
    flex: 1,
    backgroundColor: 'purple',
  },

})