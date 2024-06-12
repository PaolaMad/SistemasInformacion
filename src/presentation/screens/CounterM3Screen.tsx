import { useState } from "react";
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { FAB } from "react-native-paper";

export const CounterM3Screen = () => {
    const [count, setCount] = useState(20);
    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>
            {/* <Icon name="accessibility-outline" size={30}/> */}
            <FAB
                // icon={ }
                icon="add"
                // label="+1"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            />
        </View>
    );
};

