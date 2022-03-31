import React, { useState, useEffect, useMemo, useRef } from 'react';

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

const Home = ({ navigation }) => {

    const [stateVideo, setStateVedio] = useState({
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        thumbnail: 'https://baconmockup.com/300/200/',
        text: "by David Bowie"
    })

    const [stateTrending, setStateTrending] = useState({
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        thumbnail: 'https://baconmockup.com/300/200/',
        text: "by David Bowie"
    })


    const [stateVideoRun, setStateVideoRun] = useState(false)


    const [listSpecialForYou, setListSpecialForYou] = useState([
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



    const header = useMemo(() => {
        return (
            <Appbar.Header style={{
                backgroundColor:
                    COLORS.black101010,

                justifyContent: 'center'
            }}>

                <Appbar.Content title="Home" titleStyle={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular} />

                <Appbar.Action icon={() =>
                    <TouchableRipple
                        style={{
                            alignItems: 'center', borderRadius: 100, paddingVertical: '20%',
                            paddingHorizontal: '30%'
                        }}
                        onPress={() => { navigation.navigate("Chat") }}>
                        <SvgXml xml={Svgs.homeFirstActionIcon}

                        />
                    </TouchableRipple>} />
                <Appbar.Action icon={() =>
                    <TouchableRipple
                        style={{
                            alignItems: 'center', borderRadius: 100, paddingVertical: '20%',
                            paddingHorizontal: '30%'
                        }}
                        onPress={() => { navigation.navigate("Notifications") }}>
                        <SvgXml xml={Svgs.ringIcon}

                        />
                    </TouchableRipple>} />
                <Appbar.Action

                    icon={() =>
                        <TouchableRipple
                            style={{
                                alignItems: 'center', borderRadius: 100, paddingVertical: '20%',
                                paddingHorizontal: '30%'
                            }}
                        //onPress={() => { navigation.navigate("Notifications") }}
                        >
                            <SvgXml xml={Svgs.searchIcon}

                            />
                        </TouchableRipple>} />
            </Appbar.Header>

        )
    }, [])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010
        }} >

            {header}
            <ScrollView>
                <View style={{
                    marginHorizontal: '5%'
                }}>

                    {stateVideoRun ?
                        <Video source={{ uri: stateVideo.uri }}

                            controls={true}
                            resizeMode={'contain'}
                            style={{
                                alignSelf: 'center',
                                width: Dimensions.get('window').width - 30,
                                height: Dimensions.get('window').width * (9 / 16),
                                backgroundColor: 'black',
                            }}
                        />
                        :
                        <Card style={{
                            //   backgroundColor: 'green',

                            height: 200,



                            // width: 85,
                            marginVertical: '4%',
                            borderRadius: 20,


                        }} onPress={() => {

                        }}
                        >

                            <Image
                                source={{ uri: stateVideo.thumbnail }} style={{
                                    flex: 1, borderRadius: 16,
                                    borderWidth: 1,
                                    height: '100%',
                                    width: '100%'
                                }} />

                            <TouchableRipple style={{
                                position: 'absolute',
                                top: '35%', left: '42%',
                                height: 50,
                                width: 50, justifyContent: 'center',
                                alignItems: 'center'
                            }}
                                onPress={() => {
                                    setStateVideoRun(true)
                                }}>
                                <SvgXml xml={Svgs.vedioPauseButton}
                                />

                            </TouchableRipple>


                        </Card>
                    }



                </View>

                <View style={{
                    flexDirection: 'row', marginHorizontal: '5%',
                    justifyContent: 'space-between', marginTop: '5%'
                }}>
                    <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                        Special For You
                    </Text>
                    <SmallButton text="See All" onPress={() => {
                        navigation.navigate("SpecialForYou")
                    }} />

                </View>

                <View style={{ marginHorizontal: '5%' }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}
                        horizontal={true}
                        data={listSpecialForYou}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    width: 90,
                                    height: 150,
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

                <View style={{
                    flexDirection: 'row', marginHorizontal: '5%',
                    justifyContent: 'space-between', marginTop: '5%'
                }}>
                    <Text style={STYLES.fontSize18_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                        Upcoming Recent
                    </Text>
                    <SmallButton text="See All" onPress={() => {
                        navigation.navigate("UpcomingRecent")
                    }} />

                </View>

                <View style={{ marginHorizontal: '5%' }}>
                    <FlatList style={{
                        marginTop: '5%',
                    }}
                        horizontal={true}
                        data={listUpcomingRecent}
                        renderItem={({ item }) => {
                            return (

                                <View style={{
                                    width: 90,
                                    height: 150,
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

                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Trending</Text>
                </View>

                <View style={{
                    marginHorizontal: '5%',

                }}>
                    {/* <Video source={{ uri: stateVideo.uri }}
                    ref={vedioRef}
                    controls={true}
                    resizeMode={'contain'}
                    style={{
                        alignSelf: 'center',
                        width: Dimensions.get('window').width - 30,
                        height: Dimensions.get('window').width * (9 / 16),
                        backgroundColor: 'black',
                    }}
                /> */}
                    <Card style={{
                        //   backgroundColor: 'green',

                        height: 200,



                        // width: 85,
                        marginVertical: '4%',
                        marginBottom: "5%",
                        borderRadius: 20,


                    }} onPress={() => {
                        // navigation.navigate("VedioTitleHere", {

                        //     routeItem: item

                        // });
                    }}
                    >

                        <Image
                            source={{ uri: stateTrending.thumbnail }} style={{
                                flex: 1, borderRadius: 16,
                                borderWidth: 1,
                                height: '100%',
                                width: '100%'
                            }} />

                        <TouchableRipple style={{
                            position: 'absolute',
                            top: '35%', left: '42%',
                            height: 50,
                            width: 50, justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => {
                                // navigation.navigate("VedioTitleHere", {

                                //     routeItem: item

                                // });
                            }}>
                            <SvgXml xml={Svgs.vedioPauseButton}
                            />

                        </TouchableRipple>


                    </Card>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;