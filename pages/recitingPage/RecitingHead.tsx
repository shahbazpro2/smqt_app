import React, { useContext } from 'react'
import { View, TouchableOpacity, StatusBar, Image, Text, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { getExactSizeWidth,getExactSize, screenHeight, colors } from './../../components/CommonFun';
import { headerTypes } from './../../redux/Reducers/index';
import { useSelector } from 'react-redux';
const stusHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 0;

const RecitingHead = () => {
    const navigation: any = useSelector<headerTypes, headerTypes['navigation']>(
        (state) => state.navigation
    );
    return (
        <>
        {console.log('recitingHead')}
            <View style={{ height: stusHeight, backgroundColor: colors.green }} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: colors.green, borderBottomWidth: 5 }}>
                    <Image source={require('../../assets/home/AllahsEnjoin1.png')} style={styles.img} />
                    <Text style={{ maxWidth: `${getExactSizeWidth(51.3)}%`, fontSize: getExactSize(20), color: colors.green, padding: getExactSize(10), textAlign: 'center', fontWeight: 'bold', fontFamily: 'urdu', textAlignVertical: 'center' }}>اللہ تعالیٰ کااپنے بندوں کو حکم</Text>
                    <Image source={require('../../assets/home/AllahsEnjoin2.png')} style={styles.img} />
                </View>
                <View style={{ alignSelf: 'center', top: (10.774 * screenHeight) / 100, zIndex: 1, position: 'absolute' }}>
                    <Fontisto name='caret-down' color={colors.green} size={getExactSize(30)} />
                </View>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: (11.223 * screenHeight) / 100,
        resizeMode: 'contain',
        flex: 1,
    }
})

export default RecitingHead

