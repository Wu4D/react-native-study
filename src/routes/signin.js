/**
 * Created by razvan on 13.03.2017.
 */

'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import Route from 'utils/route';
import {NavigationBar, SocialAuth, Button, Container, AnimatedTextInput} from 'components';


export default class Signin extends Route {

    getNavigationBar() {
        return NavigationBar;
    }

    getNavigationProps() {
        return NavigationBar.prototype.getNavigationProps();
    }


    render() {
        return (
            <Container>


                <View style={styles.formContainer}>

                    <View style={{flexGrow: 1}}>
                        <AnimatedTextInput placeholder="Username"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <AnimatedTextInput placeholder="Password"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <AnimatedTextInput placeholder="One-time Password"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <Button placeholder="Sign in" onPress={() => this.navigate('loggedHome')}/>
                    </View>
                </View>

                <View style={styles.restPasswordContainer}>
                    <Text style={styles.link}>Forgot your password?</Text>
                </View>

                <SocialAuth style={styles.socialContainer} hrText="or" text="Use one of the following services to authenticate to Player.me"/>


            </Container>
        );
    }
}

const styles = StyleSheet.create({

    socialContainer: {
        flexGrow: 2,
    },

    formContainer: {
        flexGrow: 3,
        paddingTop: 20
    },

    text: {
        color: "#FFF",
        textAlign: "center",
        padding: 10,
        fontSize: 13,
    },

    restPasswordContainer: {
        alignItems: 'center',
        flex: 2,
    },

    link: {
        color: "#A692E8",
        fontSize: 17
    }


})