import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default class App extends React.Component {
    constructor(){
        super();
        this.state = {visible: true};
    }

    toggleVisibility=()=> {
        this.setState(prevState => {
            return {visible: !prevState.visible}
        });
    }

    render() {
    let pic = {uri: 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_12787_rainbow-corn-.jpg'};
        return (
            <View style={styles.container}>
                {this.state.visible ? 
                    <Image source={pic} style={{width: 300, height: 210}}/>
                    :
                    null}
                <Button 
                    title="toggle image"
                    onPress={this.toggleVisibility}
                />
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
