/**
 * Created by razvan on 16.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Hr from 'components/hr';

export default class SocialAuth extends Component {


    render() {
        return (
            <View style={this.props.style}>

                <Hr text={this.props.hrText}/>
                <Text style={styles.text}>{this.props.text}</Text>

                <View style={styles.iconList}>

                    <View style={styles.iconContainer}>
                        <FontAwesome name="twitter" style={[styles.icon, styles.twitter]}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="youtube-play" style={[styles.icon, styles.youtube]}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="twitch" style={[styles.icon, styles.twitch]}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="facebook" style={[styles.icon, styles.facebook]}/>
                    </View>

                </View>

            </View>
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
    },

    formContainer: {
        flexGrow: 2,
        paddingTop: 20
    },

    button: {
        backgroundColor: "#7358c8",
        padding: 17,
    },

    buttonText: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 18
    },

    iconContainer: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        width: 45,
        height: 45,
    },

    icon: {
        fontSize: 25,
        borderRadius: 100 /2,
        color: '#fff',
        padding: 10,
        textAlign: 'center'


    },

    iconList: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: '10%',
    },

    text: {
        color: "#FFF",
        textAlign: "center",
        padding: 10,
        fontSize: 13,
    },

    twitch: {
        backgroundColor: "#5f4AA2",
    },

    youtube: {
        backgroundColor: "#D52D32"
    },

    twitter: {
        backgroundColor: "#6B9BEF"
    },

    facebook: {
        backgroundColor: "#465797"
    }
}