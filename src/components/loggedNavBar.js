/**
 * Created by razvan on 15.03.2017.
 */

'use strict';
import React from 'react';
import NavigationBar from 'components/navigationBar';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class LoggedNavBar extends NavigationBar {

    getStyle() {
        return styles.navbar;
    }

    getRouteMapper() {
        var that = this;

        return NavigationBarRouteMapper = {

            LeftButton: function (route, navigator, index, navState) {

                // debugger;

                if (navState.routeStack.length > 1) {
                    return (
                        <View style={styles.textView}>
                            <TouchableOpacity onPress={() => that.navigateBack(navigator)}>
                                <Text style={styles.text}><Ionicons name="md-arrow-back" style={styles.icon}/></Text>
                            </TouchableOpacity>
                        </View>
                    );

                }


            },

            RightButton: function (route, navigator, index, navState) {
                return (

                    <View style={styles.textView}>
                        <TouchableOpacity onPress={() => that.navigate(navigator, 'settings')}>
                            <Text style={styles.text}><Ionicons name="md-settings" style={styles.icon}/></Text>
                        </TouchableOpacity>
                    </View>
                );
            },

            Title: function (route, navigator, index, navState) {
                if (navState.routeStack.length > 1) {
                    var currentRoute = navState.routeStack[navState.routeStack.length - 1];
                    return (
                        <View style={styles.textView}>
                            <Text style={styles.text}>{currentRoute.title}</Text>
                        </View>

                    );

                }
            },

        };
    }


}

const styles = new StyleSheet.create({
    navbar: {
        backgroundColor: 'rgba(53, 54, 56, 0.5)'
    },
    text: {
        color: "#fff",
        fontSize: 19,


    },

    textView: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },

    icon: {
        fontSize: 27,
    }
});