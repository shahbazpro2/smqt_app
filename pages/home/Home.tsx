import React, { useState, useEffect } from 'react';
import {
    StatusBar,
    View,
    Text,
    ImageBackground
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderHeight, setNavigation } from '../../redux/Actions';
import CustomHeader from './../../components/CustomHeader';
import HomeScrollView from './HomeScrollView';
import GlobalReads from './GlobalReads';
import { screenHeight } from './../../components/CommonFun';
import { headerTypes } from './../../redux/Reducers/index';
import AdditionComp from './AdditionComp';
import LocationComp from './LocationComp';
import Reciting from './reciting/Reciting';
import SalaatsList from './SalaatsList/SalaatsList';
const Home = ({ navigation }: any) => {

    const headerh = useSelector<headerTypes, headerTypes['headerHeight']>(
        (state) => state.headerHeight
    );
    const headerHeight = useHeaderHeight();
    const dispatch = useDispatch();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        dispatch(setNavigation(navigation))
        dispatch(setHeaderHeight(headerHeight));
    }, []);
    const setOpacityFun = (op: number) => {
        console.log('op')
        setOpacity(op)
    }

    return (

        <View>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.3)' />
            <CustomHeader opacity={opacity} navigation={navigation} />
            <HomeScrollView screenHeight={screenHeight} opacity={opacity} setOpacityFun={setOpacityFun} >
                <ImageBackground
                    source={require('../../assets/home/spiritual.jpg')}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: screenHeight + 1,
                        alignItems: 'center',
                    }}
                >
                    <GlobalReads headerh={headerh} />
                    <AdditionComp />
                    <LocationComp />
                </ImageBackground>
                <Reciting />
                <SalaatsList  />
            </HomeScrollView>


        </View>
    );
};
export default Home;
