import React from 'react'
import { Text, View } from 'react-native';
import { screenWidth } from '../../../components/CommonFun';
import RecitCard from './RecitCard';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, getExactSize } from './../../../components/CommonFun';


const Reciting = () => {
    
    const icons1 = <>
        <FontAwesome5 name='kaaba' size={getExactSize(65)} color={colors.green} />
        <FontAwesome5
            name='arrow-right'
            size={getExactSize(25)}
            color={colors.green}
            style={{ padding: getExactSize(5) }}
        />
        <FontAwesome5 name='quran' size={getExactSize(50)} color={colors.green} />
    </>
    const icons2 = <>
        <FontAwesome5
            name='cloud-rain'
            size={getExactSize(70)}
            color={colors.green}
            style={{ paddingRight: getExactSize(15) }}
        />

        <FontAwesome5 name='coins' size={getExactSize(55)} color={colors.green} />
    </>
    const icons3 = <>
        <FontAwesome5 name='clock' size={getExactSize(65)} color={colors.green} />
        <FontAwesome5
            name='map-marker-alt'
            size={getExactSize(25)}
            color={colors.green}
            style={{ padding: getExactSize(5), paddingTop: getExactSize(45) }}
        />
        <FontAwesome5 name='globe' size={getExactSize(65)} color={colors.green} />
    </>
    const icons4 = <>
        <FontAwesome5 name='male' size={getExactSize(70)} color={colors.green} />
        <FontAwesome5
            name='heart'
            size={getExactSize(25)}
            color={colors.green}
            style={{ padding: getExactSize(5) }}
        />
        <FontAwesome5
            name='hand-holding-heart'
            size={getExactSize(60)}
            color={colors.green}
        />
    </>
    return (
        <>
        {console.log('reciting')}
            <Text style={{ textAlign: 'center', fontSize: getExactSize(22), marginTop: getExactSize(50) }}>
                Important Basics of Reciting
            </Text>
            <Text style={{ textAlign: 'center', color: colors.lightGray }}>
                Read once any time
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginLeft: (4 * screenWidth) / 100,
                    marginRight: (4 * screenWidth) / 100,
                    marginTop: getExactSize(20)
                }}
            >
                <RecitCard link={"RecitingPage"} title={"ALLAH'S ENJOIN TO HIS PEOPLE"} icons={icons1} />
                <RecitCard link={"RecitingPage"} title={"BLESSINGS & BENEFITS"} icons={icons2} />
                <RecitCard link={"RecitingPage"} title={"TIMES & PLACES"} icons={icons3} />
                <RecitCard link={"RecitingPage"} title={"RESPECTS & ETIQUETTE"} icons={icons4} />
            </View>
        </>
    )
}

export default React.memo(Reciting)
