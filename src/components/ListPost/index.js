import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import style from './style';
import PostCard from '../PostCard'
const ListPost = ({ posts, removePost }) => {
    return (
        <View style={style.container}  >
            <FlatList
                data={posts}
                renderItem={(props) => <PostCard removePost={removePost} {...props} />}
                keyExtractor={post => post.id}

                style={{ overflow: "scroll", height: 550 }}
            />

        </View>
    )
}

export default ListPost
