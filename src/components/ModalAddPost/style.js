import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    modalContent: {
        backgroundColor: "#fff",
        width: "100%",
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    closeButton: { alignSelf: "flex-end" },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 12,
    },
    inputGroup: { flexDirection: "row", marginVertical: 10 },
    textInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: "#b7b7b7",
        height: 24,
        paddingVertical: 4,
        paddingHorizontal: 5,
    },
    createButton: {
        alignSelf: "flex-end",
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 15,
        width: 100
    },
});

export default styles