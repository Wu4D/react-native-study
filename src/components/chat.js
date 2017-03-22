/**
 * Created by razvan on 16.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    LayoutAnimation,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Chat extends Component {

    render() {

        return (
            <View style={[styles.chat, this.props.style]}>

                <ScrollView>
                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>ITS ONLY FUNNY THE TENTH TIME @Rush</Text>
                    </Text>

                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>

                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>

                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>
                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>
                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>
                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>
                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>

                    <Text style={styles.chatItem}>
                        <Text style={styles.username}>SekaiNoSutibun: </Text>
                        <Text style={styles.message}>How do u decide to color the username?</Text>
                    </Text>


                </ScrollView>
                <View style={styles.closeArrow}>
                    <Ionicons style={styles.closeArrowIcon} name="ios-arrow-down"/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    chat: {
        backgroundColor: "rgba(50,53,60, 0.92)",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        padding: 10,
        zIndex: 2,
        flexGrow: 1,
        flex: 1,
    },

    chatItem: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 4,
        paddingTop: 4,
        color: "#FFF",
        fontSize: 16,

    },

    username: {
        color: '#4FBAD0'
    },


    closeArrowIcon: {
        color: "#FFF",
        fontSize: 22,
        textAlign: 'right',
        paddingTop: 5,
    }

})