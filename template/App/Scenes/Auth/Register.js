import React, {Component} from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {HeadingLg, SubheadingLg, ButtonPrimary, Input, Label, Link, LoadingView, Card, Theme} from 'rework-native'

class Register extends Component{
    constructor(props){
        super(props)
        this.state ={
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
        this.register = this.register.bind(this)
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
                            ref={(ref) => {this.registerForm = ref}}
                            style={[
                                Theme.styles.flexColumn,
                                Theme.styles.justifyCenter,
                                Theme.styles.flex1
                            ]}
                        >
                            <Card>
                                <SubheadingLg>Register</SubheadingLg>

                                <Label textStyle={[Theme.styles.marginTop3]}>Name</Label>
                                <Input
                                    text={this.state.name}
                                    onChangeText={(text) => this.setState({name: text})}
                                    textInputStyle={[Theme.styles.marginTop1]}
                                    />

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

                                <Label textStyle={[Theme.styles.marginTop3]}>Password Confirmation</Label>
                                <Input
                                    text={this.state.password_confirmation}
                                    onChangeText={(text) => this.setState({password_confirmation: text})}
                                    textInputStyle={[Theme.styles.marginTop1]}
                                    secureTextEntry={true}
                                    />

                                <ButtonPrimary
                                    touchableOpacityStyle={[Theme.styles.marginTop3]}
                                    size={"fill"}
                                    title={"Register"}
                                    onPress={this.register}
                                >Register</ButtonPrimary>
                                <Link onPress={() => Actions.pop()}
                                    touchableOpacityStyle={[
                                        Theme.styles.flexRow,
                                        Theme.styles.justifyCenter,
                                        Theme.styles.marginTop2,
                                        Theme.styles.paddingVertical1,
                                    ]}
                                >Login to an existing account</Link>
                            </Card>
                        </LoadingView>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }

    async register(){
        this.registerForm.startLoading()
        // Make register api call, then on response:
        Actions.home()
        this.registerForm.endLoading()
    }

}

export default Register;
