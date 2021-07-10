import React, { useState, useCallback } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import NextsBtn from '../components/NextsBtn';
import { getExactSizeWidth, getExactSizeHeight } from './CommonFun';

const SalaatCard = ({ navigation, salaat }: any) => {


  const [salData, setSaldata] = useState<any[]>([])

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {salData.map((s, i) => {
        return (
          <View key={i} style={{ marginBottom: 10 }}>
            {s?.img !== "" && s?.img && <>
              <TouchableOpacity onPress={() => navigation.navigate('Details', { id: s.id, index: i + 1 })}>
                <Image
                  resizeMode='cover'
                  source={s.img} //{{uri: s.img}} //{require(`${s.img}`)}
                  style={{
                    height: undefined, width: undefined, aspectRatio: 1.6, resizeMode: 'cover', borderRadius: 10
                  }}
                />
                <View style={{ backgroundColor: 'rgba(00,00,00 ,0.05)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, top: -10, zIndex: -1 }}>
                  <View style={{
                    flexDirection: 'row',
                    width: getExactSizeWidth(185),
                    height: getExactSizeHeight(60),
                    overflow: 'hidden',
                    top: getExactSizeWidth(10),
                    padding: getExactSizeWidth(6),
                  }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {i + 1 + '. '}
                    </Text>
                    <Text style={{ fontWeight: 'bold', paddingRight: getExactSizeWidth(25) }} numberOfLines={2}>
                      {s.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#4a4a4a', marginTop: 0, margin: getExactSizeWidth(5), }}>{s.reads}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>}
          </View>
        );
      })}
      <View style={{ marginTop: getExactSizeWidth(20), marginBottom: getExactSizeWidth(50) }}>
        <NextsBtn items={salaat} itemFun={useCallback((arr: any[]) => setSaldata(arr), [])} />
      </View>
    </View>
  );
}

export default React.memo(SalaatCard);
