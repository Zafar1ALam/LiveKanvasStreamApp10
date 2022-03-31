import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, ScrollView } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

const Button1 = (props) => {
    return (
        <TouchableRipple style={{


            alignItems: 'center',
            paddingHorizontal: '5%',
            paddingVertical: '2%',
            borderRadius: 60,
            backgroundColor: COLORS.redE22641,
            width: '50%', alignSelf: 'center'
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium}>
                {props.text}
            </Text>

        </TouchableRipple>
    );
};

export default Button1;