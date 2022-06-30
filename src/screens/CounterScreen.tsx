import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

const CounterScreen = () => {

    const [contador, setContador] = useState(10);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>


            {/* Botton para incrementar el valor del contador */}
            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => { setContador(contador - 1) }}>

                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>

            {/* Botton para decrementar el valor del contador  */}
            
            <TouchableOpacity
                style={styles.fabLocationBR}
                onPress={() => { setContador(contador + 1) }}>

                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -15
    },
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
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})


export default CounterScreen