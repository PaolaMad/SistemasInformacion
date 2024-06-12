import { Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress } : Props) => {

    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPress]}
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()} >
            <Text>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#393e46',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPress: {
        backgroundColor: '#1e3163',
    },
});