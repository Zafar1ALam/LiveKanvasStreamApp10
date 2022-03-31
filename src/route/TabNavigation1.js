import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import STYLES from '../STYLES';
import { View, Text } from 'react-native';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';
import Svgs from '../utilities/svgs/Svgs';
import Home from '../screen/Home';
import Explore from '../screen/Explore';
import Channels from '../screen/Channels';
import CreatorDashboard from '../screen/CreatorDashboard';
import UserNameHereSettingIcon from '../screen/UserNameHereSettingIcon';



const Tab = createBottomTabNavigator();
const TabNavigation1 = () => {

    return (
        // <View style={{
        //     flex: 1,// backgroundColor: COLORS.black000000
        // }}>

        <Tab.Navigator
            //    initialRouteName='HomeHomeSearch'
            screenOptions={{
                headerShown: false,
                // tabBarBackground: COLORS.black000000
                tabBarStyle: {
                    backgroundColor: COLORS.black101010,
                    //backgroundColor: 'red'
                    height: 50,
                    //backgroundColor: 'red',
                    //     // paddingVertical: 25
                    paddingBottom: 5,
                    //     paddingHorizontal: '3%',
                    //     paddingTop: 10,
                    //     //    borderColor: COLORS.cylindricalFA4248,
                    //     borderTopWidth: 2,
                    //     borderTopColor: COLORS.cylindricalFA4248,
                    //     borderRightWidth: 2,
                    //     borderRightColor: COLORS.cylindricalFA4248,
                    //     borderLeftWidth: 2,
                    //     borderLeftColor: COLORS.cylindricalFA4248,
                    //     marginTop: 20

                },

            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: ({ focused }) => {
                    //     if (focused) {
                    //         return (
                    //             <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Home</Text>
                    //         )
                    //     } else {
                    //         return (
                    //             <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Home</Text>
                    //         )
                    //     }
                    // },

                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.redhomeLogo} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.homeLogo}
                                />
                            )
                        }

                    }
                }} />
            <Tab.Screen name="Explore" component={Explore}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: ({ focused }) => {
                    //     if (focused) {
                    //         return (
                    //             <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>live</Text>
                    //         )
                    //     } else {
                    //         return (
                    //             <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>live</Text>
                    //         )
                    //     }
                    // },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.redexploreLogo} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.exploreLogo}
                                />
                            )
                        }

                    }
                }} />

            <Tab.Screen name="Channels" component={Channels}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: ({ focused }) => {
                    //     if (focused) {
                    //         return (
                    //             <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Wishlist</Text>
                    //         )
                    //     } else {
                    //         return (
                    //             <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Wishlist</Text>
                    //         )
                    //     }
                    // },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.redchannelsLogo} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.channelsLogo}
                                />
                            )
                        }

                    }
                }} />
            <Tab.Screen name="CreatorDashboard" component={CreatorDashboard}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: ({ focused }) => {
                    //     if (focused) {
                    //         return (
                    //             <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                    //         )
                    //     } else {
                    //         return (
                    //             <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                    //         )
                    //     }
                    // },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.redcreatorDashboardLogo} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.creatorDashboardLogo}
                                />
                            )
                        }

                    }
                }} />

            <Tab.Screen name="UserNameHereSettingIcon" component={UserNameHereSettingIcon}
                options={{
                    tabBarShowLabel: false,
                    // tabBarLabel: ({ focused }) => {
                    //     if (focused) {
                    //         return (
                    //             <Text style={STYLES.fontSize12_green14CCEF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                    //         )
                    //     } else {
                    //         return (
                    //             <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Notes</Text>
                    //         )
                    //     }
                    // },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <SvgXml xml={Svgs.profileredIcon} />
                            )
                        }
                        else {
                            return (
                                <SvgXml xml={Svgs.profileWhiteIcon}
                                />
                            )
                        }

                    }
                }} />




        </Tab.Navigator>
        // </View>

    );
};

export default TabNavigation1;