import React, { useState, useEffect } from 'react';

import { Image, View, TextInput, ScrollView } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
const GreyButton = props => {
    return (
        <TouchableRipple style={{


            alignItems: 'center',
            paddingHorizontal: '5%',
            paddingVertical: '1%',
            borderRadius: 40,
            backgroundColor: COLORS.grey939393,
            justifyContent: 'center'
        }} onPress={props.onPress}>
            <Text style={STYLES.fontSize10_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                {props.text}
            </Text>

        </TouchableRipple>
    );
};

GreyButton.propTypes = {

};

export default GreyButton;