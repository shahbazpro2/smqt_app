import React, { useRef } from 'react'
import { dropdownWh, screenWidth } from './CommonFun'
import { Picker } from '@react-native-community/picker';

interface Props {
    value: string,
    nextActive: string,
    setStateFun: (val1: string, val2: string, nextActive: string) => void
    current: string,
    children: any
}
const LocationPicker = ({ children, current, value, nextActive, setStateFun }: Props) => {
    const width = current === 'country' ? (80 * screenWidth) / 100 : (69 * screenWidth) / 100

    const setPickerValue = (itemValue: any) => {
        setStateFun(itemValue.toString(), current, nextActive)
    }

    return (
        <Picker
            selectedValue={value}
            style={{
                width: width,
                backgroundColor: '#fff',
                height: dropdownWh.height,
            }}
            onValueChange={setPickerValue}
        >
            {children}

        </Picker>
    )
}

export default LocationPicker
