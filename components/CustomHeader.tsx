import React, { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Dimensions, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { headerTypes } from './../redux/Reducers/index';
import { setHeaderValue } from './../redux/Actions/index';
const screenHeight = Math.round(Dimensions.get('screen').height);
const screenWidth = Math.round(Dimensions.get('screen').width);
interface Props {
  opacity: number;
  navigation: any;
}
let stHeight = 0;
if (StatusBar.currentHeight) {
  stHeight = StatusBar.currentHeight;
}
const CustomHeader = ({ opacity, navigation }: Props) => {
  const headerHeight = useSelector<headerTypes, headerTypes['headerHeight']>(
    (state) => state.headerHeight
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderValue(false));
  }, []);
  const { headerText } = styles;
  return (
    <>
    {console.log('custom header')}
      <View
        style={{
          width: '100%',
          backgroundColor: '#009200',
          zIndex: 1,
          height: headerHeight,
          opacity: opacity,
          position: 'absolute',
        }}
      ></View>
      <View
        style={{
          width: '100%',
          height: headerHeight - stHeight,
          marginTop: stHeight,
          position: 'absolute',
          zIndex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: (4 * screenWidth) / 100,
          paddingRight: (4 * screenWidth) / 100,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: '#fff',
            opacity: 1,
            zIndex: 1,
          }}
        >
          Salaat
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, color: '#fff', paddingRight: 5 }}>
            Login
          </Text>
          <View
            style={{
              width: (9.975 * screenWidth) / 100,
              height: (4.601 * screenHeight) / 100,
              borderRadius: 41 / 2,
              borderWidth: 1,
              borderColor: '#009200',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesome name='user-circle' size={(9.367 * screenWidth) / 100} color='#fff' />
          </View>
        </View>
        </TouchableOpacity>
        
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  headerText: {},
});
export default CustomHeader;
