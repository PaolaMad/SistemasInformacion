import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";


export const CounterScreen = () => {
    const [count, setCount] = useState(20);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            {/* <PrimaryButton
                label="Incrementar"
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            /> */}
            <Button
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}>
                Incrementar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
    },
});
