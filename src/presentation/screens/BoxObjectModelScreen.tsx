import { StyleSheet, Text, View } from "react-native"


export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>oli</Text> */}
            <View>
                <Text style={styles.grayBox}>Hola Mundo</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#615efc',
        // height: 15,
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        // padding: 10,
        // paddingLeft: 20,
        paddingHorizontal: 30,
        backgroundColor: 'green',
        paddingVertical: 30,
    },
    grayBox: {
        backgroundColor: '#3734A40',
        height: 70,
        margin: 20,
        marginHorizontal: 30,
        marginVertical: 30,
        padding: 25,
    },
});
