import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getExactSizeWidth, touchAbleOpacity, getExactSizeHeight } from './CommonFun';

function GenderButton() {
    const [state, setState] = useState({ gender: 'unknown', action: false })


    const change = (gen: string) => {
        setState({ action: !state.action, gender: gen })
    }
    const getGenderImage = () => {
        if (state.gender === 'unknown') {
            return <Image
                style={styles.img}
                source={require('../assets/home/unknown.png')}
            />
        } else if (state.gender === 'male') {
            return <Image
                style={styles.img}
                source={require('../assets/home/User_Male_104px.png')}
            />
        } else {
            return <Image
                style={styles.img}
                source={require('../assets/home/Female_User_104px.png')}
            />
        }
    }
    return (
        <View style={styles.content} >
            {
                state.gender !== 'male' &&
                <TouchableOpacity
                    activeOpacity={touchAbleOpacity}
                    style={{ ...styles.btnFloat,top:getExactSizeWidth(-100), display: !state.action ? 'none' : 'flex' }}
                    onPress={() => change('male')}
                >
                    <View style={styles.btnBg}>
                        <Image
                            style={styles.img}
                            source={require('../assets/home/User_Male_104px.png')}
                        />
                    </View>
                </TouchableOpacity>
            }
            {
                state.gender !== 'female' &&
                <TouchableOpacity
                    activeOpacity={touchAbleOpacity}
                    style={{ ...styles.btnFloat,top:getExactSizeWidth(-50), display: !state.action ? 'none' : 'flex' }}
                    onPress={() => change('female')}
                >
                    <View style={styles.btnBg}>
                        <Image
                            style={styles.img}
                            source={require('../assets/home/Female_User_104px.png')}
                        />
                    </View>
                </TouchableOpacity>
            }
            {
                state.gender !== 'unknown' &&
                <TouchableOpacity
                    activeOpacity={touchAbleOpacity}
                    style={{ ...styles.btnFloat,top: state.gender==='male'?getExactSizeWidth(-100):getExactSizeWidth(-50), display: !state.action ? 'none' : 'flex' }}
                    onPress={() => change('unknown')}
                >
                    <View style={styles.btnBg}>
                        <Image
                            style={styles.img}
                            source={require('../assets/home/unknown.png')}
                        />
                    </View>
                </TouchableOpacity>
            }
            <TouchableOpacity  activeOpacity={touchAbleOpacity} onPress={() => setState({ ...state, action: !state.action })}>
                <View style={{ ...styles.btnBg, backgroundColor: '#009200', opacity: 1 }}>
                    {getGenderImage()}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: getExactSizeWidth(-2),
        right: 20
    },
    btnBg: {
        height: getExactSizeHeight(35),
        width: getExactSizeWidth(35),
        borderRadius: getExactSizeWidth(35),
        alignItems: 'center',

    },
    img: {
        width: getExactSizeWidth(30),
        height: getExactSizeHeight(30),
        marginTop:1
    },
    btnFloat: {
        position:'absolute'
    },
})

export default GenderButton
