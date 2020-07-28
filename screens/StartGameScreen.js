import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'

const StartGameScreen = () => {


    const hideKeyboard = () => {
        Keyboard.dismiss()
    }

    return <TouchableWithoutFeedback onPress={hideKeyboard}>
        <View style={styles.screen}>
            <Text style={styles.text}>Start Game!</Text>
            <View style={styles.card}>
                <TextInput keyboardType="numeric" style={styles.textInput} />
                <View style={styles.buttonContainer}>
                    <Button color='white' title="reset" />
                    <Button color='white' title="confirm" />
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1f4068',
        alignItems: 'center',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginVertical: 10,
        marginBottom: 60
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        width: 200,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 7,
        padding: 10,
        color: 'white'
    },
    card: {
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#1f4068',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }
})

export default StartGameScreen