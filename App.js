import React from 'react';
import { StyleSheet, Text, View, Image, Button, Picker, Slider } from 'react-native';



export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            visible: true,
            term: "none chosen",
            like: 0
        };
    }

    toggleVisibility=()=> {
        this.setState(prevState => {
            return {visible: !prevState.visible}
        })
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
                <Picker
                    style={{width: 300}}
                    selectedValue={this.state.term}
                    onValueChange={(itemValue, itemIndex) => this.setState({term: itemValue})}
                    prompt="Words for Bum"
                    selected="Pick a Bum Word"
                >
                        <Picker.Item label="Pick a Bum Word" />
                        <Picker.Item label="Anus" value="dry" />
                        <Picker.Item label="Sphincter" value="medical" />
                        <Picker.Item label="Rusty Drain" value="made up" />
                        <Picker.Item label="Chocolate Starfish" value="comedy" />
                        <Picker.Item label="Ringpiece" value="vernacular" />
                </Picker>
                <Text>This bum word is:</Text>
                <Text style={styles.header}>{this.state.term}</Text>
                <Text>How much do you like this bum-word?</Text>
                <Slider
                    style={{width: 300}}
                    maximumValue={100}
                    minimumValue={0}
                    onValueChange={(value)=> this.setState({like: value})}
                />
                <Text
                    style={styles.header}
                >
                    {Math.round(this.state.like)}% 
                </Text>

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
    header: {
        fontSize: 40,
        color: 'red'
    }



});
