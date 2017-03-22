/**
 * Created by razvan on 17.03.2017.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class DropDown extends ModalDropdown {

    _renderButton() {
        return (
            <TouchableOpacity ref={button => this._button = button}
                              disabled={this.props.disabled}
                              onPress={this._onButtonPress.bind(this)}>
                {
                    this.props.children ||
                    (
                        <View style={[styles.button, this.props.buttonStyle]}>
                            <Text style={[styles.buttonText, this.props.textStyle]}
                                  numberOfLines={1}>
                                {this.state.buttonText}
                            </Text>

                            {this.props.defaultIcon && this.props.defaultIcon}
                        </View>
                    )
                }
            </TouchableOpacity>
        );
    }

}

const styles = {

    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
    },


}


