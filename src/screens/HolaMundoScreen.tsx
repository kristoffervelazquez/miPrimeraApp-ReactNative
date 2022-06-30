import React from 'react'
import { Text, View } from 'react-native'

const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 55,
                textAlign: 'center',
                fontWeight: '900',
                color: 'black'
            }}>Hola Mundo</Text>
        </View>
    )
}

export default HolaMundoScreen