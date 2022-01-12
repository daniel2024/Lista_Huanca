import { StyleSheet } from 'react-native'
const style = StyleSheet.create({
    postContainer: {
        backgroundColor: "#dfefff",
        marginHorizontal: 20,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: "#d1dcdf",
        borderRadius: 5,
        padding: 10,
    },

    postContainerCompleted: {
        backgroundColor: "#71e096",

    },
    postText: {
        fontSize: 16,
        color: "#292944",
    },

    containerButtonera: {
        flexDirection: "row"

    },
    buttonCompleted: {
        width: 130
    },
    
    buttonRemove: {
        backgroundColor: "#ff606f",
        width: 105
    }

});

export default style;