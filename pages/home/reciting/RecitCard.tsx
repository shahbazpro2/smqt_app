import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { getExactSizeWidth, screenWidth, getExactSizeHeight } from '../../../components/CommonFun';

const RecitCard = ({ navigation, link, icons, title }: any) => {
  return (
   
      <TouchableOpacity style={{ marginBottom: 11 }} onPress={() => navigation.navigate(link)}>
        <View
          style={{
            width: getExactSizeWidth(180),
            height: getExactSizeHeight(180),
            //backgroundColor: '#ffffff',
            paddingTop: 10,
            borderColor: '#009200',
            borderRadius: 10,
            borderWidth: 1,
            borderBottomWidth: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 20,
            }}
          >
            {icons}
          </View>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              color: '#009200',
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
