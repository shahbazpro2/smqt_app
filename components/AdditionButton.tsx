import React from 'react'
import {
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { screenHeight, screenWidth, touchAbleOpacity, getExactSizeHeight, getExactSizeWidth } from './CommonFun';

interface Props {
    showNumBoard: Boolean
    funShowNumBoard: () => void
}


function AdditionButton({ funShowNumBoard, showNumBoard }: Props) {

    return (
        <TouchableOpacity activeOpacity={touchAbleOpacity} onPress={() => funShowNumBoard()} >
            {console.log('additionBtn')}
            <View
                style={{
                    height: getExactSizeHeight(50),
                    width: getExactSizeWidth(50),
                    backgroundColor: '#fff',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <MaterialCommunityIcons name='plus' style={showNumBoard ? styles.rotate : null} size={getExactSizeWidth(50)} color='#009200' />
            </View>
        </TouchableOpacity>
    )


}
const styles = StyleSheet.create({
    rotate: {
        transform: [{ rotate: '315deg' }],

    }

})

export default AdditionButton
