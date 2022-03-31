
import React, { useState, useEffect, useRef } from 'react';

import {
    View, ScrollView, StyleSheet,
    SafeAreaView
} from 'react-native';
import { TouchableRipple, Text, Modal } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import { Appbar } from 'react-native-paper';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NavigationContainer } from '@react-navigation/native';


const CELL_COUNT = 4;
const Verification = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    const [stateIsValidOTPCode, setStateIsValidOTPCode] = useState(true)

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = {
        padding: 20,
        width: "70%",
        alignSelf: 'center',
        // borderWidth: 1,
        //borderColor: COLORS.green10CFA3,
        alignItems: 'center',
        // borderRadius: 18
    };

    const verify = () => {


        console.log(value)


        if (value.length == 4) {
            setStateIsValidOTPCode(true)
        }

        if (value.length != 4) {
            //  console.log(stateData.password + 'password')
            setStateIsValidOTPCode(false)
        }



        if (value.length == 4) {
            navigation.navigate("UpdatePassword")
        }
    }





    return (

        <SafeAreaView style={STYLES.withoutpaddingcontainer}>

            <Appbar.Header style={{
                backgroundColor: COLORS.black101010,

                //alignItems: 'center'
            }}>
                <Appbar.BackAction
                    onPress={() =>
                        navigation.goBack()} />
                <Appbar.Content title="VERIFICATION"
                    titleStyle={{
                        alignSelf: 'center',

                    }}
                    style={{
                        marginLeft: '-10%'

                    }} />


            </Appbar.Header>

            <View style={{
                flex: 1,
                //backgroundColor: 'red',
                marginHorizontal: "5%"
            }}>


                <View style={{ marginTop: '20%' }}>

                    <CodeField
                        ref={ref}
                        {...prop}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            value == '' ?

                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>



                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>
                                : <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>

                                    {symbol || (isFocused ? <Cursor /> : null)}

                                </Text>

                        )}
                    />
                </View>


                {stateIsValidOTPCode == false ? <Text style={{ color: 'red', marginTop: '5%' }}>Enter Valid OTP Code </Text> : null}




                <View style={{
                    alignItems: 'center',
                    flex: 1,// backgroundColor: 'red',
                    justifyContent: 'flex-end',
                    marginBottom: '15%'

                }}>

                    <Button1 text="VERIFY"
                        onPress={() => { verify() }} />
                </View>

            </View>




            {/* MODAL VERIFICATION SUCESSFULL        */}


            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <SvgXml xml={Svgs.circleTick} />

                <View style={{ marginTop: '7%', width: '50%' }}>
                    <Text style={[STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                    { textAlign: 'center' }]}>Verification SUCESSFULL</Text>
                </View>



                <TouchableRipple style={{
                    marginTop: '10%',
                    borderWidth: 1,
                    borderColor: COLORS.green10CFA3,
                    alignItems: 'center',
                    paddingHorizontal: '5%',
                    paddingVertical: '4%',
                    borderRadius: 60,
                    width: '75%', alignSelf: 'center'
                }} onPress={() => { navigation.navigate("Login1") }}>
                    <Text style={STYLES.fontSize18_green18D287_MADE_TOMMY_Medium_PERSONAL_USE_Medium}>
                        Login Now
                    </Text>

                </TouchableRipple>
            </Modal>
        </SafeAreaView>
    );
};

export default Verification;



const styles = StyleSheet.create({
    //   root: {flex: 1, padding: 20,backgroundColor:'green'},

    codeFieldRoot: {
        width: '90%', alignSelf: 'center',
        //backgroundColor: 'red'
        marginTop: '5%'
    },
    cell: {
        width: 60,

        height: 50,
        lineHeight: 48,
        fontSize: 30,
        // borderWidth: 2,
        //borderRadius: 5,
        borderBottomColor: COLORS.whiteFFFFFF,
        textAlign: 'center',
        marginTop: '6%',
        borderBottomWidth: 1
        //backgroundColor:'orange'
    },
    focusCell: {
        borderColor: '#000',
    },
});