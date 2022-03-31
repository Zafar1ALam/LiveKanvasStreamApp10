import * as React from 'react';
import STYLES from '../STYLES'
import { TextInput, useTheme, Text } from 'react-native-paper';
import COLORS from '../utilities/colors/Color'
const TextInputwithoutSVG = props => {

    return (
        <>
            <Text style={STYLES.fontSize16_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular}>{props.text}</Text>
            <TextInput
                disabled={props.disabled}
                keyboardType={props.keyboardType}
                style={[STYLES.fontSize14_whiteFFFFFF_MADE_TOMMY_Regular_PERSONAL_USE_Regular,
                {

                    //alignSelf: props.alignSelf,
                    height: 50,
                    //paddingVertical: '10%',
                    //backgroundColor: COLORS.whiteFFFFFF
                    //backgroundColor: 'red'
                }]}
                //activeUnderlineColor="green"

                underlineColor={COLORS.whiteFFFFFF}
                placeholderTextColor={COLORS.whiteFFFFFF}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                onChangeText={props.onChangeText}
                selectionColor={COLORS.whiteFFFFFF}
                activeUnderlineColor={COLORS.whiteFFFFFF}

            />
        </>
    );
};

TextInputwithoutSVG.propTypes = {

};

export default TextInputwithoutSVG;