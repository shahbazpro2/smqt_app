import React, { useState } from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getExactSizeWidth } from './CommonFun';

const screenHeight = Math.round(Dimensions.get('screen').height);
const screenWidth = Math.round(Dimensions.get('screen').width);

function NumBoard() {
    const [count, setCount] = useState('')

    const countsSet = (read: string) => {
        const val = parseInt(count.concat(read));
        if (val > 1000) {
            setCount('1000')
        } else {
            setCount(count.concat(read))
        }

    }

    const removeCount = () => {
        const val = count.slice(0, -1)
        setCount(val)

    }
    const sendReads = () => {
        console.log(count)
    }
    return (
        <View
            style={{
                width: screenWidth,
                height: (40.64 * screenHeight) / 100,
                bottom: 0,
                position:'absolute',
                flex:1,
                zIndex: 1
            }}
        >
            <View
                style={{
                    width: screenWidth,
                    height: (13 * screenHeight) / 100,
                    backgroundColor: '#fff',
                    //justifyContent: 'center',
                    borderTopRightRadius: getExactSizeWidth(41),
                    borderTopLeftRadius: getExactSizeWidth(41)
                }}
            >
                <Text style={{
                    fontSize: getExactSizeWidth(50),
                    textAlign: 'center',
                    letterSpacing: getExactSizeWidth(15),
                    color: '#414141'
                }}>{count}</Text>
            </View>

            <View style={{
                padding: getExactSizeWidth(10),
                flexDirection: 'row',
                flexWrap: 'wrap',
                backgroundColor: '#F0F7F0',
                borderTopLeftRadius: getExactSizeWidth(41),
                borderTopRightRadius: getExactSizeWidth(41),
                position: 'absolute',
                bottom: 0,
                justifyContent: 'space-evenly'

            }}>
                <TouchableOpacity onPress={() => countsSet('1')} style={styles.btn}

                >
                    <Text style={{
                        fontSize: getExactSizeWidth(50),
                        textAlign: 'center',
                        color: '#414141'
                    }}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('2')} style={styles.btn}>
                    <Text style={{
                        fontSize: getExactSizeWidth(50),
                        textAlign: 'center',
                        color: '#414141'
                    }}>
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('3')} style={styles.btn}>
                    <Text style={styles.text}>
                        3
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendReads()} style={styles.btn}>
                    <FontAwesome name='send' style={{ marginLeft: -getExactSizeWidth(5) }} size={getExactSizeWidth(45)} color='#009200' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('4')} style={styles.btn}>
                    <Text style={styles.text}>
                        4
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('5')} style={styles.btn}>
                    <Text style={styles.text}>
                        5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('6')} style={styles.btn}>
                    <Text style={styles.text}>
                        6
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeCount()} style={styles.btn}>
                    <MaterialCommunityIcons name='backspace-outline' style={{ marginLeft: -getExactSizeWidth(3) }} size={getExactSizeWidth(45)} color='#414141' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('7')} style={styles.btn}>
                    <Text style={styles.text}>
                        7
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('8')} style={styles.btn}>
                    <Text style={styles.text}>
                        8
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('9')} style={styles.btn}>
                    <Text style={styles.text}>
                        9
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => countsSet('0')} style={styles.btn}>
                    <Text style={styles.text}>
                        0
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        margin: getExactSizeWidth(5),
        height: (9 * screenHeight) / 100,
        width: (21 * screenWidth) / 100,
        backgroundColor: '#fff',
        borderRadius: getExactSizeWidth(31),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: getExactSizeWidth(50),
        textAlign: 'center',
        color: '#414141'
    }

})

export default NumBoard
