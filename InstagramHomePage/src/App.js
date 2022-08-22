import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import Stories from './components/Stories';
import Posts from './components/Posts';
import Footer from './components/Footer';
import posts_data from './posts-data.json';
import stories_data from './stories-data.json';

function App() {

  const renderPosts = ({item}) => <Posts post={item} />
  const keyExtractorPosts = item => item.id.toString()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <FlatList
          ListHeaderComponent={() => (
            <Stories data={stories_data} />
          )}
          keyExtractor={keyExtractorPosts}
          data={posts_data}
          renderItem={renderPosts}
        />
      </View>
      <View style={styles.footer}>
        <Footer />
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

  body: {
    flex: 9,
  },

  footer: {
    flex: 1,
  },

})