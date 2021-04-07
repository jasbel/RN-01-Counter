import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, Platform, View } from "react-native"


interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void,
}

const Fab = (props: Props) => {
    
    const {title, position = 'br', onPress} = props;

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={ 0.75 }
                style={[
                    styles.contentFab ,
                    position === 'br'? styles.contentRightFab :  styles.contentLeftFab
                ]}
                onPress={ onPress }
            >
                <View style={styles.fab}>
                    <Text style={styles.textFab}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.contentFab ,
                    position === 'br'? styles.contentRightFab :  styles.contentLeftFab
                ]}
            >
                <TouchableNativeFeedback
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30) }
                    onPress={ onPress }
                >
                    <View style={styles.fab}>
                        <Text style={styles.textFab}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
    contentFab: {
        position: 'absolute',
        bottom: 25,

    },
    contentRightFab: {
        right: 25
    },
    contentLeftFab: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textFab: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});



export default Fab
