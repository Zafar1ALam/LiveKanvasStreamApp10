import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Dimensions } from "react-native";
import COLORS from './utilities/colors/Color';



const STYLES = StyleSheet.create({


    container: {
        flex: 1,


        paddingHorizontal: '5%',
        paddingVertical: '5%',
        //  height: '100%',
        backgroundColor: COLORS.black101010,
        // backgroundColor: 'red'
    },
    withoutpaddingcontainer: {
        flex: 1, //width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        backgroundColor: COLORS.black101010
    },
    // fontSize25_000000_Roboto_Regular_38: {
    //     fontSize: 30,
    //     fontFamily: 'Roboto-Regular',
    //     //color: '#1C1A1A'
    //     // color: COLORS.black000000_38
    // },//

    fontSize29_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium: {
        fontSize: 29,
        fontFamily: 'MADE TOMMY Medium_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize26_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 26,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.green14CCEF,

    },
    fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 26,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize25_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 25,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.redE22641,

    },
    fontSize25_whiteFFFFFF_Archivo_Bold: {
        fontSize: 25,
        fontFamily: 'Archivo-Bold',

        color: COLORS.whiteFFFFFF,

    },
    fontSize22_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 22,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.redE22641,

    },
    fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 21,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize20_whiteFFFFFF_Archivo_Bold: {
        fontSize: 20,
        fontFamily: 'Archivo-Bold',

        color: COLORS.whiteFFFFFF,

    },
    fontSize20_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 20,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize19_whiteFFFFFF_Archivo_Bold: {
        fontSize: 19,
        fontFamily: 'Archivo-Bold',

        color: COLORS.whiteFFFFFF,

    },
    fontSize19_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 19,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize18_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Medium_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize18_whiteFFFFFF_Nunito_Bold: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',

        color: COLORS.whiteFFFFFF,

    },

    fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize18_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 18,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.redE22641,

    },
    fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 17,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 16,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize16_whiteD5D5D5_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 16,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteD5D5D5

    },
    fontSize15_whiteFFFFFF_Archivo_Bold: {
        fontSize: 15,
        fontFamily: 'Archivo-Bold',

        color: COLORS.whiteFFFFFF,

    },

    fontSize10_whiteFFFFFF_Archivo_Bold: {
        fontSize: 12,
        fontFamily: 'Archivo-Bold',

        color: COLORS.whiteFFFFFF,

    },

    fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize14_grey99999F_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 14,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.grey99999F,

    },
    fontSize13_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 13,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize13_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular_47: {
        fontSize: 13,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
        color: COLORS.whiteFFFFFF_47
    },
    fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.green14CCEF,

    },
    fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize12_greyA1A1A1_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 12,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.greyA1A1A1,

    },

    fontSize12_whiteFFFFFF_Nunito_Bold_55: {
        fontSize: 12,
        fontFamily: 'Nunito-Bold',

        color: COLORS.whiteFFFFFF_55,

    },
    fontSize11_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 11,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize10_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 11,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize10_whiteFFFFFF_Archivo_Regular: {
        fontSize: 10,
        fontFamily: 'Archivo-Regular',

        color: COLORS.whiteFFFFFF,

    },
    fontSize10_greyA3A3A3_Archivo_Regular: {
        fontSize: 10,
        fontFamily: 'Archivo-Regular',

        color: COLORS.greyA3A3A3,

    },
    fontSize9_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 9,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    fontSize8_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
        fontSize: 8,
        fontFamily: 'MADE TOMMY Regular_PERSONAL USE',

        color: COLORS.whiteFFFFFF,

    },
    // fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular: {
    //     fontSize: 21,
    //     fontFamily: 'MADE TOMMY Regular_PERSONAL USE',
    //     //fontWeight: "4",
    //     color: COLORS.whiteFFFFFF,

    // },



});

export default STYLES;