import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cajaUno}>Caja 1</Text>
            <Text style={styles.cajaDos}>Caja 2</Text>
            <Text style={styles.cajaTres}>Caja 3</Text>
        </View>
    )
}

export default FlexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    cajaUno: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        padding: 10,
    },
    cajaDos: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        padding: 10,
    },
    cajaTres: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        padding: 10,
    }
})