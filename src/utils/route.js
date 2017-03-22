/**
 * Created by razvan on 14.03.2017.
 */
/**
 * Created by razvan on 10.03.2017.
 */

import React, {Component} from 'react';

import NavigatorBar from 'utils/navigatorBar';


export default class Route extends Component {

    constructor(props) {
        super(props);

        this.state = {
            routes: {}

        }
    }

    addRoute(name, component, title, index) {
        this.state.routes[name] = {
            component: component,
            title: title,
            index: index,
        };


        return this;
    }

    getComponent(name) {
        return this.state.routes[name];
    }

    navigate(routeName) {

        this.props.navigator.push({
            name: routeName,
        });
    }

    //Render scene
    renderScene(route, navigator) {
        let Route = this.getComponent(route.name);
        let Component = Route.component;

        //Return component route
        route.component = Route.component;
        route.title = Route.title;
        route.index = Route.index;

        return <Component navigator={navigator}/>
    }


    getNavigationBar(){
        return NavigatorBar;
    }

    getRouteMapper(){
        return NavigationBarRouteMapper = {

            LeftButton: function(route, navigator, index, navState) {
                if (index === 0) {
                    return null;
                }

                return null;
            },

            RightButton: function(route, navigator, index, navState) {
                return null;
            },

            Title: function(route, navigator, index, navState) {
                return null;
            },

        };
    }


}

