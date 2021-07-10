import React from 'react'
import { screenHeight, screenWidth } from './../../components/CommonFun';
import LocationSelect from './../../components/LocationSelect';
import GenderButton from './../../components/GenderButton';
import { View } from 'react-native';

const LocationComp = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: screenHeight * 45 / 100,

                paddingLeft: (4 * screenWidth) / 100,
                paddingRight: (4 * screenWidth) / 100,
                alignItems: 'center',


            }}
        >
            {console.log('location')}
            <LocationSelect />
            <GenderButton />

        </View>
    )
}

export default React.memo(LocationComp)
