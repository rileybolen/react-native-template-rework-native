import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {HeadingLg, SubheadingLg, ButtonPrimary, Input, Label, Link, LoadingView, Card, Theme, Select} from 'rework-native'

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email: '',
            password: '',
            city: '',
            agreeToTerms: false,
        }
        this.login = this.login.bind(this)
    }
    
    render(){
        return(
            <SafeAreaView style={{
                minHeight: Dimensions.get('window').height,
                backgroundColor: Theme.colors.background
            }}>
                <KeyboardAwareScrollView contentContainerStyle={{minHeight: '100%'}} showsVerticalScrollIndicator={false} bounces={false}>
                    <View style={[
                        Theme.styles.padding3,
                        Theme.styles.flexColumn,
                        Theme.styles.justifyStart,
                        {minHeight: '100%'}
                    ]}>
                        <HeadingLg textStyle={[Theme.styles.textCenter, Theme.styles.marginTop3]}>ReWork Native</HeadingLg>
                        <LoadingView
                            ref={(ref) => {this.loginForm = ref}}
                            style={[
                                Theme.styles.flexColumn,
                                Theme.styles.justifyCenter,
                                Theme.styles.flex1
                            ]}

                        >
                            <Card>
                                <SubheadingLg>Login</SubheadingLg>
                                <Label textStyle={[Theme.styles.marginTop3]}>Email</Label>
                                <Input
                                    text={this.state.email}
                                    onChangeText={(text) => this.setState({email: text})}
                                    textInputStyle={[Theme.styles.marginTop1]}
                                    />
                                <Label textStyle={[Theme.styles.marginTop3]}>Password</Label>
                                <Input
                                    text={this.state.password}
                                    onChangeText={(text) => this.setState({password: text})}
                                    textInputStyle={[Theme.styles.marginTop1]}
                                    secureTextEntry={true}
                                    />
                                <Label textStyle={[Theme.styles.marginTop3]}>City</Label>
                                <Select
                                    value={this.state.city}
                                    items={[
                                        { label: 'Calgary', value: 0 },
                                        { label: 'Vancouver', value: 1 },
                                        { label: 'Toronto', value: 2 },
                                        { label: 'Montreal', value: 3 },
                                    ]}
                                    onValueChange={(value) => this.setState({city: value})}
                                />
                                <ButtonPrimary
                                    touchableOpacityStyle={[Theme.styles.marginTop3]}
                                    size={"fill"}
                                    title={"Login"}
                                    onPress={this.login}
                                >Login</ButtonPrimary>
                                <Link onPress={() => Actions.register()}
                                    touchableOpacityStyle={[
                                        Theme.styles.flexRow,
                                        Theme.styles.justifyCenter,
                                        Theme.styles.marginTop2,
                                        Theme.styles.paddingVertical1,
                                    ]}
                                >Create a new account</Link>
                            </Card>
                        </LoadingView>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }

    async login(){
        this.loginForm.startLoading()
        this.props.app.alert.show("Successfully logged into your account.", "success")
        // Make login api call, then on response:
        Actions.home()
        this.loginForm.endLoading()
    }

}

export default Login;
