import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { getExactSizeWidth, getExactSizeHeight } from '../../../components/CommonFun';
import { headerTypes } from './../../../redux/Reducers/index';
import { useSelector } from 'react-redux';
import { colors, getExactSize } from './../../../components/CommonFun';

const RecitCard = ({ link, icons, title }: any) => {
  const navigation: any = useSelector<headerTypes, headerTypes['navigation']>(
    (state) => state.navigation
);
  return (

    <TouchableOpacity style={{ marginBottom: 11 }} onPress={() => navigation.push(link)}>
      <View
        style={{
          width: getExactSizeWidth(180),
          height: getExactSizeHeight(180),
          //backgroundColor: '#ffffff',
          paddingTop: getExactSize(10),
          borderColor: colors.green,
          borderRadius: getExactSize(10),
          borderWidth: getExactSize(1),
          borderBottomWidth: getExactSize(5),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: getExactSize(20),
          }}
        >
          {icons}
        </View>
        <Text
          style={{
            textAlign: 'center',
            padding: getExactSize(10),
            color: colors.green,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>

  )
}

export default RecitCard
