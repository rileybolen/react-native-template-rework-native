import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {HeadingLg, ButtonPrimary, Paragraph, Theme} from 'rework-native'

class Home extends Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            checked: false,
        }
    }

    render(){
        return(
            <SafeAreaView style={[Theme.styles.fullHeight, {backgroundColor: Theme.colors.background}]}>
                <View style={[
                    Theme.styles.padding5,
                    Theme.styles.flexColumn,
                    Theme.styles.justifyBetween,
                    Theme.styles.alignCenter,
                    Theme.styles.fullHeight
                ]}>
                    <HeadingLg textStyle={[Theme.styles.textCenter]}>Home</HeadingLg>
                    <Paragraph textStyle={Theme.styles.textCenter}>Welcome to your home page!</Paragraph>
                    <ButtonPrimary
                        touchableOpacityStyle={[Theme.styles.marginTop2, Theme.styles.selfCenter]}
                        size={"fill"}
                        onPress={this.logout}
                    >Logout</ButtonPrimary>
                </View>
            </SafeAreaView>
        )
    }

    async logout(){
        Actions.reset('login')
    }

}

export default Home;
