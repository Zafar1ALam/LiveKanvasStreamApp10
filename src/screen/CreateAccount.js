import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView, StyleSheet
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Appbar } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Button1 from '../comp/Button1';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import TextInput2 from '../comp/TextInput2';
import TextInputSvg from '../comp/TextInputSvg';

const CreateAccount = ({ navigation }) => {
    const refRBSheetSelectGenere = useRef()
    const [listSelectGenere, setListSelectGenere] = useState([
        {
            id: 1,
            name: "David Bowie",
            checked: false
        },
        {
            id: 2,
            name: "David Bowie",
            checked: false
        },
        {
            id: 3,
            name: "David Bowie",

            checked: false
        },
        {
            id: 4,
            name: "David Bowie",

            checked: false
        },
        {
            id: 5,
            name: "David Bowie",

            checked: false
        },
        {
            id: 6,
            name: "David Bowie",
            checked: false
        },
        {
            id: 7,
            name: "David Bowie",
            checked: false
        },
        {
            id: 8,
            name: "David Bowie",

            checked: false
        },
        {
            id: 9,
            name: "David Bowie",

            checked: false
        },
        {
            id: 10,
            name: "David Bowie",

            checked: false
        }



    ]);

    const [CountryPickerView, setCountryPickerView] = useState(false);
    const [countryCode, setCountryCode] = useState('92');
    const [statePhoneNo, setStatePhoneNo] = useState('');
    const [stateCombinePhoneNo, setStateCombinePhoneNo] = useState('');
    const [state_AS_UserId, setState_AS_UserId] = useState('');
    const [stateIsValidPhoneNo, setStateIsValidPhoneNo] = useState(true);


    const [stateSelectGenere, setStateSelectGenere] = useState([

    ])
    const [stateSelectGenereId, setStateSelectGenereId] = useState('');
    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);

    const [stateIsValidAddGenere, setStateIsValidAddGenere] = useState(true);
    const [stateDummy, setStateDummy] = useState(true)
    const [stateData, setStataData] = useState({
        email: '',
        password: '',
        userName: ''
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

    const passwordCheck = () => {
        if (stateData.password === stateData.confirmPassword) {
            return true;
        }
        else {
            return false;
        }
    }

    const signUp = () => {
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

        if (stateData.userName == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidUserName(false)
        }
        if (stateSelectGenere.length == 0) {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddGenere(false)
        }
        if (statePhoneNo == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidPhoneNo(false)
        }

        if (stateData.emailAddress != '' && stateData.password != ''
            && stateData.userName != '' & statePhoneNo != '' & stateSelectGenere.length != 0
            && handleValidEmail(stateData.email)) {
            console.log('valid record')

            navigation.navigate("DefineYourSelf")


        }


    }



    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>
            <ScrollView>


                <Appbar.Header style={{
                    backgroundColor: COLORS.black101010,

                    //alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="Create Account"
                        titleStyle={{
                            alignSelf: 'center',
                            marginLeft: '-5%'

                        }}
                        style={{}} />


                </Appbar.Header>



                <View style={{ paddingHorizontal: '7%' }}>
                    <View style={{ marginTop: '10%' }}>
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
                        <TextInputSvg
                            text
                            text1="Username"

                            xml={Svgs.userName}

                            onChangeText={(text) => {
                                setStateIsValidUserName(true)
                                setStataData({
                                    ...stateData, userName: text
                                })
                            }} />
                        {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>Enter Valid Username</Text> : null}

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
                    <View style={{ marginTop: "5%" }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Enter Phone No</Text>
                        {CountryPickerView == true ? <CountryPicker

                            theme={DARK_THEME}
                            withFilter={true}
                            withCallingCode={true}
                            withModal={true}
                            withFlag={true}
                            withFlagButton={true}

                            onSelect={(e) => {
                                setCountryPickerView(false)
                                //setCountryFlag(JSON.parse(e.flag))
                                setCountryCode(JSON.parse(e.callingCode))
                            }}
                            onClose={(e) => {
                                setCountryPickerView(false)
                            }}
                            visible={CountryPickerView}
                        /> :
                            <View></View>
                        }
                        <View style={{
                            flexDirection: 'row',
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.whiteFFFFFF,


                        }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',

                                    alignItems: 'center'
                                }}
                                onPress={() => {
                                    setCountryPickerView(true)
                                }}>
                                <TextInput
                                    style={style.input}
                                    editable={false}
                                    selectTextOnFocus={false}
                                    keyboardType='number-pad'
                                    onChangeText={(e) => {
                                        // setPhoneno(e)
                                        console.log(e)
                                        console.log('+' + countryCode + e)
                                        //console.log('+' + countryFlag + e)
                                    }}
                                    value={'+' + countryCode}
                                //  style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}
                                //  placeholderTextColor={"black"}
                                />
                                <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />
                            </TouchableOpacity>
                            <TextInput style={{
                                flex: 1,
                            }}
                                keyboardType='number-pad'
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                selectionColor={COLORS.whiteFFFFFF}
                                activeOutlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidPhoneNo(true)
                                    setStatePhoneNo(text)
                                    setStateCombinePhoneNo("+" + countryCode + text)
                                }} />


                        </View>
                        {stateIsValidPhoneNo == false ? <Text style={{ color: 'red' }}>Enter Valid PhoneNo</Text> : null}


                    </View>



                    <View style={{ marginTop: '5%' }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Choose Genre</Text>
                        <TouchableRipple style={{
                            flexDirection: 'row',
                            //backgroundColor: 'red',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 1,
                            minHeight: 40,
                            borderBottomColor: COLORS.whiteFFFFFF
                        }} onPress={() => {
                            setStateSelectGenere([]
                            )
                            refRBSheetSelectGenere.current.open()
                        }}>
                            <>
                                <View style={{
                                    flex: 1,
                                    // height: 45,
                                    justifyContent: 'center'

                                }}>
                                    <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectGenere}</Text>

                                </View>
                                <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />
                            </>
                        </TouchableRipple>
                        {stateIsValidAddGenere == false ? <Text style={{ color: 'red' }}>Choose Valid Genre</Text> : null}
                    </View>



                    <View style={{
                        alignItems: 'center',

                        marginTop: '15%'
                    }}>
                        {/* {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> : */}
                        <Button1 text="SIGNUP"
                            onPress={() => { signUp() }} />
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
                            justifyContent: 'center'
                            , borderRadius: 40
                        }}>
                            <SvgXml xml={Svgs.fIcon} />
                        </TouchableRipple>

                        <TouchableRipple style={{
                            height: 33, width: 33,
                            backgroundColor: COLORS.whiteFFFFFF,
                            alignItems: 'center',
                            justifyContent: 'center'
                            , borderRadius: 40
                        }}>
                            <SvgXml xml={Svgs.appleIcon} />
                        </TouchableRipple>
                    </View>
                    <View style={{
                        flexDirection: 'row', marginTop: '5%',
                        alignSelf: 'center'
                    }}>
                        <Text

                            style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                            { marginRight: '5%' }]}>Already hava an account?</Text>
                        <TouchableRipple onPress={() => {
                            navigation.navigate("Login")
                        }}>
                            <Text style={STYLES.fontSize18_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Log in</Text>
                        </TouchableRipple>
                    </View>


                </View>

                {/* Bottom sheet Genere        */}

                <RBSheet
                    closeOnPressMask={false}

                    dragFromTopOnly={true}
                    height={520}
                    animationType="slide"
                    ref={refRBSheetSelectGenere}

                    customStyles={{
                        wrapper: {
                            backgroundColor: 'rgba(0,0,0,0.84)',
                            //backgroundColor: "transparent"

                        },
                        container: {
                            //justifyContent: "center",
                            //  alignItems: "center"
                            backgroundColor: COLORS.black101010,
                            // marginHorizontal: '2%',
                            borderWidth: 1,
                            width: "95%",
                            paddingVertical: '5%',
                            paddingHorizontal: '2%',
                            alignSelf: "center",
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                            borderColor: COLORS.redE22641
                        },
                        // draggableIcon: {
                        //     backgroundColor: "#000"
                        // }
                    }}


                >
                    <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                CHOOSE GENRE</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetSelectGenere.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginVertical: '3%',

                                justifyContent: 'space-between'
                            }}>
                                {listSelectGenere.map((item, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                // paddingVertical: '4%',
                                                backgroundColor: COLORS.black101010,
                                                paddingVertical: '2%',

                                                borderBottomWidth: 1,
                                                //borderBottomColor: COLORS.whiteFFFFFF_21
                                                borderBottomColor: COLORS.whiteFFFFFF_21
                                                // borderBottomWidth: 1,
                                                // borderBottomColor: COLORS.black000000_20

                                            }}>
                                            <TouchableRipple

                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginBottom: '3%'
                                                }}
                                                onPress={() => {
                                                    if (item.checked == false) {
                                                        item.checked = true
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    else if (item) {
                                                        item.checked = false
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    // setStataData({
                                                    //     ...stateData,
                                                    // })
                                                    // stateData.addMembers.push(item.name)
                                                }
                                                }>
                                                <>
                                                    <SvgXml xml={item.checked ? Svgs.checkCheckbox
                                                        : Svgs.uncheckCheckbox}
                                                        style={{ marginRight: '5%' }} />
                                                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.name}</Text>
                                                </>
                                            </TouchableRipple>

                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>
                        <View style={{
                            marginVertical: "3%", justifyContent: 'center',

                        }}>
                            <Button1 text="ADD NOW"
                                onPress={() => {

                                    listSelectGenere.forEach((item) => {
                                        if (item.checked) {
                                            stateSelectGenere.push(item.name + ", ")
                                        }
                                    })
                                    setStateIsValidAddGenere(true)
                                    setStateDummy(!stateDummy)
                                    console.log(stateData.addMembers)

                                    refRBSheetSelectGenere.current.close()
                                }} />
                        </View>




                    </View>
                </RBSheet>



            </ScrollView>
        </SafeAreaView>
    );
};

export default CreateAccount;


const style = StyleSheet.create({
    input: {
        //height: 40,

        //  backgroundColor: 'red'
        //backgroundColor: COLORS.black000000,
        //  height: "100%",
        // padding: 5
    },

})
