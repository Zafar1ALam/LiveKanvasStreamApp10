import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView, Dimensions, KeyboardAvoidingView
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Appbar } from 'react-native-paper';

import TextInput2 from '../comp/TextInput2';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdatePassword = ({ navigation }) => {



    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)

    const [stateData, setStataData] = useState({
        password: '',
        confirmPassword: '',



    }
    )

    const multiSet = async (email) => {


        const firstPair = ["asyncEmail", email]

        try {
            await AsyncStorage.multiSet([firstPair])
        } catch (e) {
            Alert.alert(e)
        }


    }
    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }
    const update = () => {



        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)



        }

        if (stateData.confirmPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidConfirmPassword(false)

        }
        if (!passwordCheck()) {
            //Alert.alert("Password and Confirm Password are not same")
            setStateIsValidPasswordConfirmPassword(false)
        }

        if (stateData.password != '' && stateData.confirmPassword != ''
            && passwordCheck()
        ) {
            navigation.navigate("Login")
            console.log("valid all record")
        }


    }

    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010
        }}>

            {/* <ScrollView > */}
            <Appbar.Header style={{
                backgroundColor: COLORS.black101010,
                // backgroundColor: 'red'
                alignItems: 'center'
            }}>
                <Appbar.BackAction
                    onPress={() =>
                        navigation.goBack()} />
                <Appbar.Content title="UpdatePassword"
                    titleStyle={{
                        alignSelf: 'center',
                        // marginRight: '10%'
                        marginLeft: '-15%',


                    }}
                    style={{


                    }} />


            </Appbar.Header>



            <View style={{ marginTop: '5%', marginHorizontal: "7%" }}>
                <TextInput2
                    text
                    text1="Password"
                    placeholder="********"
                    name="lock"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setStateIsValidPassword(true)
                        setStateIsValidPasswordConfirmPassword(true)
                        setStataData({
                            ...stateData, password: text
                        })
                    }} />
                {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
            </View>

            <View style={{ marginTop: '5%', marginHorizontal: "7%" }}>
                <TextInput2
                    text
                    text1="Confirm Password"
                    placeholder="********"
                    name="lock"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setStateIsValidConfirmPassword(true)
                        setStateIsValidPasswordConfirmPassword(true)
                        setStataData({
                            ...stateData, confirmPassword: text
                        })
                    }} />
                {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                {stateIsValidPasswordConfirmPassword == false ? <Text style={{ color: 'red' }}>Password and  Confirm Password
                    are not same</Text> : null}
            </View>






            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                //  backgroundColor: 'green',

            }}>


                <View style={{
                    marginBottom: '15%'

                }}>

                    {stateActivitityIndicator ?
                        <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> :
                        <Button1 text="UPDATE"
                            onPress={() => { update() }} />
                    }


                </View>
            </View>



            {/* </ScrollView> */}

        </SafeAreaView>

    );
};

export default UpdatePassword;