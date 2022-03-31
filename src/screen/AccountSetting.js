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

import { Appbar } from 'react-native-paper';
import Video from 'react-native-video';
import SmallButton from '../comp/SmallButton';
import SmallButtontextsize8 from '../comp/SmallButtontextsize8';
import OrangeButton from '../comp/OrangeButton';
import OrangeButtonVectoriconText from '../comp/OrangeButtonVectoriconText';
import HeaderLeftArrowText from '../comp/HeaderLeftArrowText';
import LeftIconTextRightIcon from '../comp/LeftIconTextRightIcon';
import { NavigationContainer } from '@react-navigation/native';


const AccountSetting = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010,
            paddingHorizontal: '5%',
            paddingVertical: '2%'
        }}>

            <HeaderLeftArrowText text="Account Setting"
                onPress={() => navigation.goBack()} />

            <View style={{ marginTop: '10%' }}>
                <LeftIconTextRightIcon xml={Svgs.profileWhiteIcon}
                    text="Update Profile"
                    onPress={() => {
                        navigation.navigate("Account")
                    }} />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.paymentSettings}
                    text="Payment Settings"
                    onPress={() => {
                        navigation.navigate("PaymentSettings")
                    }} />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.profileWhiteIcon}
                    text="Following"
                    onPress={() => {
                        navigation.navigate("Following")
                    }} />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.profileWhiteIcon}
                    text="Followers"
                    onPress={() => {
                        navigation.navigate("Follower")
                    }} />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.watchHistory}
                    text="Watch History"
                    onPress={() => {
                        navigation.navigate("WatchHistory")
                    }} />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.lockWhite}
                    text="Privacy" />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.phoneWhite}
                    text="Contact Us" />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.termsAndConditionWhite}
                    text="Terms and Condition" />
            </View>
            <View style={{ marginTop: '5%' }}>
                <LeftIconTextRightIcon xml={Svgs.termsAndConditionWhite}
                    text="Buy"
                    onPress={() => {
                        navigation.navigate("Buy")
                    }} />
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                marginBottom: '12%',
                justifyContent: 'flex-end'
            }}>


                <TouchableRipple onPress={() => { navigation.navigate("Login") }}
                    style={{ paddingVertical: '3%', paddingHorizontal: '2%' }}>
                    <Text style={STYLES.fontSize25_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Logout</Text>
                </TouchableRipple>
            </View>


        </SafeAreaView >
    );
};

AccountSetting.propTypes = {

};

export default AccountSetting;