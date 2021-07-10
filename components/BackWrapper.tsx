import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dropdownWh, getExactSizeWidth, screenHeight, screenWidth, touchAbleOpacity } from './CommonFun';

interface Props {
    children: any,
    value: string,
    setCurrentFun: (value: string) => void
}

const BackWrapper = ({ children, value, setCurrentFun }: Props) => {
    const onPress = () => {
        setCurrentFun(value)
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                activeOpacity={touchAbleOpacity}
                style={{
                    height: dropdownWh.height,
                    width: getExactSizeWidth(35),
                    backgroundColor: '#009200',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onPress}
            >
                <MaterialCommunityIcons
                    name='chevron-left'
                    size={getExactSizeWidth(35)}
                    color='#fff'
                />
            </TouchableOpacity>
            {children}
        </View>
    )
}

export default BackWrapper
