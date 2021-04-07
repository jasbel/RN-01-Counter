import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Fab from '../components/Fab'

const CountScreen = () => {

    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title} >
                Contador: { counter }
            </Text>

            <Fab
                title="-1"
                position='bl'
                onPress={ () => setCounter(counter - 1) }
            />

            <Fab
                title="+1"
                onPress={ () => setCounter(counter + 1) }
            />

            {/* <TouchableOpacity
                style={[styles.contentLeftFab]}
                onPress={ () => setCounter(counter - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.textFab}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {

    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative',
        top: -15
    }
})

export default CountScreen
