/**
 * Created by razvan on 15.03.2017.
 */
/**
 * Created by razvan on 13.03.2017.
 */

'use strict';

import React, {Component} from 'react';
import Dimensions from 'Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from 'configs/images';
import Route from 'utils/route';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Picker,
    ListView,
    ScrollView,
} from 'react-native';

import {
    LoggedNavBar,
    FooterMenu,
    DropDown
} from 'components';


export default class LoggedHome extends Route {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            chatSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4'])
        }
    }

    _renderRow(rowData, sectionID, rowID, highlightRow) {
        let row = (<Text style={styles.dropDownItemText}>
            {rowData}
        </Text>);

        return (
            <TouchableOpacity style={styles.dropDownItem}>
                {row}
            </TouchableOpacity>
        )
    };

    getNavigationBar() {
        return LoggedNavBar;
    }

    getNavigationProps() {
        return LoggedNavBar.prototype.getNavigationProps();
    }


    render() {
        let def = (
            <Ionicons style={styles.icon} name="ios-arrow-down"/>
        );

        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>

                <Image style={styles.containerImage} source={images.loggedContainerBackground}/>

                <View style={{flex:1,backgroundColor: 'rgba(68, 67, 65, 0.6)'}}>

                    <View style={styles.container}>
                        <View style={styles.formContainer}>
                            <Text style={styles.text}>Stream Title</Text>
                            <TextInput underlineColorAndroid="transparent" style={styles.input}></TextInput>
                            <Text style={styles.text}>Streaming</Text>

                            <DropDown
                                buttonStyle={styles.dropdownButtonView}
                                textStyle={styles.text}
                                defaultValue={'Select a streaming option'}
                                dropdownStyle={styles.dropDownContainer}
                                defaultIcon={def}
                                renderRow={this._renderRow.bind(this)}
                                options={['Twitch Option 1', 'Twitch Option 2', 'Twitch Option 3']}
                                renderSeparator={() => {return null}}
                                style={styles.dropdown}
                            />

                        </View>
                    </View>


                    <FooterMenu navigator={this.props.navigator} />

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexGrow: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        paddingTop: 70,
        zIndex: 1,

    },

    // Todo: wrong width height on rotate
    containerImage: {
        opacity: 0.8,
        position: 'absolute',
        flex: 1,
        flexGrow: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,


    },

    formContainer: {
        flexGrow: 1,
        paddingTop: 20,
    },


    text: {
        color: "#FFF",
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
    },

    input: {
        backgroundColor: "rgba(50,53,60, 0.96)",
        color: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16,
    },

    select: {
        backgroundColor: "rgba(50,53,60, 0.92)",
        color: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
    },


    icon: {
        fontSize: 20,
        color: "#999",

    },

    dropdown: {
        backgroundColor: "rgba(50,53,60, 0.96)",
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
    },

    dropDownItem: {
        backgroundColor: '#333',
        borderColor: '#222',
        borderBottomWidth: 1,
        flex: 1,
    },

    dropDownItemText: {
        padding:10,
        color: "#FFF",
        fontSize: 19,
    },

    dropDownContainer: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },

    dropdownButtonView: {
        justifyContent: 'space-between',
    }


})