
import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
    TouchableRipple, Text, Appbar, TextInput,
    Modal, Snackbar
} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import TextInputSvg from '../comp/TextInputSvg'

import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';


import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Button1 from '../comp/Button1';
import TextInput2 from '../comp/TextInput2';
const Account = ({ route, navigation }) => {


    const refRBSheetSelectGenere = useRef();
    const refRBSheetChooseCategory = useRef()
    const refRBSheetGender = useRef()
    const refRBSheetChangePassword = useRef()
    const refRBSheetCamera = useRef();
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

    const [listSelectCategory, setListSelectCategory] = useState([
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


    const listSelectGender = [
        {
            id: 1,
            label: "Male",
            value: "Male",
        },
        {
            id: 1,
            label: "Female",
            value: "Female",
        },


    ];




    const [stateImage, setStateImage] = useState("");
    const [stateIsValidImage, setStateIsValidImage] = useState(true);
    const [stateIsValidUserName, setStateIsValidUserName] = useState(true);
    const [stateIsValidPassword, setStateIsValidPassword] = useState(true);
    const [stateIsValidPhoneNo, setStateIsValidPhoneNo] = useState(true);
    const [CountryPickerView, setCountryPickerView] = useState(false);
    const [countryCode, setCountryCode] = useState('92');
    const [statePhoneNo, setStatePhoneNo] = useState('');
    const [stateCombinePhoneNo, setStateCombinePhoneNo] = useState('');
    const [stateSelectGenere, setStateSelectGenere] = useState([

    ])

    const [stateIsValidAddGenere, setStateIsValidAddGenere] = useState(true);
    const [stateIsValidChooseCategory, setStateIsValidChooseCategory] = useState(true);

    const [stateIsValidProfileTitle, setStateIsValidProfileTitle] = useState(true);

    const [stateIsValidGender, setStateIsValidGender] = useState(true);
    const [stateIsValidBio, setStateIsValidBio] = useState(true);
    const [stateDummy, setStateDummy] = useState(true)

    const [stateIsValidFirstName, setStateIsValidFirstName] = useState(true);
    const [stateIsValidLastName, setStateIsValidLastName] = useState(true);
    const [stateIsValidDob, setStateIsValidDob] = useState(true);


    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidCountryName, setStateIsValidCountryName] = useState(true);

    const [stateIsValidOldPassword, setStateIsValidOldPassword] = useState(true);
    const [stateIsValidPasswordConfirmPassword, setStateIsValidPasswordConfirmPassword] = useState(true)
    const [stateIsValidNewPassword, setStateIsValidNewPassword] = useState(true);
    const [stateIsValidConfirmPassword, setStateIsValidConfirmPassword] = useState(true);






    const [stateData, setStateData] = useState({
        email: '',
        userName: '',
        password: '',
        chooseCategory: [],
        profileTitle: '',
        gender: '',
        bio: '',

        oldPassword: '',
        newPassword: '',
        confirmPassword: '',


    }
    )





    const imageTakeFromCamera = () => {
        refRBSheetCamera.current.close()
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setStateImage(image.path)
            console.log(image.path);
            console.log(image);
            setStateIsValidImage(true)


        });
    }

    const imageTakeFromGallery = () => {
        refRBSheetCamera.current.close()
        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image.path);
            setStateImage(image.path)
            setStateIsValidImage(true)
        });
    }



    const passwordCheck = () => {
        if (stateData.newPassword === stateData.confirmPassword) {
            console.log('true')
            return true;
        }
        else {
            console.log('false')
            return false;
        }
    }



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

    const update = () => {
        if (stateData.oldPassword == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidOldPassword(false)

        }

        if (stateData.newPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidNewPassword(false)
        }

        if (stateData.confirmPassword == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidConfirmPassword(false)
        }
        if (!passwordCheck()) {
            setStateIsValidPasswordConfirmPassword(false)
            //onToggleSnackBar()
        }
        if (stateData.oldPassword != '' &&
            stateData.newPassword != '' && stateData.confirmPassword != ''
            & passwordCheck()
        ) {

            refRBSheetChangePassword.current.close()
        }
    }

    const updateAccount = () => {




        if (stateImage == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidImage(false)

        }


        if (!handleValidEmail(stateData.email)) {
            setStateIsValidEmail(false)
        }


        if (stateData.email == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidEmail(false)



        }
        if (stateData.userName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUserName(false)



        }
        if (stateData.password == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPassword(false)



        }
        if (statePhoneNo == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidPhoneNo(false)



        }
        if (stateSelectGenere.length == 0) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidAddGenere(false)



        }

        if (stateData.chooseCategory.length == 0) {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidChooseCategory(false)



        }
        if (stateData.profileTitle == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidProfileTitle(false)

        }

        if (stateData.gender == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidGender(false)
        }
        if (stateData.bio == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidBio(false)
        }



        if (stateData.email != ''
            && stateImage != ''
            &&
            stateData.userName != '' && stateData.password != '' &&
            statePhoneNo != '' && stateSelectGenere.length != 0 &&
            stateData.chooseCategory != '' && stateData.profileTitle != ''
            && stateData.gender != '' && stateData.bio != ''
            && handleValidEmail(stateData.email)) {
            navigation.navigate("AccountSetting")
        }


    }








    const switchVisible = () => setVisible(!visible)
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black101010
            }}>
            <ScrollView>
                <Appbar.Header style={{
                    backgroundColor: COLORS.black101010,

                    //alignItems: 'center'
                }}>
                    <Appbar.BackAction
                        onPress={() =>
                            navigation.goBack()} />
                    <Appbar.Content title="ACCOUNT"
                        titleStyle={[{
                            alignSelf: 'center',

                        }, STYLES.fontSize29_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium]}
                        style={{
                        }} />
                    <AntDesign name='setting' size={25}
                        style={{ marginRight: '2%' }}
                        color={COLORS.redE22641}
                        onPress={() => navigation.navigate("Settings")} />


                </Appbar.Header>





                <View style={{
                    marginTop: "10%",
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    // backgroundColor: 'red'
                }}>
                    <TouchableRipple style={{
                        //alignItems: 'center',
                        //justifyContent: 'center',
                        //  backgroundColor: 'green'
                    }} onPress={() => refRBSheetCamera.current.open()}
                    >
                        <>
                            {stateImage == "" ?
                                <>
                                    <Image source={require('../utilities/images/greyCircle.png')}
                                        style={{
                                            // backgroundColor: 'red',
                                            height: 95, width: 95,
                                            borderRadius: 100
                                        }} />
                                    <SvgXml xml={Svgs.accountHumanLogo}
                                        style={{ position: "absolute", top: "25%", left: '20%' }} />
                                </>
                                :
                                <Image source={{ uri: stateImage }} style={{
                                    height: 95, width: 95,
                                    borderRadius: 100,
                                    //backgroundColor: 'green',
                                }} />}



                            <SvgXml xml={Svgs.backgroundWhitePlusBlack} style={{
                                position: "absolute", right: "5%", top: '5%'

                            }} />
                        </>

                    </TouchableRipple>


                </View>
                {stateIsValidImage == false ? <Text style={{ color: 'red', alignSelf: 'center' }}>Add  Image</Text> : null}
                <View style={{ marginTop: '10%', marginHorizontal: '5%' }}>
                    <TextInput2
                        text
                        text1="Email"
                        placeholder="Email"
                        name="email"
                        onChangeText={(text) => {
                            setStateIsValidEmail(true)
                            setStateData({
                                ...stateData, email: text
                            })
                        }} />
                    {stateIsValidEmail == false ? <Text style={{ color: 'red' }}>Enter Valid Email</Text> : null}
                </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <TextInputSvg
                        text
                        text1="Username"

                        xml={Svgs.userName}

                        onChangeText={(text) => {
                            setStateIsValidUserName(true)
                            setStateData({
                                ...stateData, userName: text
                            })
                        }} />
                    {stateIsValidUserName == false ? <Text style={{ color: 'red' }}>Enter Valid Username</Text> : null}

                </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <TextInput2
                        text
                        text1="Password"
                        placeholder="********"
                        name="lock"
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setStateIsValidPassword(true)
                            setStateData({
                                ...stateData, password: text
                            })
                        }} />
                    {stateIsValidPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Password</Text> : null}
                </View>


                <View style={{ marginTop: "5%", marginHorizontal: '5%' }}>
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

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
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

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Choose Category</Text>
                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        minHeight: 40,
                        borderBottomColor: COLORS.whiteFFFFFF
                    }} onPress={() => {

                        setStateData({
                            ...stateData, chooseCategory: []
                        })
                        refRBSheetChooseCategory.current.open()
                    }}>
                        <>
                            <View style={{
                                flex: 1,
                                // height: 45,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateData.chooseCategory}</Text>

                            </View>
                            <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />
                        </>
                    </TouchableRipple>
                    {stateIsValidChooseCategory == false ? <Text style={{ color: 'red' }}>Select Valid Category</Text> : null}
                </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <TextInputSvg
                        text
                        text1="Profile Title"

                        xml={Svgs.T}
                        onChangeText={(text) => {
                            setStateIsValidProfileTitle(true)
                            setStateData({
                                ...stateData, profileTitle: text
                            })
                        }} />
                    {stateIsValidProfileTitle == false ? <Text style={{ color: 'red' }}>Enter Valid Profile Title</Text> : null}
                </View>

                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Gender</Text>
                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: COLORS.whiteFFFFFF
                    }} onPress={() => refRBSheetGender.current.open()}
                    >
                        <>
                            <View style={{
                                flex: 1,
                                height: 40,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                    {stateData.gender}</Text>


                            </View>
                            <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>
                    {stateIsValidGender == false ? <Text style={{ color: 'red' }}>Select Valid Gender</Text> : null}
                </View>



                <View style={{ marginTop: '5%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Bio</Text>
                    <TextInput style={{
                        //height: 140,
                        textAlignVertical: 'top',
                        //backgroundColor: "red"

                    }} multiline={true}
                        numberOfLines={4}
                        selectionColor={COLORS.whiteFFFFFF}
                        underlineColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidBio(true)
                            setStateData({
                                ...stateData, bio: text
                            })
                        }} />
                    {stateIsValidBio == false ? <Text style={{ color: 'red' }}>Enter Valid Bio</Text> : null}
                </View>

                <View style={{
                    alignItems: 'center',

                    marginTop: '15%'
                }}>
                    {/* {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> : */}
                    <Button1 text="UPDATE"
                        onPress={() => { updateAccount() }} />
                    {/* } */}
                </View>


                <View style={{ marginTop: '10%', marginHorizontal: '5%' }}>
                    <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Account</Text>
                </View>


                <TouchableRipple
                    style={{
                        marginTop: '5%', marginHorizontal: '5%',
                        marginBottom: '10%'
                    }}
                    onPress={() => {
                        refRBSheetChangePassword.current.open()
                    }}>
                    <Text style={STYLES.fontSize16_whiteD5D5D5_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Change password</Text>
                </TouchableRipple>






                {/* Bottom sheet Choose Category        */}

                <RBSheet
                    closeOnPressMask={false}

                    dragFromTopOnly={true}
                    height={520}
                    animationType="slide"
                    ref={refRBSheetChooseCategory}

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
                                CHOOSE CATEGORY</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetChooseCategory.current.close()}

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
                                {listSelectCategory.map((item, index) => {
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

                                    listSelectCategory.forEach((item) => {
                                        if (item.checked) {

                                            stateData.chooseCategory.push(item.name + ", ")



                                        }
                                    })
                                    setStateIsValidChooseCategory(true)
                                    setStateDummy(!stateDummy)
                                    console.log(stateData.chooseCategory)

                                    refRBSheetChooseCategory.current.close()
                                }} />
                        </View>




                    </View>
                </RBSheet>


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


                {/* Bottom sheet Gender */}
                <RBSheet
                    // closeOnDragDown={true}
                    closeOnPressMask={false}
                    dragFromTopOnly={true}
                    height={190}
                    animationType="slide"
                    ref={refRBSheetGender}



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
                                SELECT GENDER</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetGender.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginTop: '3%',
                                paddingHorizontal: '2%',
                                justifyContent: 'space-between'
                            }}>
                                {listSelectGender.map((list, index) => {
                                    return (
                                        <View key={index}
                                            style={{
                                                // backgroundColor: COLORS.whiteFFFFFF,
                                                // paddingVertical: '4%',
                                                backgroundColor: COLORS.black101010,
                                                paddingVertical: '4%',

                                                borderBottomWidth: 1,
                                                borderBottomColor: COLORS.whiteFFFFFF
                                                // borderBottomWidth: 1,
                                                // borderBottomColor: COLORS.black000000_20

                                            }}>
                                            <TouchableOpacity style={{
                                                //height: 40,
                                                //flex: 1,
                                                // backgroundColor: 'red',
                                                justifyContent: 'center'
                                            }} onPress={() => {
                                                refRBSheetGender.current.close()
                                                setStateData({
                                                    ...stateData,
                                                    gender: list.value
                                                })
                                                setStateIsValidGender(true)
                                                //isValidSetStatesleep(true)
                                            }}>
                                                <Text style={[{
                                                    alignSelf: 'center',
                                                }, STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>{list.value}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>

                    </View>


                </RBSheet>



                {/* Bottom sheet My change Password */}
                <RBSheet
                    closeOnPressMask={false}
                    //  closeOnDragDown={false}
                    //  closeOnDragDown={true}
                    dragFromTopOnly={true}

                    height={370}
                    animationType="slide"
                    ref={refRBSheetChangePassword}

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
                                UPDATE PASSWORD</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetChangePassword.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>

                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Old Password</Text>
                            <TextInput style={{ height: 35 }}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                value={stateData.oldPassword}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidOldPassword(true)
                                    setStateData({
                                        ...stateData, oldPassword: text
                                    })
                                }} />
                            {stateIsValidOldPassword == false ? <Text style={{ color: 'red' }}>Enter Valid OldPassword</Text> : null}
                        </View>

                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>New Password</Text>
                            <TextInput style={{ height: 35 }}
                                value={stateData.newPassword}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidNewPassword(true)
                                    setStateData({
                                        ...stateData, newPassword: text
                                    })
                                }} />
                            {stateIsValidNewPassword == false ? <Text style={{ color: 'red' }}>Enter Valid New Password</Text> : null}
                        </View>
                        <View style={{ marginTop: '5%' }}>
                            <Text style={STYLES.fontSize12_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Confirm New Password</Text>
                            <TextInput style={{ height: 35 }}
                                value={stateData.confirmPassword}
                                selectionColor={COLORS.whiteFFFFFF}
                                secureTextEntry={true}
                                activeUnderlineColor={COLORS.whiteFFFFFF}
                                onChangeText={(text) => {
                                    setStateIsValidConfirmPassword(true)
                                    setStateData({
                                        ...stateData, confirmPassword: text
                                    })
                                }} />
                            {stateIsValidConfirmPassword == false ? <Text style={{ color: 'red' }}>Enter Valid Confirm Password</Text> : null}
                            {stateIsValidPasswordConfirmPassword == false ? <Text style={{ color: 'red' }}>Password and  Confirm Password
                                are not same</Text> : null}
                        </View>

                        <View style={{
                            marginHorizontal: '5%', marginTop: '15%',
                            marginBottom: '5%', //backgroundColor: 'red',


                        }}>
                            <Button1 text="UPDATE"
                                onPress={() => { update() }}
                            />
                        </View>


                    </View>
                </RBSheet>








                {/* Bottom sheet camera        */}
                <RBSheet
                    closeOnPressMask={false}
                    //  closeOnDragDown={false}
                    height={220}
                    animationType="slide"
                    ref={refRBSheetCamera}
                    dragFromTopOnly={true}
                    //  closeOnDragDown={true}
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
                    <View style={{
                        justifyContent: 'space-evenly', flex: 1,
                        paddingHorizontal: '5%'
                    }}>
                        {/* <Text style={STYLES.fontSize19_grey1C1939_Arial_400}>Add Photo! </Text> */}
                        <TouchableOpacity onPress={() => { imageTakeFromCamera() }}>
                            <Text style={STYLES.fontSize19_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                Take Photo Camera </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { imageTakeFromGallery() }}>
                            <Text style={STYLES.fontSize19_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                Take Photo Gallery </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => refRBSheetCamera.current.close()}>
                            <Text style={STYLES.fontSize19_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Cancel </Text>
                        </TouchableOpacity>
                    </View>
                </RBSheet>
                {/* snack new password confirm password        */}
                {/* <Snackbar style={{ backgroundColor: COLORS.black000000 }}
                    visible={visibleSnackbar}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}>
                    <Text style={STYLES.fontSize12_whiteFFFFFF_Nunito_Bold}>
                        New Password and Confirm Password are not same,so password does not change
                    </Text>
                </Snackbar> */}
            </ScrollView >
        </SafeAreaView >
    );
};






const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    containerStyle: {
        padding: 20,
        width: "70%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.green10CFA3,
        alignItems: 'center',
        borderRadius: 18,
        zIndex: 2
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default Account;



const style = StyleSheet.create({
    input: {
        //height: 40,

        //  backgroundColor: 'red'
        //backgroundColor: COLORS.black000000,
        //  height: "100%",
        // padding: 5
    },

})