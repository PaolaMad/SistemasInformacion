import {StyleSheet, Text, View} from 'react-native';

interface Props {
    //?: para definir valor nulo
    name?: string;
}

export const HelloWorldScreen = ( {name = 'World'} : Props ) => {
    return (
    <View style={ styles.container }>
        <Text 
        numberOfLines={1}
        ellipsizeMode="clip"
        style= {styles.title}
        >Hello {name}
        </Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#385B66',
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'white',
        padding: 20,
    },
});
