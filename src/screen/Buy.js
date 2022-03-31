import React, {
    useState, useEffect, useMemo,


    useRef
} from 'react';


import {
    Share,
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView,
    FlatList, Dimensions, KeyboardAvoidingView
} from 'react-native';
import {
    TouchableRipple, Text,
} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import { Appbar, TextInput } from 'react-native-paper';
import Video from 'react-native-video';
import SmallButton from '../comp/SmallButton';
import RBSheet from 'react-native-raw-bottom-sheet';
import TextInputwithoutSVG from '../comp/TextInputwithoutSVG';
import { NavigationContainer } from '@react-navigation/native';
import HeaderLeftArrowCenterText from '../comp/HeaderLeftArrowCenterText';

const Buy = ({ navigation }) => {
    const refRBSheetAddAmount = useRef();
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010,
            paddingHorizontal: '5%', paddingVertical: '3%'
        }}>

            <HeaderLeftArrowCenterText text="BUY"
                onPress={() => navigation.goBack()} />

            <View style={{ flex: 0.4, marginTop: '5%' }}>
                <Image resizeMode='contain'
                    style={{ width: '100%', height: '100%' }}
                    source={require('../utilities/images/bottomSheetReloadBucks.png')} />
            </View>

            <TouchableRipple style={{
                marginTop: '1%',

                alignItems: 'center',
                paddingHorizontal: '5%',
                paddingVertical: '4%',
                borderRadius: 10,
                backgroundColor: COLORS.redE22641,
                width: '50%', alignSelf: 'center'
            }} onPress={() => refRBSheetAddAmount.current.open()}>
                <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Medium_PERSONAL_USE_Medium}>
                    Reload Bucks
                </Text>

            </TouchableRipple>
            <View style={{
                flex: 0.6, //backgroundColor: 'green'
            }}>
                <View style={{
                    width: '20%', marginTop: '20%',
                    //backgroundColor: 'orange'
                }}>
                    <SmallButton text="Reload" />
                </View>

                <View style={{
                    width: '100%', height: "70%",// backgroundColor: 'pink',
                    // paddingTop: -140
                }}>
                    <Image resizeMode='contain'
                        style={{ width: '100%', height: '80%', flex: 1 }}
                        source={require('../utilities/images/bottomSheetReload.png')} />
                </View>
            </View>


            {/* Bottom sheet Add Amount */}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}

                height={140}
                animationType="slide"
                ref={refRBSheetAddAmount}

                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.84)',
                        //backgroundColor: "transparent"

                    },
                    container: {
                        //justifyContent: "center",
                        //  alignItems: "center"
                        backgroundColor: COLORS.black101010,
                        // marginHorizontal: '2%',
                        borderWidth: 1,
                        width: "95%",
                        paddingVertical: '5%',
                        paddingHorizontal: '2%',
                        alignSelf: "center",
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderColor: COLORS.redE22641
                    },
                    // draggableIcon: {
                    //     backgroundColor: "#000"
                    // }
                }}



            >
                <View style={{ flex: 1, paddingHorizontal: '4%' }}>
                    <TouchableRipple style={{
                        alignSelf: 'flex-end',

                    }}
                        onPress={() => refRBSheetAddAmount.current.close()}

                    >
                        <SvgXml xml={Svgs.cross} />
                    </TouchableRipple>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.9 }}>
                            <TextInputwithoutSVG
                                keyboardType="numeric"
                                text="Add Amount"
                            />
                        </View>

                        <TouchableRipple style={{
                            borderRadius: 50,
                            height: 29.4, width: 29.4, justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.redE22641,
                            alignSelf: 'flex-end'
                        }}
                            onPress={() => refRBSheetAddAmount.current.close()}
                        >
                            <SvgXml xml={Svgs.chatSendArrow} />
                        </TouchableRipple>

                        <TouchableRipple style={{
                            borderRadius: 50,
                            height: 29.4, width: 29.4, justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.redE22641,
                            alignSelf: 'flex-end'
                        }} onPress={() => {
                            refRBSheetAddAmount.current.close()
                            navigation.navigate("PaymentSettings")
                        }}>
                            <SvgXml xml={Svgs.backgroundVideoPlusIconheightwidth13} />
                        </TouchableRipple>
                    </View>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

Buy.propTypes = {

};

export default Buy;