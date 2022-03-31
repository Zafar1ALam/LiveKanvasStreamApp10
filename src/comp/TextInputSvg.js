
import * as React from 'react';
import STYLES from '../STYLES'

import { Text, TextInput } from 'react-native-paper';
import COLORS from '../utilities/colors/Color';
import { SvgXml } from 'react-native-svg';



const TextInputSvg = (props) => {
    return (
        <>
            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{props.text1}</Text>
            <TextInput
                //   activeOutlineColor={COLORS.whiteFFFFFF}
                mode="flat"

                style={[{
                    // backgroundColor: 'red',
                    borderBottomColor: COLORS.whiteFFFFFF,
                    borderWidth: 1,
                    color: COLORS.whiteFFFFFF,
                    height: 50,

                    paddingLeft: '-5%'

                }, STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                { //height: 60, 
                    //backgroundColor: COLORS.whiteFFFFFF
                }]}
                placeholderTextColor={COLORS.whiteFFFFFF_55}
                left={<TextInput.Icon name={() =>
                    <SvgXml xml={props.xml} />}
                />}



                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                selectionColor={COLORS.whiteFFFFFF}
                activeUnderlineColor={COLORS.whiteFFFFFF}

            />
        </>
    );
};

export default TextInputSvg;