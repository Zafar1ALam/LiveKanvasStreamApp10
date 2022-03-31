


import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, ScrollView } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

const OrangeButton = (props) => {
    return (
        <TouchableRipple style={{


            alignItems: 'center',
            paddingHorizontal: '4%',
            paddingVertical: '5%',
            borderRadius: 40,
            backgroundColor: COLORS.orangeFF0000,
            justifyContent: 'center'
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize11_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                {props.text}
            </Text>

        </TouchableRipple>
    );
};

export default OrangeButton;