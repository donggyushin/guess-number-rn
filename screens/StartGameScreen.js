import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StartGameScreen = () => {
    return <View style={styles.screen}>
        <Text style={styles.text}>Start Game Screen</Text>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1f4068',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'white'
    }
})

export default StartGameScreen