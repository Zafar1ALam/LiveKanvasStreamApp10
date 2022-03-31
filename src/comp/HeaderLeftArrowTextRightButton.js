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

const HeaderLeftArrowTextRightButton = props => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>

                <TouchableRipple style={{
                    marginRight: '10%',
                    paddingHorizontal: '2%',
                    paddingVertical: '2%'
                }}
                    onPress={props.leftarrowpress}>
                    <SvgXml xml={Svgs.leftArrowWhite} />
                </TouchableRipple>
                <Text style={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{props.text}</Text>
            </View>
            <TouchableRipple style={{
                alignItems: 'center',
                paddingHorizontal: '3%',
                paddingVertical: '1%',
                borderRadius: 60,
                backgroundColor: COLORS.redE22641,
                justifyContent: 'center'
            }} onPress={props.onPress}>
                <Text style={STYLES.fontSize11_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                    {props.buttonText}
                </Text>

            </TouchableRipple>
        </View>
    );
};

HeaderLeftArrowTextRightButton.propTypes = {

};

export default HeaderLeftArrowTextRightButton;