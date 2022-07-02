import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'


// const { height, width } = Dimensions.get('window');


const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{ ...styles.cajaMorada, width: width * 2 }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.titulo}>W: {width}, H: {height} </Text>
        </View>
    )
}

export default DimensionesScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        // width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b'
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black'
    }
})