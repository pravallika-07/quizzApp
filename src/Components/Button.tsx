import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as React from 'react'


const Button = ({ name } :any) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        alignItems:'center',
        justifyContent: "center",
        marginHorizontal:30,
        fontFamily: 'regular',
        fontSize: 18,
        backgroundColor: "#000000",
        marginTop: "6%",
        paddingLeft: "5%",
        color: 'black',
        padding:"3%",
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color:"#ffffff"
    },
})