import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { headerTypes } from './../redux/Reducers/index';
export const screenHeight = Math.round(Dimensions.get('screen').height);
export const screenWidth = Math.round(Dimensions.get('screen').width);
export const dropdownWh = {
    width: (75.426 * screenWidth) / 100,
    height: (3.367 * screenHeight) / 100
};
export const touchAbleOpacity = 0.8
export const getExactSizeHeight = (size: any) => {
    const val = (size / 891) * 100;
    return (val * screenHeight) / 100
}
export const getExactSizeWidth = (size: any) => {
    const val = (size / 411) * 100;
    return (val * screenWidth) / 100
}
export const getExactSize = (size: any) => {
    const val = (size / 411) * 100;
    return (val * screenWidth) / 100
}

export const colors = {
    green: '#009200',
    lightGray: '#707070',
    midGray: '#4a4a4a',
    white: '#ffffff',
    black: '#000000'
}