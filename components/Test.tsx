import React from 'react'
import { Text } from 'react-native';

const Test = ({opacity,navigation,headerh}:any) => {
    
    return (
        <Text>test
            {console.log('test',opacity)}
        </Text>
    )
}

export default React.memo(Test)
