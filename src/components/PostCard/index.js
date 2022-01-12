import React, { useState } from 'react'
import { Text, View } from 'react-native';
import style from './style';
import { Button } from '../'
const PostCard = ({ item, isCompleted = false, removePost = () => { } }) => {

    const [isCompletedPost, setIsCompletedPost] = useState(isCompleted);

    const handleCompletedPost = () => {
        setIsCompletedPost(true)
    }

    const { id, text } = item;

    const backgroundColor = React.useMemo(() => {
        return isCompletedPost ? style.postContainerCompleted.backgroundColor : style.postContainer.backgroundColor
    }, [isCompletedPost])


    return (
        <View style={{ ...style.postContainer, backgroundColor }}>
            <Text style={style.postText}>
                {text}
            </Text>

            <View style={style.containerButtonera}>
                <Button text={"Completado"} disabled={isCompletedPost} onPress={handleCompletedPost} style={style.buttonCompleted} />
                <Button text={"Remover"} onPress={() => removePost(id)} style={style.buttonRemove} />
            </View>
        </View>
    )
}

export default PostCard
