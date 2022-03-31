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
import ChooseInterest from './ChooseInterest';
const DefineYourSelf = ({ navigation }) => {
    const [stateCreator, setStateCreator] = useState(true);
    return (
        <SafeAreaView style={STYLES.withoutpaddingcontainer}>



            <Appbar.Header style={{
                backgroundColor: COLORS.black101010,

                //alignItems: 'center'
            }}>
                <Appbar.BackAction
                    onPress={() =>
                        navigation.goBack()} />
                <Appbar.Content title="Define Your Self"
                    titleStyle={{
                        alignSelf: 'center',
                        marginLeft: '-10%'

                    }}
                    style={{}} />


            </Appbar.Header>


            <View style={{
                flex: 0.65, //backgroundColor: 'green',
                justifyContent: 'flex-end'
            }}>

                <TouchableRipple style={{
                    paddingHorizontal: '10%',
                    backgroundColor: stateCreator ? COLORS.redE22641 : COLORS.black101010,
                    paddingVertical: "12%",
                    alignSelf: 'center',
                    borderRadius: 13,
                    borderColor: COLORS.redE22641,
                    justifyContent: 'center',
                    borderWidth: 1,
                    alignItems: 'center',
                    marginBottom: '5%'
                }} onPress={() => { setStateCreator(true) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <SvgXml xml={Svgs.vedio} style={{ marginRight: '3%' }} />
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Creator</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple style={{
                    paddingHorizontal: '10%',
                    backgroundColor: stateCreator ? COLORS.black101010 : COLORS.redE22641,
                    paddingVertical: "12%",
                    alignSelf: 'center',
                    borderRadius: 13,
                    borderWidth: 1,
                    borderColor: COLORS.redE22641,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '5%'
                }} onPress={() => { setStateCreator(false) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <SvgXml xml={Svgs.pause} style={{ marginRight: '3%' }} />
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Viewer</Text>
                    </View>
                </TouchableRipple>
            </View>
            <View style={{
                flex: 0.35,// backgroundColor: 'pink',
                justifyContent: 'flex-end',

            }}>
                <View style={{
                    alignItems: 'center',
                    marginBottom: '10%'

                }}>
                    {/* {stateActivitityIndicator ?
                                <ActivityIndicator animating={stateActivitityIndicator} color={COLORS.green0DC1A7} /> : */}
                    <Button1 text="CONTNUE"
                        onPress={() => { navigation.navigate("ChooseInterest") }} />
                    {/* } */}
                </View>
            </View>



        </SafeAreaView>
    );
};

export default DefineYourSelf;