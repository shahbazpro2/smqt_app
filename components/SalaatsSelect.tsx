import React, {useState} from 'react'
import {
    View
  } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { salaat } from './Salaats';
import { dropdownWh, colors } from './CommonFun';



function SalaatsSelect() {
    const [selectSalaat, setSelectSalaat]= useState('0')
    return (
        <View>
          {console.log('salaatsSelect')}
              <Picker
                selectedValue={selectSalaat}
                style={{
                  width: dropdownWh.width,
                  backgroundColor: colors.white,
                  height: dropdownWh.height
                }}
                onValueChange={(itemValue, itemIndex) =>
                setSelectSalaat(itemValue.toString())}
              >
                <Picker.Item label='Select salaat...' value='0'/>
                {salaat.map(s=>
                <Picker.Item key={s.id} label={`${s.id}. ${s.name}`} value={s.id.toString()} />
                )}
              </Picker>
            </View>
    )
}

export default React.memo(SalaatsSelect)
