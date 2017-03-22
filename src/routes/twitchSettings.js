/**
 * Created by razvan on 17.03.2017.
 */


'use strict';

import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ListView,
} from 'react-native';

import {TabViewAnimated, TabBar} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Route from 'utils/route';

import {NavigationBar, DropDown} from 'components';

export default class TwitchSettings extends Route {

    constructor(props) {
        super(props);

        const encodingDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            encodingDataSource: encodingDS.cloneWithRows([
                {
                    title: 'Resolution',
                    selectTitle: '360p',
                    options: [
                        '360p',
                        '480p',
                        '720p',
                        '1280p'
                    ]
                },
                {
                    title: 'Frame Rate',
                    selectTitle: '30 FPS',
                    options: [
                        '30 FPS',
                        '60 FPS',
                        '120 FPS',
                    ]
                },
                {
                    title: 'Key Frame Interval',
                    selectTitle: 'Please select',
                    options: [
                        '2 Frames',
                        '4 Frames',
                        '6 Frames',
                    ]
                },
                {
                    title: 'Use Adaptive Bitrate',
                    selectTitle: 'Please select',
                    options: [
                        '1000 Kbps',
                        '2000 Kbps',
                        '5000 Kbps'
                    ]
                }
            ]),

            index: 0,
            routes: [
                {key: '1', title: 'General'},
                {key: '2', title: 'Encoding'},
            ],
        }
    }

    _renderDropDownRow(rowData, sectionID, rowID, highlightRow) {
        let row = (<Text style={styles.dropDownItemText}>
            {rowData}
        </Text>);

        return (
            <TouchableOpacity style={styles.dropDownItem}>
                {row}
            </TouchableOpacity>
        )
    }


    getNavigationBar() {
        return NavigationBar;
    }

    getNavigationProps() {
        return NavigationBar.prototype.getNavigationProps();
    }


    _handleChangeTab = (index) => {
        this.setState({index});
    };

    _renderHeader = (props) => {
        return <TabBar
            {...props}
            style={{backgroundColor: "#2c2f3b", borderBottomColor: '#444', borderBottomWidth: 1}}
            indicatorStyle={{backgroundColor: "#A692E8",}}
            getLabelText={({ route }) => route.title ? route.title : null}
        />;
    };

    renderDropdownFiled(rowData) {
        let def = (
            <Ionicons style={styles.icon} name="ios-arrow-down"/>
        );

        return (
            <View style={styles.item}>
                <Text style={styles.text}>
                    {rowData.title}
                </Text>

                <DropDown
                    textStyle={styles.text}
                    defaultValue={rowData.selectTitle}
                    dropdownStyle={styles.dropDownContainer}
                    defaultIcon={def}
                    renderRow={this._renderDropDownRow.bind(this)}
                    options={rowData.options}
                    renderSeparator={() => {return null}}
                />
            </View>
        );
    }

    _renderEncodingTab() {
        return (
            <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15}}>

                <ListView
                    dataSource={this.state.encodingDataSource}
                    renderRow={(rowData) => this.renderDropdownFiled(rowData)}
                />

            </View>
        )
    }

    _renderGeneralTab() {
        return (
            <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15}}>

                <View style={[styles.border, styles.itemContainer]}>
                    <Text style={styles.text} numberOfLines={1} ellipsizeMode='tail'>
                        Broadcast Title <Text style={styles.link}>
                        Washed Out Gamer - IRL Streams something new
                    </Text>
                    </Text>
                </View>

                <View style={styles.item}>
                    <Text style={styles.text}>Streaming</Text>
                    <Text style={styles.text}>IRL</Text>
                </View>

            </View>
        );
    }

    _renderScene = ({route}) => {

        switch (route.key) {
            case '2':
                return this._renderEncodingTab();
            case '1':
                return this._renderGeneralTab();
            default:
                return null;
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TabViewAnimated
                    style={{flex: 1}}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onRequestChangeTab={this._handleChangeTab}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({

    text: {
        color: "#FFF",
        textAlign: "center",
        padding: 10,
        fontSize: 15,
    },

    container: {
        backgroundColor: '#2c2f3b',
        flex: 1,
        paddingTop: 50,
    },

    itemContainer: {
        paddingTop: 10,
        paddingBottom: 10,
    },

    item: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#444",
        borderBottomWidth: 2,

    },

    link: {
        color: "#A692E8",
        flex: 1,
    },

    border: {
        borderBottomWidth: 2,
        borderBottomColor: "#555"
    },


    icon: {
        fontSize: 20,
        color: "#999",

    },

    dropDownItem: {
        backgroundColor: '#333',
        borderColor: '#222',
        borderBottomWidth: 1,
    },

    dropDownItemText: {
        padding: 10,
        color: "#FFF",
        fontSize: 19,
    },

    dropDownContainer: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    }

})