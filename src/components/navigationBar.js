/**
 * Created by razvan on 10.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {Navigator, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class NavigationBar extends Navigator.NavigationBar {

    navigateBack(navigator){
        navigator.pop();
    }

    getNavigationProps(){
        return {
            routeMapper : this.getRouteMapper(),
            style: this.getStyle(),

        }
    }

    navigate(navigator, routeName){
        navigator.push({
            name: routeName,
        });
    }

    getStyle(){
        return styles.navbar;
    }




    getRouteMapper(){
        var that = this;

        return NavigationBarRouteMapper = {

            LeftButton: function(route, navigator, index, navState) {

                // debugger;

                if(navState.routeStack.length > 1){
                    return (
                        <View style={styles.textView}>
                            <TouchableOpacity onPress={() => that.navigateBack(navigator)}>
                                <Text style={styles.text}><Ionicons name="md-arrow-back" style={styles.icon} /></Text>
                            </TouchableOpacity>
                        </View>
                    );

                }


            },

            RightButton: function(route, navigator, index, navState) {
                return null;
            },

            Title: function(route, navigator, index, navState) {
                if(navState.routeStack.length > 1){
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

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#7358c8',

    },

    text: {
        color: "#fff",
        fontSize: 19,


    },

    textView: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 20,
    },

    icon: {
        fontSize: 27,
    }

});



