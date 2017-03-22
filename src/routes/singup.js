/**
 * Created by razvan on 13.03.2017.
 */

'use strict';

import React, {Component} from 'react';
import Route from 'utils/route';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';


import {
    Container,
    Button,
    SocialAuth,
    NavigationBar,
    AnimatedTextInput
} from 'components';

export default class Singup extends Route {

    getNavigationBar() {
      return NavigationBar;
    }

    getNavigationProps(){
        return NavigationBar.prototype.getNavigationProps();
    }

    getRouteMapper() {
        return NavigationBar.prototype.getRouteMapper();
    }


    render() {
        return (
            <Container>

                <View style={styles.formContainer}>

                    <View style={{flexGrow: 1}}>
                        <AnimatedTextInput placeholder="Desired Username"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <Button placeholder="Sign up" onPress={() => this.navigate('signin')}/>
                    </View>
                </View>

                <SocialAuth style={styles.socialContainer} hrText="or" text="Use one of the following services to create an account on Player.me"/>


            </Container>
        );
    }
}

const styles = StyleSheet.create({

    socialContainer: {
        flexGrow: 6,
    },

    formContainer: {
        flexGrow: 2,
        paddingTop: 20
    },

    text: {
        color: "#FFF",
        textAlign: "center",
        padding: 10,
        fontSize: 13,
    },


})