/**
 * Created by razvan on 15.03.2017.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chat from 'components/chat';


export default class FooterMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showChat: false,
            isRecording: this.props.isRecording,
            chatIconStyle: {}
        }

    }

    navigate(routeName) {
        this.props.navigator.push({
            name: routeName
        });
    }

    renderChat() {
        if (this.state.showChat) {
            return (
                <Chat style={this.props.chatStyle}/>
            );
        }
    }

    recordPress() {
        if (!this.state.isRecording) {
            this.navigate('record')
        } else {
            this.navigate('loggedHome');
        }

        this.setState({isRecording: !this.state.isRecording});

    }

    toggleChat() {
        this.setState({
            showChat: !this.state.showChat,
            chatIconStyle: !this.state.showChat ? styles.chatIconStyleActive : {}
        });
    }


    renderRecordIcon() {
        if (this.state.isRecording) {
            return (
                <Ionicons style={[styles.footerText, styles.recordText]} name="md-square"/>
            );
        }

        return (
            <Ionicons style={[styles.footerText, styles.recordText]} name="ios-radio-button-on"/>
        );
    }

    getContainerStyle() {
        if (this.state.showChat) {
            return {
                flex: 1
            }
        } else {
            return {}
        }
    }

    render() {
        var that = this;
        return (

            <View style={this.getContainerStyle()} {...this.props}>

                {this.state.showChat &&
                this.renderChat()
                }


                <View style={styles.footerMenu}>
                    <View style={{flexGrow: 1}}>
                        <FontAwesome style={styles.footerText} name="bolt"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <FontAwesome style={styles.footerText} name="microphone"/>
                    </View>

                    <View style={{flexGrow: 3}}>

                        <TouchableOpacity onPress={() => this.recordPress()}>
                            {this.renderRecordIcon()}
                        </TouchableOpacity>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <FontAwesome style={styles.footerText} name="upload"/>
                    </View>

                    <View style={{flexGrow: 1}}>
                        <TouchableOpacity onPress={() => this.toggleChat()}>
                            <Ionicons style={[styles.footerText, this.state.chatIconStyle]} name="md-chatboxes"/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    footerMenu: {
        backgroundColor: "rgba(50,53,60, 0.6)",
        flexDirection: 'row',
        alignItems: 'center',
        padding: 13,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
    },

    footerText: {
        color: "#fff",
        fontSize: 30,
        textAlign: 'center',

    },

    recordText: {
        fontSize: 55,
        color: "#DB503C"
    },

    chatIconStyleActive: {
        color: "#A692E8"
    }

})