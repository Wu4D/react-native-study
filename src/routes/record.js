/**
 * Created by razvan on 13.03.2017.
 */

'use strict';

import React, {Component} from 'react';
import Route from 'utils/route';
import Dimensions from 'Dimensions';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import {LoggedNavBar, FooterMenu} from 'components';


export default class Record extends Route {

    getNavigationBar() {
        return LoggedNavBar;
    }

    getNavigationProps() {
        return LoggedNavBar.prototype.getNavigationProps();
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>

                <Image style={styles.containerImage} source={images.loggedContainerBackground}/>
                <FooterMenu isRecording={true} chatStyle={{marginTop: 80}} navigator={this.props.navigator}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexGrow: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: 70,
        zIndex: 1,

    },

    // Todo: wrong width height on rotate
    containerImage: {
        opacity: 0.8,
        position: 'absolute',
        flex: 1,
        flexGrow: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,


    },
})