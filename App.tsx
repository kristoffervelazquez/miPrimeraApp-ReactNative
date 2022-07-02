import React from 'react'
import { SafeAreaView } from 'react-native'
// import CounterScreen from './src/screens/CounterScreen'
// import HolaMundoScreen from './src/screens/HolaMundoScreen'
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen'
// import DimensionesScreen from './src/screens/DimensionesScreen'
// import FlexScreen from './src/screens/FlexScreen'
// import PositionScreen from './src/screens/PositionScreen'
import TareaScreen from './src/screens/TareaScreen'


const App = () => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            {/* <HolaMundoScreen />
             <CounterScreen /> */}
            {/* <BoxObjectModelScreen /> */}
            {/* <DimensionesScreen /> */}
            {/* <PositionScreen /> */}
            {/* <FlexScreen /> */}
            <TareaScreen />
        </SafeAreaView>
    )
}

export default App