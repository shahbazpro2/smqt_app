import React from 'react'
import { Text, View } from 'react-native';
import { getExactSize } from '../../../components/CommonFun';
import SalaatCard from './../../../components/SalaatCard';
import { salaat } from './../../../components/Salaats';
import { colors } from './../../../components/CommonFun';

const SalaatsList = () => {
    return (
        <>
            <Text style={{ textAlign: 'center', fontSize: getExactSize(20), marginTop: getExactSize(50) }}>
                Wide Assemblage & Aggregation
            </Text>
            <Text style={{ textAlign: 'center', color: colors.lightGray }}>
                Each having unique impactions, recite your favourite
            </Text>

            <View
                style={{
                    marginTop: getExactSize(30),
                }}
            >
                <SalaatCard salaat={salaat} />
            </View>
        </>
    )
}

export default SalaatsList
