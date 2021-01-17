import React, {Component} from 'react';
import {Dimensions, View} from 'react-native'
import {Stack, Scene, Router} from 'react-native-router-flux';

import {Alert} from 'rework-native'

import Login from './App/Scenes/Auth/Login';
import Register from './App/Scenes/Auth/Register';
import Home from './App/Scenes/Home';


class App extends Component{

    constructor(props) {
        super(props)
        this.state ={
            authenticated: false,
            autoLoginCompleted: true
        }
        this.autologin = this.autologin.bind(this)
        this.autologin()
    }

    render(){
        if(this.state.autoLoginCompleted){
            return (
                <>
                <Router app={this}>
                    <Stack key="root">
                        <Scene key="login" component={Login} title="Login" hideNavBar={true} initial={!this.state.authenticated}/>
                        <Scene key="register" component={Register} title="Register" hideNavBar={true}/>
                        <Scene key="home" component={Home} title="Home" hideNavBar={true} initial={this.state.authenticated}/>
                    </Stack>
                </Router>
                <Alert ref={(ref) => {this.alert = ref}}/>
                </>
            )
        }else return null
    }

    async autologin(){
        // Call an autologin function and set state based on result
        // this.setState({
        //     authenticated: false,
        //     autoLoginCompleted: true
        // })
    }

}

export default App
