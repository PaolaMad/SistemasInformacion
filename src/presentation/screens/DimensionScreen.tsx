import { StyleSheet, Text, View, useWindowDimensions } from "react-native";


export const DimensionScreen = () => {
    const { width, height } = useWindowDimensions();
    return (
        <View>

            <View style={styles.container}>
                <View style={{...styles.yellowBox, width: width * 0.5 }} />
            </View>
            <Text style={styles.title}>
                w:{width.toFixed(2)} h:{height.toFixed(2)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // width: 300,
        height: 300,
        backgroundColor: '#715eFC',
    },
    yellowBox: {
        backgroundColor: 'yellow',
        height: '50%',
        width: '50%',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
    }
});
