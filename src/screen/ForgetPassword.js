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

const ForgetPassword = ({ navigation }) => {



    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);


    const [stateData, setStataData] = useState({
        email: '',


    }
    )
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            console.log('true')
            return true;

        }
        else {
            console.log('false')
            return false;
        }
    }

    const multiSet = async (email) => {


        const firstPair = ["asyncEmail", email]

        try {
            await AsyncStorage.multiSet([firstPair])
        } catch (e) {
            Alert.alert(e)
        }


    }
    const sendEmail = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }


        if (stateData.emailAddress != ''

            && handleValidEmail(stateData.email)) {

            navigation.navigate("Verification")
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
                <Appbar.Content title="Forget Password"
                    titleStyle={{
                        alignSelf: 'center',
                        // marginRight: '10%'
                        marginLeft: '-15%',


                    }}
                    style={{


                    }} />


            </Appbar.Header>




            <View style={{ marginTop: '15%', marginHorizontal: "5%" }}>
                <TextInput2
                    text
                    text1="Email"
                    placeholder="Email"
                    name="email"
                    onChangeText={(text) => {
                        setStateIsValidEmail(true)
                        setStataData({
                            ...stateData, email: text
                        })
                    }} />
                {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
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
                        <Button1 text="SEND MAIL"
                            onPress={() => { sendEmail() }} />
                    }


                </View>
            </View>



            {/* </ScrollView> */}

        </SafeAreaView>

    );
};

export default ForgetPassword;