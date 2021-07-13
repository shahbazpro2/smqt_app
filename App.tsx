import React from 'react';
import { Provider } from 'react-redux';
import Store  from './redux/Store';
import Main from './Main';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'urdu': require('./assets/fonts/Jameel_Noori_Nastaleeq_Regular.ttf'),
    'arabic': require('./assets/fonts/AlQalamQuranMajeed1.ttf')
  });
  return (
    <Provider store={Store}>
      {fontsLoaded && <Main />}
      
    </Provider>
  );
}
