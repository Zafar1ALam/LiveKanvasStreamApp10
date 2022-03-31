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
const ChooseInterest = ({ navigation }) => {

    const refRBSheetChooseCategory = useRef()
    const refRBSheetGender = useRef()
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


    const [state_AS_UserId, setState_AS_UserId] = useState('');



    const [stateSelectGenere, setStateSelectGenere] = useState([

    ])
    const [stateSelectGenereId, setStateSelectGenereId] = useState('');
    const [stateActivitityIndicator, setStateActivityIndicator] = useState(false)
    const [stateIsValidEmail, setStateIsValidEmail] = useState(true);
    const [stateIsValidChooseCategory, setStateIsValidChooseCategory] = useState(true);
    const [stateIsValidProfileTitle, setStateIsValidProfileTitle] = useState(true);

    const [stateIsValidGender, setStateIsValidGender] = useState(true);
    const [stateIsValidBio, setStateIsValidBio] = useState(true);

    const [stateDummy, setStateDummy] = useState(true)
    const [stateData, setStataData] = useState({
        chooseCategory: [],
        profileTitle: '',
        gender: '',
        bio: ''
    }
    )





    const update = () => {



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



        if (stateData.chooseCategory.length != 0 && stateData.profileTitle != ''
            && stateData.gender != '' && stateData.bio != ''
        ) {
            navigation.navigate("TabNavigation1")

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
                    <Appbar.Content title="Choose interest"
                        titleStyle={{
                            alignSelf: 'center',
                            marginLeft: '-10%'

                        }}
                        style={{}} />


                </Appbar.Header>



                <View style={{ paddingHorizontal: '7%' }}>
                    <View style={{ marginTop: '10%' }}>
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

                            setStataData({
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
                    <View style={{ marginTop: '5%' }}>
                        <TextInputSvg
                            text
                            text1="Profile Title"

                            xml={Svgs.T}
                            onChangeText={(text) => {
                                setStateIsValidProfileTitle(true)
                                setStataData({
                                    ...stateData, profileTitle: text
                                })
                            }} />
                        {stateIsValidProfileTitle == false ? <Text style={{ color: 'red' }}>Enter Valid Profile Title</Text> : null}
                    </View>



                    <View style={{ marginTop: '5%', }}>
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



                    <View style={{ marginTop: '5%' }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Bio</Text>
                        <TextInput style={{
                            //height: 140,
                            textAlignVertical: 'top',
                            //backgroundColor: "red"

                        }} multiline={true}
                            numberOfLines={6}
                            selectionColor={COLORS.whiteFFFFFF}
                            underlineColor={COLORS.whiteFFFFFF}
                            activeUnderlineColor={COLORS.whiteFFFFFF}
                            onChangeText={(text) => {
                                setStateIsValidBio(true)
                                setStataData({
                                    ...stateData, bio: text
                                })
                            }} />
                        {stateIsValidBio == false ? <Text style={{ color: 'red' }}>Enter Valid Bio</Text> : null}
                    </View>



                    <View style={{
                        alignItems: 'center',

                        marginTop: '55%'
                    }}>
                        {/* {stateActivitityIndicator ?
                                    <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> : */}
                        <Button1 text="UPDATE"
                            onPress={() => { update() }} />
                        {/* } */}
                    </View>

                </View>

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

                                            stateData.chooseCategory.push(item.name + ", ")



                                        }
                                    })
                                    setStateIsValidChooseCategory(true)
                                    setStateDummy(!stateDummy)
                                    console.log(stateData.addMembers)

                                    refRBSheetChooseCategory.current.close()
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


                    // closeOnPressBack={false}
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
                            <Text style={STYLES.fontSize20_whiteFFFFFF_MADE_TOMMY_Bold_PERSONAL_USE}>
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
                                                setStataData({
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


            </ScrollView>
        </SafeAreaView>
    );
};



export default ChooseInterest;