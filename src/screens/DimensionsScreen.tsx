import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

// const {width, height} = Dimensions.get('window'); 
export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <Text>Dimensiones ascreen</Text>
    
                <View style={ {
                    ...styles.violetBox,
                    width: width * 0.5
                } }/>
                <View style={ styles.orangeBox }/>
    
            </View>
            <Text >W: { width }, H: { height }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'red'
    },
    violetBox: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%',
        // bottom: 10
    },
    orangeBox: {
        backgroundColor: '#f0a23b',
        width: '50%',
        height: '50%'
    }
});