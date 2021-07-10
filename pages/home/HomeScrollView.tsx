import React, { useRef, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { headerTypes } from './../../redux/Reducers/index';
let offset = 0;
let stHeight = 0;
if (StatusBar.currentHeight) {
    stHeight = StatusBar.currentHeight;
}
const HomeScrollView = ({ children,opacity, setOpacityFun }: any) => {
    const scrollOnOff = useSelector<headerTypes, headerTypes['scrollOnOff']>(
        (state) => state.scrollOnOff
    );
    const scrollView: any = useRef()
    useEffect(() => {
        if (scrollOnOff === false) {
            scrollView.current.scrollTo({ x: 0, y: 0, animated: true })
        }
    }, [scrollOnOff])
    const onScroll = (e: any) => {
        let currentOffset = e.nativeEvent.contentOffset.y;
        let direction = currentOffset > offset ? 'down' : 'up';
        offset = currentOffset;
        if (direction === 'down' && Math.round(currentOffset) > 0) {
            if (opacity === 0)
                setOpacityFun(1);
        }
        else if (direction === 'up' && Math.round(currentOffset) < stHeight) {
            if (opacity !== 0)
            setOpacityFun(0);
        }
    };
    return (
        <ScrollView ref={scrollView} scrollEnabled={scrollOnOff} onScroll={onScroll} showsVerticalScrollIndicator={false}>
            {console.log('scrollView')}
            {children}
        </ScrollView>
    )
}

export default HomeScrollView
