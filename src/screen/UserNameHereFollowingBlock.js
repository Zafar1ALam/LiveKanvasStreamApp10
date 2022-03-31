import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView,
    TouchableOpacity, Alert, SafeAreaView,
    FlatList, Dimensions, KeyboardAvoidingView
} from 'react-native';
import { TouchableRipple, Text, ActivityIndicator, Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import Button1 from '../comp/Button1';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';

import { Appbar } from 'react-native-paper';
import Video from 'react-native-video';
import SmallButton from '../comp/SmallButton';
import GreyButton from '../comp/GreyButton';

const UserNameHereFollowingBlock = ({ navigation }) => {
    const [listExplore, setListExplore] = useState([
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
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000,
            paddingHorizontal: '5%',
            paddingTop: '4%'

        }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <TouchableRipple
                    style={{ paddingHorizontal: '2%', paddingVertical: '2%' }}
                    onPress={() => navigation.goBack()}>
                    <SvgXml xml={Svgs.leftBigArrowWhite} />
                </TouchableRipple>
                <TouchableRipple>
                    {/* <SvgXml xml={Svgs.circleChat} /> */}
                    <SmallButton text="Block" />
                </TouchableRipple>
            </View>


            <View style={{
                flexDirection: 'row',

                height: "15%",
                marginTop: '5%',
                // alignItems: 'center'
            }}>


                <View style={{ //position: 'absolute',

                    height: '60%',
                    width: '20%',
                    backgroundColor: 'green',
                    alignSelf: 'center',
                    borderRadius: 500,



                }}>
                    <Image
                        source={require('../utilities/images/humanBeing.png')}
                        style={{
                            borderRadius: 200,
                            borderColor: COLORS.redE22641,
                            borderWidth: 2,
                            height: "100%",
                            width: '100%'
                        }} />
                </View>

                <View style={{
                    flex: 1, marginLeft: "5%",
                    justifyContent: 'space-evenly'
                }}>
                    <Text style={STYLES.fontSize25_whiteFFFFFF_Archivo_Bold}>Username Here</Text>
                    <Text style={STYLES.fontSize10_whiteFFFFFF_Archivo_Regular}>🖱 Design ui/ux and Photography 📷 Zihuatanejo, Mexico</Text>
                    <View style={{
                        width: '30%'
                    }}>
                        <GreyButton text="Following" />
                    </View>
                </View>

            </View>


            {/* <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize25_whiteFFFFFF_Archivo_Bold}>Username Here</Text>
            </View>
            <View style={{ marginTop: '2%', alignItems: 'center' }}>
                <Text style={STYLES.fontSize10_whiteFFFFFF_Archivo_Regular}>🖱 Design ui/ux and Photography 📷 Zihuatanejo, Mexico</Text>
            </View> */}

            <View style={{ alignItems: 'center', marginTop: '7%' }}>
                <View style={{
                    flexDirection: 'row'
                    , justifyContent: "space-between",
                    width: '85%',
                }}>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            735
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Video Pasted</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            876
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Follower</Text>
                    </View>
                    <View style={{}}>
                        <Text style={[STYLES.fontSize20_whiteFFFFFF_Archivo_Bold,
                        { textAlign: 'center' }]}>
                            568
                        </Text>
                        <Text style={STYLES.fontSize10_greyA3A3A3_Archivo_Regular}>Following</Text>
                    </View>
                </View>
            </View>

            <View style={{
                marginVertical: '15%',

            }}>
                <FlatList style={{
                    marginBottom: '55%'
                }}
                    horizontal={false}
                    numColumns={3}
                    data={listExplore}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                width: 91,
                                height: 150,
                                marginRight: "8%",
                                alignItems: 'center', marginBottom: '5%'
                            }}>

                                <Image
                                    source={require('../utilities/images/car.png')} style={{
                                        flex: 1, borderRadius: 16,
                                        borderWidth: 1,
                                        width: '100%', height: '100%'
                                    }} />
                                <View style={{ marginTop: '5%' }}>
                                    <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text}</Text>
                                </View>

                            </View>


                        )
                    }}
                    keyExtractor={(item) => item.id}

                />

            </View>
        </SafeAreaView>
    );
};

UserNameHereFollowingBlock.propTypes = {

};

export default UserNameHereFollowingBlock;