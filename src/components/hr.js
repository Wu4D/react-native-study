/**
 * Created by razvan on 13.03.2017.
 */
'user strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


export default class Hr extends Component {

    renderHr() {
        if (this.props.singleLine) {
            return this.renderLine();
        } else {
            return [
                this.renderLine(1),
                this.renderText(2),
                this.renderLine(3),
            ];

        }
        return <Text>sadadada</Text>
    }

    renderText(key) {
        return (<View key={key}><Text style={styles.text}>{this.props.text}</Text></View>);
    }

    renderLine(key) {
        return (<View key={key} style={styles.line}/>);
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',  alignItems: 'center'}}>
                    {this.renderHr()}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    line: {
        backgroundColor: "#666",
        height: 2,
        flex: 1,

    },

    text: {
        marginLeft: 10,
        marginRight: 10,
        color: "#999",
    }

})