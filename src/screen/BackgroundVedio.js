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
const BackgroundVedio = ({ navigation }) => {
    const refRBSheetAddComment = useRef();
    const refRBSheetAddAmount = useRef();
    const refRBSheetReload = useRef();
    const refRBSheetReloadBucks = useRef();
    const [stateVideo, setStateVedio] = useState({
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnail: 'https://baconmockup.com/300/200/',
        text: "by David Bowie"
    })


    const [listUpcomingRecent, setListUpcomingRecent] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Title"
        },])


    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    stateVideo.uri
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010
        }} >


            <Video
                source={{ uri: stateVideo.uri }}
                style={styles.backgroundVideo}
                muted={true}
                repeat={true}
                resizeMode={"cover"}
                rate={1.0}
            //controls={true}
            // style={{
            //     alignSelf: 'center',
            //     width: Dimensions.get('window').width - 30,
            //     height: Dimensions.get('window').width * (9 / 16),
            //     backgroundColor: 'black',
            // }}
            // ignoreSilentSwitch={"obey"}
            />


            <TouchableRipple style={{
                marginTop: '10%', flex: 0.07, flexDirection: 'row',
                width: '70%', alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.grey464646_40, paddingHorizontal: '5%',
                paddingVertical: '2%', borderRadius: 40
            }}
                onPress={() => { navigation.goBack() }}>

                <>
                    <View style={{
                        width: '20%', height: '90%',
                        //   backgroundColor: 'yellow'
                    }}>
                        <Image
                            style={{ width: '100%', height: '100%', flex: 1 }}
                            source={require('../utilities/images/humanbeing1.png')} />
                    </View>
                    <View style={{
                        marginLeft: '10%', flex: 1,
                        //backgroundColor: 'pink'
                    }}>
                        <View>
                            <Text style={STYLES.fontSize13_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                STELLLA USER </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <SvgXml xml={Svgs.bitCoinYellow} />
                            <Text style={STYLES.fontSize9_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>1000</Text>
                        </View>

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        //  backgroundColor: 'orange'
                    }}>
                        <SvgXml xml={Svgs.backgrpoundWhitePlusBackHeightWidth14} />
                    </View>
                </>
            </TouchableRipple>

            <View style={{
                flex: 1, //backgroundColor: 'red',
                width: "90%", alignSelf: 'center',
                justifyContent: 'flex-end'
            }}>

                <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
                    <SmallButton backgroundColor={COLORS.redE22641} text="David" />
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>this is the comment</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
                    <SmallButton backgroundColor={COLORS.green0DC147} text="David" />
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>this is the comment</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginBottom: '4%' }}>
                    <SmallButton backgroundColor={COLORS.purpleA90DC1} text="David" />
                    <View style={{ marginLeft: '5%' }}>
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>this is the comment</Text>
                    </View>

                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                //  backgroundColor: 'green',
                alignItems: 'flex-end',
                marginBottom: '7%',
                width: "80%",
                alignSelf: 'center',
                justifyContent: 'space-between'
            }}>

                <TouchableRipple style={{
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    borderRadius: 100,
                    backgroundColor: COLORS.black000000_40
                }} onPress={() => refRBSheetAddComment.current.open()}>
                    <SvgXml xml={Svgs.backgroundVideoChatIcon} />
                </TouchableRipple>
                <TouchableRipple style={{
                    height: 43,
                    width: 43,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    backgroundColor: COLORS.black000000_40
                }}
                    onPress={() => refRBSheetAddAmount.current.open()}>
                    <SvgXml xml={Svgs.backgroundideoDollarIcon} />
                </TouchableRipple>
                <TouchableRipple style={{
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    borderRadius: 100,
                    backgroundColor: COLORS.black000000_40
                }} onPress={onShare}>
                    <SvgXml xml={Svgs.backgroundVideoGoRoghtIcon} />
                </TouchableRipple>
                <TouchableRipple style={{
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    borderRadius: 100,
                    backgroundColor: COLORS.black000000_40
                }} >
                    <SvgXml xml={Svgs.backgroundVideoPlusIcon} />
                </TouchableRipple>
                <TouchableRipple style={{
                    paddingHorizontal: '4%',
                    paddingVertical: '4%',
                    borderRadius: 100,
                    backgroundColor: COLORS.black000000_40
                }}
                    onPress={() => refRBSheetReload.current.open()}>
                    <SvgXml xml={Svgs.backgroundVedioReloadIcon} />
                </TouchableRipple>


            </View>



            {/* Bottom sheet Add Comment */}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}

                height={140}
                animationType="slide"
                ref={refRBSheetAddComment}

                customStyles={{
                    wrapper: {
                        //backgroundColor: 'rgba(0,0,0,0.84)',
                        backgroundColor: "transparent"

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
                        onPress={() => refRBSheetAddComment.current.close()}

                    >
                        <SvgXml xml={Svgs.cross} />
                    </TouchableRipple>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 0.9 }}>
                            <TextInputwithoutSVG
                                placeholder="Add Comment"
                            //    text="Add Comment"
                            />
                        </View>

                        <TouchableRipple style={{
                            borderRadius: 50,
                            height: 29.4, width: 29.4, justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.redE22641,
                            alignSelf: 'flex-end'
                        }} onPress={() => refRBSheetAddComment.current.close()}>
                            <SvgXml xml={Svgs.chatSendArrow} />
                        </TouchableRipple>
                    </View>
                </View>
            </RBSheet>

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
                        // backgroundColor: 'rgba(0,0,0,0.84)',
                        backgroundColor: "transparent"

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
                                placeholder="Add Amount"
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



            {/* Bottom sheet Reload */}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}

                height={290}
                animationType="slide"
                ref={refRBSheetReload}

                customStyles={{
                    wrapper: {
                        //  backgroundColor: 'rgba(0,0,0,0.84)',
                        backgroundColor: "transparent"

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
                        onPress={() => refRBSheetReload.current.close()}

                    >
                        <SvgXml xml={Svgs.cross} />
                    </TouchableRipple>

                    <View style={{
                        width: '30%',
                        // marginBottom: "2%"
                    }}>
                        <SmallButton text="Reload"
                            onPress={() => {
                                refRBSheetReload.current.close()
                                refRBSheetReloadBucks.current.open()
                            }} />
                    </View>

                    <View style={{ width: '100%', height: "100%" }}>
                        <Image resizeMode='contain'
                            style={{ width: '100%', height: '100%' }}
                            source={require('../utilities/images/bottomSheetReload.png')} />
                    </View>

                </View>
            </RBSheet>



            {/* Bottom sheet Reload Bucks*/}
            <RBSheet
                closeOnPressMask={false}
                //  closeOnDragDown={false}
                //  closeOnDragDown={true}
                dragFromTopOnly={true}

                height={290}
                animationType="slide"
                ref={refRBSheetReloadBucks}

                customStyles={{
                    wrapper: {
                        //  backgroundColor: 'rgba(0,0,0,0.84)',
                        backgroundColor: "transparent"

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
                        onPress={() => refRBSheetReloadBucks.current.close()}

                    >
                        <SvgXml xml={Svgs.cross} />
                    </TouchableRipple>

                    <View style={{
                        width: '30%',
                        // marginBottom: "2%"
                    }}>
                        <SmallButton text="0"
                            onPress={() => { refRBSheetReloadBucks.current.close() }} />
                    </View>

                    <View style={{ width: '100%', height: "70%" }}>
                        <Image resizeMode='contain'
                            style={{ width: '100%', height: '100%' }}
                            source={require('../utilities/images/bottomSheetReloadBucks.png')} />
                    </View>

                    <Button1 text="Reload Bucks"
                        onPress={() => { refRBSheetReloadBucks.current.close() }} />

                </View>
            </RBSheet>
        </SafeAreaView>
    );
};

BackgroundVedio.propTypes = {

};

export default BackgroundVedio;


const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
});