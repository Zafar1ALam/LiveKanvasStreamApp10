import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableRipple, Text, Modal, Appbar, TextInput, FAB, } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import HeaderLeftArrowText from '../comp/HeaderLeftArrowText';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';


const Chat = ({ navigation }) => {
    const [chatFlatlist, setChatFlatlist] = useState([
        {
            id: 1,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 2,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 3,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 4,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 5,
            name: "Jessica",
            time: "2 hours",
            image: ""
        }, {
            id: 6,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 7,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 8,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 9,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
        {
            id: 10,
            name: "Jessica",
            time: "2 hours",
            image: ""
        }, {
            id: 11,
            name: "Jessica",
            time: "2 hours",
            image: ""
        },
    ])
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.black101010
            }}>

            <Appbar.Header style={{
                backgroundColor: COLORS.black101010,

                //alignItems: 'center'
            }}>
                <Appbar.BackAction
                    onPress={() =>
                        navigation.goBack()} />
                <Appbar.Content title="CHAT"
                    titleStyle={[{
                        alignSelf: 'center',
                        marginLeft: '-20%'

                    }, STYLES.fontSize26_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular]}
                    style={{}} />


            </Appbar.Header>
            <View style={{

                marginTop: '2%',
                marginBottom: '3%'
            }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // style={{
                    //     marginTop: '7%', marginRight: '-3%'
                    // }}
                    data={chatFlatlist}
                    renderItem={({ item }) => {
                        return (

                            <View style={{
                                height: 70,
                                marginHorizontal: "5%",
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderBottomColor: COLORS.grey707070_24
                            }}>
                                <View style={{ //backgroundColor: "red"
                                }}>
                                    <Image
                                        style={{
                                            //resizeMode: 'contain',
                                            borderWidth: 1,
                                            borderRadius: 50,
                                            borderColor: COLORS.redE22641,
                                            height: 39.9, width: 39.9
                                        }}

                                        source={require('../utilities/images/humanBeing.png')} />

                                </View>

                                <View style={{
                                    flexDirection: 'row', alignItems: "center",
                                    flex: 1, marginLeft: '5%'
                                }}>
                                    <Text style={[{ marginRight: '7%' },
                                    STYLES.fontSize18_whiteFFFFFF_Nunito_Bold]}>{item.name}</Text>

                                </View>



                                <Text style={[{


                                }, STYLES.fontSize12_whiteFFFFFF_Nunito_Bold_55]}>{item.time}</Text>

                            </View>

                        )
                    }}
                    keyExtractor={(item) => item.id}

                />
                <FAB

                    color={COLORS.whiteFFFFFF}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    onPress={() => navigation.navigate("SelectUserToChat")}
                />

            </View>



        </SafeAreaView>
    );
};

export default Chat;



const styles = StyleSheet.create({
    fab: {
        backgroundColor: COLORS.redE22641,
        position: 'absolute',
        margin: 16,
        // right: 0,
        // bottom: 0,
        bottom: '10%',
        right: '0%'
    },
})