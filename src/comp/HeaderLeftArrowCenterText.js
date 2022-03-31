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

const HeaderLeftArrowCenterText = props => {
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center',

        }}>
            <TouchableRipple onPress={props.onPress} style={{
                paddingHorizontal: '3%', paddingVertical: '3%',
                alignSelf: "flex-start"
            }}>
                <SvgXml xml={Svgs.leftArrowWhite} style={{}} />
            </TouchableRipple>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{props.text}</Text>
            </View>
        </View>
    );
};

HeaderLeftArrowCenterText.propTypes = {

};

export default HeaderLeftArrowCenterText;