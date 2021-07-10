import React from 'react'
import { Text, View } from 'react-native';
import { getExactSizeWidth, screenWidth } from '../../../components/CommonFun';
import RecitCard from './RecitCard';
import { FontAwesome5 } from '@expo/vector-icons';

const Reciting = ({ navigation }: any) => {
    const icons1 = <>
        <FontAwesome5 name='kaaba' size={getExactSizeWidth(65)} color='#009200' />
        <FontAwesome5
            name='arrow-right'
            size={getExactSizeWidth(25)}
            color='#009200'
            style={{ padding: 5 }}
        />
        <FontAwesome5 name='quran' size={getExactSizeWidth(50)} color='#009200' />
    </>
    const icons2 = <>
        <FontAwesome5
            name='cloud-rain'
            size={getExactSizeWidth(70)}
            color='#009200'
            style={{ paddingRight: 15 }}
        />

        <FontAwesome5 name='coins' size={getExactSizeWidth(55)} color='#009200' />
    </>
    const icons3 = <>
        <FontAwesome5 name='clock' size={getExactSizeWidth(65)} color='#009200' />
        <FontAwesome5
            name='map-marker-alt'
            size={getExactSizeWidth(25)}
            color='#009200'
            style={{ padding: 5, paddingTop: 45 }}
        />
        <FontAwesome5 name='globe' size={getExactSizeWidth(65)} color='#009200' />
    </>
    const icons4 = <>
        <FontAwesome5 name='male' size={getExactSizeWidth(70)} color='#009200' />
        <FontAwesome5
            name='heart'
            size={getExactSizeWidth(25)}
            color='#009200'
            style={{ padding: 5 }}
        />
        <FontAwesome5
            name='hand-holding-heart'
            size={getExactSizeWidth(60)}
            color='#009200'
        />
    </>
    return (
        <>
        {console.log('reciting')}
            <Text style={{ textAlign: 'center', fontSize: getExactSizeWidth(22), marginTop: 50 }}>
                Important Basics of Reciting
            </Text>
            <Text style={{ textAlign: 'center', color: '#707070' }}>
                Read once any time
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginLeft: (4 * screenWidth) / 100,
                    marginRight: (4 * screenWidth) / 100,
                    marginTop: 20
                }}
            >
                <RecitCard navigation={navigation} link={"Basics1"} title={"ALLAH'S ENJOIN TO HIS PEOPLE"} icons={icons1} />
                <RecitCard navigation={navigation} link={"Basics1"} title={"BLESSINGS & BENEFITS"} icons={icons2} />
                <RecitCard navigation={navigation} link={"Basics1"} title={"TIMES & PLACES"} icons={icons3} />
                <RecitCard navigation={navigation} link={"Basics4"} title={"RESPECTS & ETIQUETTE"} icons={icons4} />
            </View>
        </>
    )
}

export default React.memo(Reciting)
