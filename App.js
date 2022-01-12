/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import postDefault from './posts.json'
import { ListPost, Button, ModalAddPost } from './src/components';

const App = () => {


  const [listPostData, setListPostData] = useState(postDefault);
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => setOpenModal(pre => !pre);

  const handleAddPost = (post) => {
    setListPostData(pre => [...[...pre, post]])
  }

  const handleRemovePost = (id) => {
    setListPostData(postsPre => postsPre.filter(post => post.id !== id));
  }


  return (
    <SafeAreaView style={styles.containerApp}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>List Posts</Text>
      </View>
      <ListPost posts={listPostData} removePost={handleRemovePost} />
      <View style={styles.containerButton}>
        <Button text={"Agregar Post"} onPress={toggleModal} />
      </View>
      <ModalAddPost visible={openModal} setVisible={toggleModal} setPosts={handleAddPost} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  containerApp: {

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  containerButton: {
    alignSelf: "flex-end",
    paddingRight: 24,

  }

});

export default App;
