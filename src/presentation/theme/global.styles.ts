import { Platform, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
    },
    fab: {
        position: 'absolute',
        right: Platform.OS === 'android' ? 15 : 10,
        bottom: Platform.OS === 'android' ? 15 : 10,
    },
});
