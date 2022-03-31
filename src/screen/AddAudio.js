import React, { useState, useEffect, useRef } from 'react';

import {
    Image, View, ScrollView, StyleSheet,
    TouchableOpacity, Alert, SafeAreaView, FlatList,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TouchableRipple, Text, Modal, Appbar, TextInput, } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import VideoPlayer from "react-native-video";
import RBSheet from 'react-native-raw-bottom-sheet';

import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import DocumentPicker from 'react-native-document-picker'
import Button1 from '../comp/Button1';
import AntDesign from 'react-native-vector-icons/AntDesign'
const AddAudio = ({ navigation }) => {

    const refRBSheetSelectGenere = useRef()

    const [listSelectGenere, setListSelectGenere] = useState([
        {
            id: 1,
            name: "David Bowie",
            checked: false
        },
        {
            id: 2,
            name: "David Bowie",
            checked: false
        },
        {
            id: 3,
            name: "David Bowie",

            checked: false
        },
        {
            id: 4,
            name: "David Bowie",

            checked: false
        },
        {
            id: 5,
            name: "David Bowie",

            checked: false
        },
        {
            id: 6,
            name: "David Bowie",
            checked: false
        },
        {
            id: 7,
            name: "David Bowie",
            checked: false
        },
        {
            id: 8,
            name: "David Bowie",

            checked: false
        },
        {
            id: 9,
            name: "David Bowie",

            checked: false
        },
        {
            id: 10,
            name: "David Bowie",

            checked: false
        }



    ]);


    const [stateSelectGenere, setStateSelectGenere] = useState([

    ])
    const [stateDummy, setStateDummy] = useState(true)
    const [stateIsValidUploadMusic, setStateIsValidUploadMusic] = useState(true);
    const [stateIsValidUploadCover, setStateIsValidUploadCover] = useState(true);
    const [stateIsValidAddTitle, setStateIsValidAddTitle] = useState(true);
    const [stateIsValidSelectGenere, setStateIsValidSelectGenere] = useState(true);

    const [stateIsValidSelectDescription, setStateIsValidSelectDescription] = useState(true);

    const [stateSongPause, setStateSongPause] = useState("play")
    const [stateData, setStataData] = useState({
        uploadMusic: '',
        uploadCover: '',
        addTitle: '',
        description: '',
    }
    )



    const imageTakeFromGallery = () => {

        console.log('gg')
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            console.log(image.path);
            // if (image != null) {
            setStateIsValidUploadCover(true)
            setStataData({ ...stateData, uploadCover: image.path })

        });
    }



    const containerStyle = {
        padding: 20,
        width: "70%",
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: COLORS.green10CFA3,
        alignItems: 'center',
        borderRadius: 18
    };

    const uploadMusic = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.audio],

            });
            //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res[0].uri));
            console.log(res)

            setStataData({
                ...stateData,
                uploadMusic: JSON.stringify(res[0].uri)
            })
            //Setting the state to show single file attributes
            //  setSingleFile(res);
        } catch (err) {
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                //alert('Canceled from single doc picker');
                {/* MODAL VERIFICATION SUCESSFULL        */ }



            } else {
                //For Unknown Error
                // alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    }
    const post = () => {



        if (stateData.uploadMusic == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUploadMusic(false)



        }
        if (stateData.uploadCover == '') {
            //   console.log(stateData.email + 'emailaddress')
            setStateIsValidUploadCover(false)

        }

        if (stateData.addTitle == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidAddTitle(false)
        }

        if (stateSelectGenere.length == 0) {
            //  console.log(stateData.password + 'password')
            setStateIsValidSelectGenere(false)
        }
        if (stateData.description == '') {
            //  console.log(stateData.password + 'password')
            setStateIsValidSelectDescription(false)
        }
        if (stateData.addTitle != '' && stateData.uploadCover != ''
            && stateData.description != ''
            && stateSelectGenere.length != 0
            && stateData.uploadMusic != '') {
            navigation.navigate("CreatorDashboard")
        }


    }
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
                <Appbar.Content title="ADD AUDIO"
                    titleStyle={{
                        alignSelf: 'center',
                        marginLeft: "-7%"

                    }}
                    style={{
                    }} />


            </Appbar.Header>
            <ScrollView>
                <View style={{
                    marginTop: '2%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: '5%'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.redE22641,
                        height: 100,
                        //backgroundColor: 'red',
                        borderStyle: 'dashed',
                        borderRadius: 13,
                        width: "46%",
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        {stateData.uploadMusic == '' ?
                            <TouchableRipple style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.orangeFF0000,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => {
                                uploadMusic()
                                // DocumentPicker.types.audio
                            }}>
                                <>
                                    <SvgXml xml={Svgs.uploadSvg} style={{ marginRight: "5%" }} />
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Music</Text>
                                </>
                            </TouchableRipple>

                            :
                            <TouchableRipple style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.orangeFF0000,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => {
                                uploadMusic()
                                // DocumentPicker.types.audio
                            }}>
                                <>
                                    <SvgXml xml={Svgs.uploadSvg} style={{ marginRight: "5%" }} />
                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Uploaded Music</Text>
                                </>
                            </TouchableRipple>
                        }

                    </View>



                    <View style={{
                        borderWidth: 1,
                        borderColor: COLORS.redE22641,
                        height: 100,
                        //backgroundColor: 'red',
                        borderRadius: 13,
                        borderStyle: 'dashed',
                        width: "46%",
                        alignItems: 'center',
                        justifyContent: 'center'

                    }}>
                        {stateData.uploadCover == '' ?
                            <TouchableRipple style={{
                                flexDirection: 'row',
                                backgroundColor: COLORS.orangeFF0000,
                                paddingHorizontal: "5%",
                                paddingVertical: '4%',
                                borderRadius: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => { imageTakeFromGallery() }}>
                                <>
                                    <SvgXml xml={Svgs.uploadSvg} style={{ marginRight: "5%" }} />

                                    <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Upload Cover</Text>
                                </>
                            </TouchableRipple>
                            :
                            <>
                                <Image style={{
                                    flex: 1, width: "100%"
                                }}
                                    source={{ uri: stateData.uploadCover }} />

                                <TouchableRipple style={{
                                    flexDirection: 'row',
                                    backgroundColor: COLORS.redE22641,
                                    paddingHorizontal: "5%",
                                    paddingVertical: '4%',
                                    borderRadius: 40,
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    alignItems: 'center'
                                }} onPress={() => { imageTakeFromGallery() }}>
                                    <>
                                        <SvgXml xml={Svgs.uploadSvg} style={{ marginRight: "5%" }} />

                                        <Text style={STYLES.fontSize12_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Uploaded Cover</Text>
                                    </>
                                </TouchableRipple>
                            </>
                        }


                    </View>


                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: '5%', }}>
                    <View style={{ width: '55%' }}>
                        {stateIsValidUploadMusic == false ? <Text style={{ color: 'red' }}>Upload Music</Text> : null}
                    </View>
                    {stateIsValidUploadCover == false ? <Text style={{ color: 'red' }}>Upload Cover</Text> : null}
                </View>

                <View style={{
                    flexDirection: 'row', marginHorizontal: '5%',
                    justifyContent: 'space-between', alignItems: 'center',
                    marginTop: '5%',
                    backgroundColor: COLORS.black303033,
                    borderRadius: 6,
                    paddingHorizontal: '3%',
                    paddingVertical: '2%'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../utilities/images/audioVedioImage.png')}

                            style={{ width: 42, height: 42, marginRight: '4%' }} />
                        <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Rebel Rebel-David Bowie</Text>
                    </View>

                    {stateSongPause == "pause" ?
                        <AntDesign name='pause' color={COLORS.whiteFFFFFF}
                            size={30} onPress={() => {
                                setStateSongPause("play")
                            }} /> :
                        <AntDesign name='play' color={COLORS.whiteFFFFFF}
                            size={30}
                            onPress={() => {
                                setStateSongPause("pause")
                            }} />}


                </View>
                <View style={{ marginHorizontal: '5%', marginTop: '10%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Add Title</Text>
                    <TextInput style={{ height: 40 }}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidAddTitle(true)
                            setStataData({
                                ...stateData, addTitle: text
                            })
                        }} />
                    {stateIsValidAddTitle == false ? <Text style={{ color: 'red' }}>Enter Valid Title</Text> : null}
                </View>



                <View style={{ marginTop: '5%', marginHorizontal: '5%', }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Choose Genre</Text>
                    <TouchableRipple style={{
                        flexDirection: 'row',
                        //backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        minHeight: 40,
                        borderBottomColor: COLORS.whiteFFFFFF
                    }} onPress={() => {
                        setStateSelectGenere([]
                        )
                        refRBSheetSelectGenere.current.open()
                    }}
                    >
                        <>
                            <View style={{
                                flex: 1,
                                // height: 40,
                                justifyContent: 'center'

                            }}>
                                <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectGenere}</Text>
                                {/* <Text style={STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{stateSelectGenere}</Text> */}

                            </View>
                            <SvgXml xml={Svgs.downArrow} style={{ marginRight: '3%' }} />

                        </>
                    </TouchableRipple>
                    {stateIsValidSelectGenere == false ? <Text style={{ color: 'red' }}>Choose Valid Genre</Text> : null}
                </View>


                <View style={{ marginHorizontal: '5%', marginTop: '5%' }}>
                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>Description</Text>
                    <TextInput style={{
                        //height: 140,
                        textAlignVertical: 'top',
                        //backgroundColor: "red"

                    }} multiline={true}
                        numberOfLines={6}
                        selectionColor={COLORS.whiteFFFFFF}
                        activeUnderlineColor={COLORS.whiteFFFFFF}
                        onChangeText={(text) => {
                            setStateIsValidSelectDescription(true)
                            setStataData({
                                ...stateData, description: text
                            })
                        }} />
                    {stateIsValidSelectDescription == false ? <Text style={{ color: 'red' }}>Enter Valid Description</Text> : null}
                </View>

                <View style={{ marginHorizontal: '5%', marginTop: '15%', marginBottom: '15%' }}>
                    <Button1 text="POST"
                        onPress={() => { post() }}
                    />
                </View>




                {/* Bottom sheet Genere        */}

                <RBSheet
                    closeOnPressMask={false}

                    dragFromTopOnly={true}
                    height={520}
                    animationType="slide"
                    ref={refRBSheetSelectGenere}

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
                        <View style={{
                            flexDirection: 'row', justifyContent:
                                'space-between',
                            marginBottom: '5%'
                        }}>
                            <Text style={STYLES.fontSize21_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>
                                CHOOSE GENRE</Text>

                            <TouchableRipple
                                onPress={() => refRBSheetSelectGenere.current.close()}

                                style={{


                                }}>
                                <SvgXml xml={Svgs.cross} />
                            </TouchableRipple>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <View style={{
                                flex: 1, //backgroundColor: 'green',
                                marginVertical: '3%',

                                justifyContent: 'space-between'
                            }}>
                                {listSelectGenere.map((item, index) => {
                                    return (
                                        <View key={index}
                                            style={{

                                                backgroundColor: COLORS.black101010,

                                                borderBottomWidth: 1,
                                                height: 40,
                                                paddingVertical: '2%',
                                                justifyContent: 'center',

                                                borderBottomColor: COLORS.whiteFFFFFF_21


                                            }}>
                                            <TouchableRipple

                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    flex: 1,
                                                    //marginBottom: '3%',
                                                    // backgroundColor: 'green'
                                                }}
                                                onPress={() => {
                                                    if (item.checked == false) {
                                                        item.checked = true
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    else if (item) {
                                                        item.checked = false
                                                            , setStateDummy(!stateDummy)
                                                    }
                                                    // setStataData({
                                                    //     ...stateData,
                                                    // })
                                                    // stateData.addMembers.push(item.name)
                                                }
                                                }>
                                                <>
                                                    <SvgXml xml={item.checked ? Svgs.checkCheckbox
                                                        : Svgs.uncheckCheckbox}
                                                        style={{ marginRight: '5%' }} />
                                                    <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{item.name}</Text>
                                                </>
                                            </TouchableRipple>

                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>
                        <View style={{
                            marginVertical: "3%", justifyContent: 'center',

                        }}>
                            <Button1 text="ADD NOW"
                                onPress={() => {

                                    listSelectGenere.forEach((item) => {
                                        if (item.checked) {
                                            stateSelectGenere.push(item.name + ", ")
                                        }
                                    })
                                    setStateIsValidSelectGenere(true)
                                    setStateDummy(!stateDummy)
                                    console.log(stateData.addMembers)

                                    refRBSheetSelectGenere.current.close()
                                }} />
                        </View>




                    </View>
                </RBSheet>
            </ScrollView>
        </SafeAreaView >
    );
};

export default AddAudio;