/**
 * Created by razvan on 13.03.2017.
 */
'use strict';
import React, {Component} from 'react';

import {
    Text,
    Animated,
    StyleSheet,
    TextInput,
    View,

} from 'react-native';

export default class AnimatedTextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animate: true,
        }
        this.animatedValue = new Animated.Value(0);

    }

    onFocus() {
        if(!this.state.animate){
            return;
        }

        Animated.timing(this.animatedValue, {
            toValue: 100,
            duration: 200
        }).start();
    }

    onBlur(){
        //Skip annimation
        if(!this.state.animate){
            return;
        }

        Animated.timing(this.animatedValue, {
            toValue: 0,
            duration: 200,
        }).start();
    }

    //When the user enters any text set a boolean whether onFocus && onBlure should be animated
    onTextChange(text){
        this.inputValue = text;
        this.setState({animate: !this.inputValue.length > 0});
    }

    render() {

        //Animate font size
        let interpolatedLabelSize = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [18, 14]
        });

        //Animate label position
        let interpolatedMargin = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [20, 0]
        })


        return (
            <View style={{position: 'relative'}}>
                <View style={{position: 'absolute' }}>
                    <Animated.Text style={[styles.inputPlaceholder, {
                        fontSize: interpolatedLabelSize,
                        marginTop: interpolatedMargin
                    }]}>{this.props.placeholder}</Animated.Text>
                </View>
                <View tyle={{position: 'absolute'}}>
                    <TextInput underlineColorAndroid={"#7358C8"} autoCorrect={false}
                               style={styles.input}
                               onFocus={() => this.onFocus()}
                               onBlur={() => this.onBlur()}
                               onChangeText={(text) => this.onTextChange(text)}
                    />
                </View>

            </View>

        );
    }


}

//Todo: make it so the styles are more dynamic
const styles = new StyleSheet.create({
    input: {
        fontSize: 17,
        paddingLeft: 5,
        color: "#FFF",
        height: 50,
        marginTop: 10,


    },

    inputPlaceholder: {
        color: "#FFF",
        paddingLeft: 5,
        fontSize: 17,
    }
})