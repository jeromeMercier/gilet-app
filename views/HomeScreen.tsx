import React from 'react';
import { Text, View} from 'react-native';
import { styles } from '../style/appStyle'



function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;