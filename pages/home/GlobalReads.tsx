import React from 'react'
import { Text } from 'react-native'
import { screenHeight, getExactSize } from './../../components/CommonFun';
interface Props{
    headerh:number
}
const GlobalReads = ({headerh}:Props) => {
    
    return (
        <Text
        
            style={{
                marginTop: headerh,
                height: (34.5 * screenHeight) / 100,
                width: '100%',
                textAlign: 'center',
                textAlignVertical: 'center',
                color: '#ffffff',
                fontSize: getExactSize(38),
            }}
        >
            {console.log('global')}
            19087134
        </Text>
    )
}

export default React.memo(GlobalReads)
