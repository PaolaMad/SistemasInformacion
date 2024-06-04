
import { SafeAreaView } from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
  <SafeAreaView style={{flex: 1}}>
    <HelloWorldScreen />
  </SafeAreaView>
  );
};
