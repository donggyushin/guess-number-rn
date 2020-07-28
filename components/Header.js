import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = ({ title }) => {
    return <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#1f4068',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18
    }
})

export default Header