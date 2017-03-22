/**
 * Created by razvan on 13.03.2017.
 */

'use strict';

import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Route from 'utils/route';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import {NavigationBar, Container, Hr} from 'components';


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
                <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Text style={styles.text}>
                        Logged in as <Text style={styles.link}> DigitalAnomaly</Text>
                    </Text>
                    <Ionicons name="ios-people" style={styles.icon}/>
                </View>
                <Hr singleLine={true}/>

                <View style={{flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Text style={styles.text}>Record broadcasts automatically</Text>
                </View>

                <View style={styles.servicesContainer}>


                    <TouchableOpacity style={styles.serviceIconContainer}
                                      onPress={() => this.navigate('twitchSettings')}>
                        <FontAwesome name="twitch" style={[styles.icon, styles.twitch]}/>
                        <Text style={[styles.text, styles.serviceIconContainerText]}>Twithc</Text>
                        <Text style={styles.serviceIconContainerUser}>DigitalAnomaly</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.serviceIconContainer}
                          onPress={() => this.navigate('twitchSettings')}>
                        <FontAwesome name="youtube-play" style={[styles.icon, styles.youtube]}/>
                        <Text style={[styles.text, styles.serviceIconContainerText]}>Youtube</Text>
                        <Text style={styles.serviceIconContainerUser}>SterFire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.serviceIconContainer}
                          onPress={() => this.navigate('twitchSettings')}>
                        <FontAwesome name="twitter" style={[styles.icon, styles.twitter]}/>
                        <Text style={[styles.text, styles.serviceIconContainerText]}>Twitter</Text>
                        <Text style={styles.serviceIconContainerUser}>CrazySter</Text>
                    </TouchableOpacity>

                </View>

            </Container>
        );
    }
}

const styles = StyleSheet.create({

    icon: {
        color: "#FFF",
        fontSize: 35,
    },

    formContainer: {
        flexGrow: 3,
        paddingTop: 20
    },

    text: {
        color: "#FFF",
        padding: 10,
        fontSize: 15,
    },

    restPasswordContainer: {
        alignItems: 'center',
        flex: 2,
    },

    link: {
        color: "#A692E8",
        fontSize: 17
    },

    servicesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    serviceIconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    serviceIconContainerText: {
        paddingTop: 2,
        paddingBottom: 2,
    },

    serviceIconContainerUser: {
        color: "#777",
        fontSize: 15,
    },

    twitch: {
        color: "#5f4AA2",
    },

    youtube: {
        color: "#D52D32"
    },

    twitter: {
        color: "#6B9BEF"
    },


})