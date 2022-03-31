import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {
    Image, View, ScrollView,
    TouchableOpacity, Alert,
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator } from 'react-native-paper';
import Svg, { Path, SvgXml } from 'react-native-svg';
import SplashScreen from 'react-native-splash-screen'
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Button1 from '../comp/Button1';
import Svgs from '../utilities/svgs/Svgs';
import TextInput2 from '../comp/TextInput2';
const Login = ({ navigation }) => {
    SplashScreen.hide();
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);

    const [stateData, setStataData] = useState({
        email: '',
        password: '',

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
    const login = () => {
        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)

        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }


        if (stateData.emailAddress != '' && stateData.password != ''

            && handleValidEmail(stateData.email)) {

            navigation.navigate("TabNavigation1")


        }


    }
    return (
        <SafeAreaView style={
            STYLES.container
        }>

            <ScrollView >


                {/* <View style={{ flex: 0.75, backgroundColor: 'red' }}> */}
                <View style={{
                    alignItems: 'center',
                    marginTop: "10%"
                }}>

                    <SvgXml xml={Svgs.logo} />
                </View>

                <View style={{
                    alignItems: 'center',
                    marginTop: "15%"
                }}>

                    <Text style={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Login</Text>
                </View>

                <View style={{ marginTop: '15%' }}>
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

                <View style={{ marginTop: '5%' }}>
                    <TextInput2
                        text
                        text1="Password"
                        placeholder="********"
                        name="lock"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setStateIsValidPassword(true)
                            setStataData({
                                ...stateData, password: text
                            })
                        }} />
                    {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                </View>

                <TouchableRipple style={{
                    marginTop: '5%',
                    alignSelf: 'flex-end'
                }} onPress={() => {
                    navigation.navigate("ForgetPassword")
                }}>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Forget Password?</Text>
                </TouchableRipple>

                {/* </View> */}
                {/* <View style={{ flex: 0.25, backgroundColor: 'green' }}> */}


                <View style={{
                    alignItems: 'center',

                    marginTop: '30%'
                }}>
                    {/* {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> : */}
                    <Button1 text="SIGNIN"
                        onPress={() => { login() }} />
                    {/* } */}
                </View>
                <Text style={[STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                { marginTop: '5%', alignSelf: 'center' }]}>OR</Text>


                <View style={{
                    flexDirection: 'row', marginTop: '5%',
                    alignSelf: 'center', width: "25%", justifyContent: 'space-between'
                }}>
                    <TouchableRipple style={{
                        height: 33, width: 33,
                        backgroundColor: COLORS.whiteFFFFFF, alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 40
                    }}>
                        {/* <Text style={{ color: COLORS.black000000 }}>f</Text> */}
                        <SvgXml xml={Svgs.fIcon} />

                    </TouchableRipple>

                    <TouchableRipple style={{
                        height: 33, width: 33,
                        backgroundColor: COLORS.whiteFFFFFF, alignItems: 'center',
                        justifyContent: 'center'
                        , borderRadius: 40
                    }}>
                        {/* <Text style={{ color: COLORS.black000000 }}>f</Text> */}
                        <SvgXml xml={Svgs.appleIcon} />
                    </TouchableRipple>
                </View>
                <View style={{
                    flexDirection: 'row', marginTop: '5%',
                    alignSelf: 'center'
                }}>
                    <Text style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                    { marginRight: '5%' }]}>Already hava an account?</Text>
                    <TouchableRipple onPress={() => {
                        navigation.navigate("CreateAccount")
                    }}>
                        <Text style={STYLES.fontSize18_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Signup</Text>
                    </TouchableRipple>
                </View>
                {/* </View> */}


            </ScrollView>

        </SafeAreaView >
    );
};

export default Login;