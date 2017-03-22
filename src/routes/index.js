/**
 * Created by razvan on 10.03.2017.
 */

import React, {Component} from 'react';

import Splash from 'routes/splash';
import Singup from 'routes/singup';
import Signin from 'routes/signin';
import LoggedHome from 'routes/loggedHome';
import Settings from 'routes/settings';
import TwitchSettings from 'routes/twitchSettings';
import Record from 'routes/record';


import Route from 'utils/route';

export default class Routes extends Route {

    constructor(props) {
        super(props);

        //Add routes
        this.addRoute('splash', Splash, 'titssle', 0);
        this.addRoute('singup', Singup, 'Player.me Account Creation', 1);
        this.addRoute('signin', Signin, 'Sign in', 2);
        this.addRoute('loggedHome', LoggedHome, 'Digital Anomaly', 3);
        this.addRoute('settings', Settings, 'Settings', 4);
        this.addRoute('twitchSettings', TwitchSettings, 'Twitch - Digital Anomaly', 5);
        this.addRoute('record', Record, 'DigitalAnomaly', 6);
    }

}

