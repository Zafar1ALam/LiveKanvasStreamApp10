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
import { createMaterialTopTabNavigator } from
    '@react-navigation/material-top-tabs';
import { Appbar } from 'react-native-paper';
import Video from 'react-native-video';
import SmallButton from '../comp/SmallButton';
import HeaderLeftArrowText from '../comp/HeaderLeftArrowText';



const Tab = createMaterialTopTabNavigator();

const Following = () => {

    const [listFollowing, setListFolllowing] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000
        }}>
            <FlatList style={{
                marginTop: "5%"
            }}
                showsVerticalScrollIndicator={false}
                data={listFollowing}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            flexDirection: 'row',
                            height: 70,
                            borderRadius: 6,
                            paddingVertical: '2%',
                            alignItems: 'center',
                            backgroundColor: COLORS.grey303033,
                            marginBottom: '2%',
                            paddingHorizontal: '3%',

                        }}>

                            <View style={{

                                width: '20%',
                                height: '100%'
                            }}>
                                <Image
                                    source={require('../utilities/images/car.png')} style={{
                                        borderRadius: 4,
                                        width: '100%', height: '100%'
                                    }} />
                            </View>
                            <View style={{ marginLeft: '5%', flex: 1 }}>
                                <Text style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                                { marginBottom: '4%' }]}>{item.text}</Text>
                                <Text style={STYLES.fontSize12_greyA1A1A1_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.text1}</Text>
                            </View>

                            <SmallButton text="Follow Back" />

                        </View>


                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </SafeAreaView>
    )
}


const SuggestedUsers = ({ navigation }) => {
    const [listListSuggestedUsers, setListSuggestedUsers] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel",
            text1: "- Started Following You"
        },])
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000
        }}>
            <FlatList style={{
                marginTop: "5%"
            }}
                showsVerticalScrollIndicator={false}
                data={listListSuggestedUsers}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            flexDirection: 'row',
                            height: 70,
                            borderRadius: 6,
                            paddingVertical: '2%',
                            alignItems: 'center',
                            backgroundColor: COLORS.grey303033,
                            marginBottom: '2%',
                            paddingHorizontal: '3%',

                        }}>

                            <View style={{

                                width: '20%',
                                height: '100%'
                            }}>
                                <Image
                                    source={require('../utilities/images/car.png')} style={{
                                        borderRadius: 4,
                                        width: '100%', height: '100%'
                                    }} />
                            </View>
                            <View style={{ marginLeft: '5%', flex: 1 }}>
                                <Text style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                                { marginBottom: '4%' }]}>{item.text}</Text>

                            </View>

                            <SmallButton text="Follow" />

                        </View>


                    )
                }}
                keyExtractor={(item) => item.id}

            />

        </SafeAreaView>
    )
}


const Reminders = ({ navigation }) => {
    const [listReminders, setListReminders] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d79',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b10',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f611',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d7212',

            thumbnail: 'https://baconmockup.com/300/200/',
            text: "Rebel Rebel - David Bowie",
            time: "02:00 AM"
        },])
    return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black000000,


        }}>

            <FlatList style={{
                marginTop: "5%"
            }}
                showsVerticalScrollIndicator={false}
                data={listReminders}
                renderItem={({ item }) => {
                    return (

                        <View style={{
                            flexDirection: 'row',
                            height: 70,
                            borderRadius: 6,
                            paddingVertical: '2%',
                            alignItems: 'center',
                            backgroundColor: COLORS.grey303033,
                            marginBottom: '2%',
                            paddingHorizontal: '3%',

                        }}>

                            <View style={{

                                width: '20%',
                                height: '100%'
                            }}>
                                <Image
                                    source={require('../utilities/images/car.png')} style={{
                                        borderRadius: 4,
                                        width: '100%', height: '100%'
                                    }} />
                            </View>
                            <View style={{ marginLeft: '5%', }}>
                                <Text style={[STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                                { marginBottom: '4%' }]}>{item.text}</Text>
                                <Text style={STYLES.fontSize13_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular_47}>{item.time}</Text>
                            </View>

                        </View>


                    )
                }}
                keyExtractor={(item) => item.id}

            />



        </SafeAreaView>

    )
}

const Notifications = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.black101010,
            paddingHorizontal: '4%',
            paddingVertical: '4%'
        }} >

            <View
            >
                {/* <Text style={STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notifications</Text> */}
                <HeaderLeftArrowText text="Notifications"
                    onPress={() => { navigation.goBack() }} />
            </View>


            <Tab.Navigator style={{
                //  marginTop: "5%",

            }}
                tabBarOptions={{
                    indicatorStyle: {
                        backgroundColor: COLORS.orangeFF0000,
                        //   width: '100%',
                    },
                    style: { backgroundColor: COLORS.black101010 },


                }}
            >
                <Tab.Screen name="Following" component={Following}
                    options={{

                        tabBarStyle: {

                        },
                        tabBarIndicatorStyle: {
                            COLORS: 'red'
                        },


                        tabBarLabel: ({ focused }) => (

                            <Text style={[STYLES.fontSize15_whiteFFFFFF_Archivo_Bold//, { color: colors.text }
                            ]}>Following</Text>

                        )
                    }}
                />
                <Tab.Screen name="SuggestedUsers" component={SuggestedUsers}
                    options={{
                        //  swipeEnabled: false,

                        tabBarLabel: ({ focused }) => (

                            <Text style={[STYLES.fontSize15_whiteFFFFFF_Archivo_Bold//, { color: colors.text }
                            ]}>Suggested Users</Text>

                        )
                    }} />


                <Tab.Screen name="Reminders" component={Reminders}
                    options={{
                        // swipeEnabled: false,
                        tabBarLabel: ({ focused }) => (

                            <Text style={[STYLES.fontSize15_whiteFFFFFF_Archivo_Bold//, { color: colors.text }
                            ]}>Reminders</Text>

                        )
                    }} />
            </Tab.Navigator>

        </SafeAreaView >
    );
};

Notifications.propTypes = {

};

export default Notifications;