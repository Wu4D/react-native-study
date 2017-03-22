/**
 * Created by razvan on 10.03.2017.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
} from 'react-native';

import Route from 'utils/route';

export default class Splash extends Route {

    getNavigationBar(){
        return null;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <View >
                        <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 60}}>
                            Player.me
                        </Text>
                    </View>

                    <View>
                        <Text style={{color: "#fff",  fontSize: 26, padding: 10}}>
                            Mobile Live Creator
                        </Text>
                    </View>
                    <View >
                        <Text style={{color: "#fff",  padding: 10, fontSize: 16, textAlign: 'center'}}>This is the area where you breifly describe this aplication</Text>
                    </View>
                </View>


                <View style={styles.singupContainer}>
                    <TouchableOpacity style={styles.splashButton} onPress={() => this.navigate('singup')}>
                        <Text style={styles.splashButtonText}>Sign up</Text>
                    </TouchableOpacity>


                    <View>
                        <Text style={{color: "#fff", textAlign: 'center', fontSize: 16, padding: 10}}>
                            <Text style={{flexGrow: 2}}>Already have an account? </Text>
                            <Text onPress={() => this.navigate('signin')} style={{fontWeight: 'bold', flexGrow: 5}}>Sign in</Text>
                        </Text>
                    </View>

                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7755CE",
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent: 'space-around',

    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 3,
        flex: 1,
        top: '15%'
    },

    splashButton: {
        backgroundColor: "#FFF",
        padding: 17,
    },

    splashButtonText: {
        color: "#555",
        textAlign: "center",
        fontSize: 19

    },
    singupContainer:{
        flex: 1,
        flexWrap: 'nowrap'

    }


})

