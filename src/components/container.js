/**
 * Created by razvan on 16.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';

export default class Container extends Component {

    render(){
        return (
            <View style={styles.container} {...this.props}/>
        );
    }
}

const styles = {
    container: {
        backgroundColor: '#2c2f3b',
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        paddingTop: 70,
    }
}