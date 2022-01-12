import React from "react";
import {
    Modal,
    View,
    TouchableOpacity,
    Text,
    TextInput,
} from "react-native";

import styles from './style';
import { Button } from '../'

export default function NewPostModal({ visible, setVisible, setPosts }) {
    const [text, setText] = React.useState("");
    const createPost = () => {
        setPosts({ id: Date.now(), text });
        setText("");
        setVisible();
    };

    return (
        <Modal visible={visible} transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={setVisible}>
                        <View style={styles.closeButton}>
                            <Text>X</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.title}>Nuevo post</Text>
                    <View style={styles.inputGroup}>
                        <TextInput
                            placeholder="Text...."
                            style={[styles.textInput, { height: 35 }]}
                            value={text}
                            onChangeText={(text) => setText(text)}
                            multiline={true}
                        />
                    </View>

                    <Button
                        text={"Agregar"}
                        onPress={() => createPost()}
                        style={styles.createButton}
                        disabled={!text.length}
                    >

                    </Button>
                </View>
            </View>
        </Modal>
    );
}

