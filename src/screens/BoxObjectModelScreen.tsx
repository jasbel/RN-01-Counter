import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const BoxObjectModelScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <Text
                style={ styles.title }
            >
                Box Model Object
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        padding: 50,
        marginHorizontal: 30,
        fontSize: 20,
        // width: 250,
        borderWidth: 10,
    }
});

export default BoxObjectModelScreen
