/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, {Component} from 'react';

import {
    AppRegistry,
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';


import Routes from 'routes';

export default class testapp extends Routes {

    render() {
        var NavigationBar = this.getNavigationBar();

        return (
            <Navigator
                initialRoute={{name: 'splash'}}
                renderScene={this.renderScene.bind(this)}
                navigationBar={
                    <NavigationBar routeMapper={this.getRouteMapper()}/>
                }

            />
        );
    }

}


AppRegistry.registerComponent('testapp', () => testapp);
