/**
 * Created by razvan on 16.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';


export default class Button extends Component{

    render(){
        return(
            <TouchableOpacity style={[styles.button, this.props.buttonStyle]} {...this.props}>
                <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.placeholder}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    button: {
        backgroundColor: "#7358c8",
        padding: 17,
    },

    buttonText: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 18
    },

}

