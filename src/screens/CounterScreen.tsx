import React, { useState } from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import Fab from '../components/Fab';

const CounterScreen = () => {

    const [contador, setContador] = useState(10);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>


            {/* Button para decrementar el valor del contador  */}
            <Fab title='-1' onPress={() => { setContador(contador - 1) }} position={'bl'} />

            {/* Button para incrementar el valor del contador */}
            <Fab title='+1' onPress={() => { setContador(contador + 1) }} />

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
    }
})


export default CounterScreen