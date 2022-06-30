import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';

interface Propiedades {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}


const Fab = ({ title, onPress, position = 'br' }: Propiedades) => {

    const ios = () => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={position === 'bl' ? styles.fabLocationBL : styles.fabLocationBR} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={position === 'bl' ? styles.fabLocationBL : styles.fabLocationBR} >
                <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('black', false, 30)}>
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }


    return (Platform.OS === 'ios') ? ios() : android();
}


const styles = StyleSheet.create({
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    fab: {
        backgroundColor: "#5956D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Fab