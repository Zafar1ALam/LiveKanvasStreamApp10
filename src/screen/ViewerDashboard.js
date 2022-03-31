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

const ViewerDashboard = ({ navigation }) => {







    const [listMyRecentWatchedVideos, setListMyRecentWatchedVideos] = useState([
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

    const [listMyRecentWatchedAudios, setListMyRecentWatcheSAudios] = useState([
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
            backgroundColor: COLORS.black101010
        }} >

            <Appbar.Header style={{ backgroundColor: COLORS.black101010 }}>

                <Appbar.Content title="Viewer Dashboard" titleStyle={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular} />

                <Appbar.Action icon={() =>
                    <TouchableRipple
                        style={{ alignItems: 'center' }}
                        onPress={() => { navigation.navigate("CreatorDashboard") }}>
                        <SvgXml xml={Svgs.chaticon}

                        />
                    </TouchableRipple>} />

            </Appbar.Header>

            <ScrollView>
                <View style={{
                    marginHorizontal: '5%',
                    marginTop: '3%'
                }}>

                    <View style={{
                        flexDirection: 'row',


                    }}>


                        <View style={{
                            height: "50%",
                            width: '25%',
                        }}>
                            <Image
                                // resizeMode='contain'
                                style={{
                                    flex: 1,
                                    width: "100%", width: '100%',
                                    borderRadius: 50, borderWidth: 2, borderColor: COLORS.redE22641
                                }}
                                source={require('../utilities/images/humanbeing1.png')} />
                        </View>

                        <View style={{
                            marginLeft: "5%",
                            flex: 1,

                            // backgroundColor: 'pink',
                            justifyContent: 'space-between',
                            marginVertical: '3%'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',


                                //marginTop: '2%'
                            }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={STYLES.fontSize19_whiteFFFFFF_Archivo_Bold}>Username Here</Text>
                                </View>
                                <SmallButtontextsize8
                                    text="Go to Profile"
                                    onPress={() => { navigation.navigate("UserNameHereSettingIcon") }} />

                            </View>
                            <Text style={STYLES.fontSize10_whiteFFFFFF_Archivo_Regular}>🖱 Design ui/ux and Photography 📷 ZihuatanejoDesign ui/ux and Photography 📷 ZihuatanejoDesign ui/ux and Photography 📷 Zihuatanejo</Text>

                        </View>


                    </View>

                </View>


                <View style={{ marginHorizontal: '5%', marginTop: '8%' }}>
                    <Text style={STYLES.fontSize22_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Analytics</Text>
                </View>



                <View style={{
                    marginHorizontal: '5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '7%'
                }}>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Watch Time</Text>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>4 Hr</Text>
                </View>
                <View style={{
                    marginHorizontal: '5%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '3%'
                }}>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Total View</Text>
                    <Text style={STYLES.fontSize17_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>400</Text>
                </View>
                <View style={{ marginHorizontal: '5%', marginTop: '8%' }}>
                    <Text style={STYLES.fontSize22_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>My Recent Watched Videos</Text>
                </View>

                <View style={{ marginHorizontal: '5%' }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}
                        horizontal={true}
                        data={listMyRecentWatchedVideos}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    width: 110,
                                    height: 130,
                                    marginRight: 15,
                                    alignItems: 'center'
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

                <View style={{ marginHorizontal: '5%', marginTop: '8%' }}>
                    <Text style={STYLES.fontSize22_redE22641_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>My Recent Watched Audios</Text>
                </View>

                <View style={{ marginHorizontal: '5%' }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}
                        horizontal={true}
                        data={listMyRecentWatchedAudios}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    width: 110,
                                    height: 110,
                                    marginRight: 15,
                                    alignItems: 'center'
                                }}>

                                    <Image
                                        source={require('../utilities/images/car.png')} style={{
                                            flex: 1, borderRadius: 16,
                                            borderWidth: 1,
                                            width: '100%', height: '100%'
                                        }} />


                                </View>

                            )
                        }}
                        keyExtractor={(item) => item.id}

                    />
                </View>




            </ScrollView>



        </SafeAreaView>
    );
};

export default ViewerDashboard;









