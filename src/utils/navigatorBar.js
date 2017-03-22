/**
 * Created by razvan on 14.03.2017.
 */
import React, {Component} from 'react';
import {Navigator, Text} from 'react-native';

export default class NavigatorBar extends Navigator.NavigationBar {
    render() {

        var routes = this.props.navState.routeStack;

        if (routes.length) {
            var route = routes[routes.length - 1];

            let Nav = route.component.prototype.getNavigationBar();


            if(Nav){
                let navProps = route.component.prototype.getNavigationProps();
                return <Nav {...this.props} {...navProps}/>
            }else{
                return null;
            }


        }

        return super.render();


    }
}