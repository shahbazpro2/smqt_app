import React from 'react'
import { Text, View } from 'react-native';
import { screenWidth } from '../../../components/CommonFun';
import SalaatCard from './../../../components/SalaatCard';
import { salaat } from './../../../components/Salaats';

const SalaatsList = ({navigation}:any) => {
    return (
        <>
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 50 }}>
                Wide Assemblage & Aggregation
            </Text>
            <Text style={{ textAlign: 'center', color: '#707070' }}>
                Each having unique impactions, recite your favourite
            </Text>

            <View
                style={{
                    marginTop: 30,
                }}
            >
                <SalaatCard navigation={navigation} salaat={salaat} />
            </View>
        </>
    )
}

export default SalaatsList
