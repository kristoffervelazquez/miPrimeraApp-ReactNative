import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>BoxObjectModelScreen</Text>
        </View>
    )
}

export default BoxObjectModelScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'red',
    },

    title: {
        fontSize: 30,
        backgroundColor: 'green',
        textAlign: 'center',
        borderWidth: 10,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 10,
    }
})