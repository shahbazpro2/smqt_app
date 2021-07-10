import React, { useState } from 'react'
import { View } from 'react-native';
import { screenHeight, screenWidth } from './../../components/CommonFun';
import SalaatsSelect from './../../components/SalaatsSelect';
import AdditionButton from './../../components/AdditionButton';
import NumBoard from './../../components/NumBoard';
import { useDispatch } from 'react-redux';
import { ScrollOnOff } from './../../redux/Actions/index';


const AdditionComp = () => {
  const dispatch=useDispatch()
  const [showNumBoard, setShowNumBoard] = useState(false)
  const funShowNumBoard = () => {
    dispatch(ScrollOnOff(showNumBoard))
    setShowNumBoard(!showNumBoard);
  }
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          marginTop: screenHeight / 2,
          position: 'absolute',
          paddingLeft: (4 * screenWidth) / 100,
          paddingRight: (4 * screenWidth) / 100,
          alignItems: 'center',

        }}
      >
        {console.log('addcomp')}
        <SalaatsSelect />
        <AdditionButton showNumBoard={showNumBoard} funShowNumBoard={funShowNumBoard} />
      </View>
      {showNumBoard && <NumBoard />}
    </>
  )
}

export default React.memo(AdditionComp)
