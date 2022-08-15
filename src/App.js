import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.stories}>
      </View>
      <View style={styles.posts}>
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
    backgroundColor: 'red',
  },

  stories: {
    flex: 3,
    backgroundColor: 'blue',
  },

  posts: {
    flex: 7,
    backgroundColor: 'green',
  },

  footer: {
    flex: 1,
    backgroundColor: 'purple',
  },

})