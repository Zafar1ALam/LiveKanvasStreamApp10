import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView,
    FlatList, Dimensions, KeyboardAvoidingView
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator, Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';
import RBSheet from 'react-native-raw-bottom-sheet';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Appbar } from 'react-native-paper';
import Video from 'react-native-video';
import SmallButton from '../comp/SmallButton';
import SmallButtontextsize8 from '../comp/SmallButtontextsize8';
import OrangeButton from '../comp/OrangeButton';
import OrangeButtonVectoriconText from '../comp/OrangeButtonVectoriconText';
import HeaderLeftArrowText from '../comp/HeaderLeftArrowText';
import LeftIconTextRightIcon from '../comp/LeftIconTextRightIcon';
import { NavigationContainer } from '@react-navigation/native';
import HeaderLeftArrowCenterText from '../comp/HeaderLeftArrowCenterText';
import TextInputwithoutSVG from '../comp/TextInputwithoutSVG'

const PaymentSettings = ({ navigation }) => {



    const [stateCardHolderName, setStateCardHolderName] = useState('')

    const [stateCardNo, setStateCardNo] = useState('')
    const [stateDate, setStateDate] = useState('')
    const [stateCVV, setStateCVV] = useState('')


    const [stateIsValidCardHolderName, setStateIsValidCardHolderName] = useState(true);
    const [stateIsValidCardNo, setStateIsValidCardNo] = useState(true);
    const [stateIsValidCVV, setStateIsValidCVV] = useState(true);
    const [stateIsValidDate, setStateIsValidDate] = useState(true);

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);



    const [stateDataBaseDate, setStateDataBaseDate] = useState()



    const update = () => {



        if (stateCardNo == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCardNo(false)



        }
        if (stateCardHolderName == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidCardHolderName(false)

        }

        if (stateDate == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidDate(false)
        }
        if (stateCVV == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidCVV(false)
        }


        if (stateCardNo != '' && stateCardHolderName != ''
            && stateDate != '' && stateCVV != ''
        ) {

            console.log("all vald record")
            //navigation.navigate("AccountSetting")
            navigation.goBack()


        }


    }

    var z;
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);



        let date = new Date();
        date = selectedDate
        // console.log(date)
        if (date != undefined) {
            let year = date.getFullYear();
            let month = (date.getMonth() + 1).toString().padStart(2, "0");
            let day = date.getDate().toString().padStart(2, "0");

            let q = year + '-' + month + '-' + day
            console.log(typeof (year + '-' + month + '-' + day))

            setStateDate(day + "-" + month + "-" + year)


            setStateIsValidDate(true)



        }
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010,
            paddingHorizontal: '7%',
            paddingVertical: '2%'
        }}>

            <HeaderLeftArrowCenterText text="PAYMENT SETTINGS"
                onPress={() => {
                    navigation.goBack()
                }} />

            <View style={{ marginTop: '15%' }}>
                <TextInputwithoutSVG
                    text="Card Number"
                    keyboardType="numeric"
                    onChangeText={(text) => {
                        setStateCardNo(text)
                        setStateIsValidCardNo(true)

                    }} />
                {stateIsValidCardNo == false ? <Text style={{ color: 'red' }}>Enter Valid Card Number</Text> : null}

            </View>
            <View style={{ marginTop: '7%' }}>
                <TextInputwithoutSVG
                    text="Card Holder Name"
                    onChangeText={(text) => {
                        setStateCardHolderName(text)
                        setStateIsValidCardHolderName(true)

                    }} />
                {stateIsValidCardHolderName == false ? <Text style={{ color: 'red' }}>Enter Valid Card Holder Number</Text> : null}

            </View>


            <View style={{
                flexDirection: 'row',
                marginTop: '7%', justifyContent: 'space-between'
            }}>
                <View style={{ flex: 0.45 }}>

                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Expiry Date</Text>
                    <TouchableRipple style={{
                        borderBottomColor: COLORS.whiteFFFFFF,
                        borderBottomWidth: 1, paddingBottom: '10%',
                        justifyContent: 'flex-end', height: 50
                    }} onPress={showDatepicker}>
                        <Text style={[{},
                        STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}>
                            {stateDate}
                        </Text>
                    </TouchableRipple>
                    {stateIsValidDate == false ? <Text style={{ color: 'red' }}>Enter Valid Expiry Date</Text> : null}

                </View>
                <View style={{ flex: 0.45 }}>
                    <TextInputwithoutSVG
                        text="CVV"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            setStateCVV(text)
                            setStateIsValidCVV(true)

                        }} />
                    {stateIsValidCVV == false ? <Text style={{ color: 'red' }}>Enter Valid CVV</Text> : null}

                </View>
            </View>




            <View style={{
                flex: 1,
                alignItems: 'center',
                marginBottom: '12%',
                justifyContent: 'flex-end',

            }}>

                <Button1 text="UPDATE"
                    onPress={() => { update() }} />
                {/* } */}

            </View>



            {
                show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )
            }
        </SafeAreaView >
    );
};

PaymentSettings.propTypes = {

};

export default PaymentSettings;