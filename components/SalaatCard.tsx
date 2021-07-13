import React, { useState, useCallback } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import NextsBtn from '../components/NextsBtn';
import { getExactSizeWidth, getExactSizeHeight, getExactSize, colors } from './CommonFun';
import { headerTypes } from './../redux/Reducers/index';
import { useSelector } from 'react-redux';

const SalaatCard = ({ salaat }: any) => {
  const navigation: any = useSelector<headerTypes, headerTypes['navigation']>(
    (state) => state.navigation
  );
  const [salData, setSaldata] = useState<any[]>([])

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      {salData.map((s, i) => {
        return (
          <View key={i} style={{ marginBottom: getExactSize(10) }}>
            {s?.img !== "" && s?.img && <>
              <TouchableOpacity onPress={() => navigation.navigate('Details', { id: s.id, index: i + 1 })}>
                <Image
                  resizeMode='cover'
                  source={s.img} //{{uri: s.img}} //{require(`${s.img}`)}
                  style={{
                    height: undefined, width: undefined, aspectRatio: 1.6, resizeMode: 'cover', borderRadius: getExactSize(10)
                  }}
                />
                <View style={{ backgroundColor: 'rgba(00,00,00 ,0.05)', borderBottomLeftRadius: getExactSize(10), borderBottomRightRadius: getExactSize(10), top: getExactSize(-10), zIndex: -1 }}>
                  <View style={{
                    flexDirection: 'row',
                    width: getExactSizeWidth(185),
                    height: getExactSizeHeight(60),
                    overflow: 'hidden',
                    top: getExactSize(10),
                    padding: getExactSize(6),
                  }}>
                    <Text style={{ fontWeight: 'bold' }}>
                      {i + 1 + '. '}
                    </Text>
                    <Text style={{ fontWeight: 'bold', paddingRight: getExactSize(25) }} numberOfLines={2}>
                      {s.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: getExactSize(12), fontWeight: 'bold', color: colors.midGray, marginTop: 0, margin: getExactSize(5), }}>{s.reads}</Text>
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
