import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, ScrollView } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

const SmallButtonCustomBackground = (props) => {
    return (
        <TouchableRipple

            style={[{
                alignItems: 'center',
                paddingHorizontal: '4%',
                paddingVertical: '2%',
                borderRadius: 60,
                backgroundColor: COLORS.redE22641,
                justifyContent: 'center'
            }, { backgroundColor: props.backgroundColor }]} onPress={props.onPress}>
            <Text style={STYLES.fontSize11_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                {props.text}
            </Text>

        </TouchableRipple>
    );
};

export default SmallButtonCustomBackground;