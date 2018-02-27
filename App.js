import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default class App extends React.Component {
  render() {
      let pic = {
        uri: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_12787_rainbow-corn-.jpg' };
    return (
        <View style={styles.container}>
            <Image source={pic} style={{width: 300, height: 210}}/>
            <Text>STUFFCLUSTER</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
