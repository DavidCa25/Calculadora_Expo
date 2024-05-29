import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Calculadora = () => {
    const insets = useSafeAreaInsets();
    const [display, setDisplay] = useState('');

    const handlePress = (value) => {
        if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error');
            }
        } else if (value === 'C') {
            setDisplay('');
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={styles.display}>
                {display}
            </Text>
            <View style={styles.buttonContainer}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'].map((value) => (
                    <TouchableOpacity
                        key={value}
                        style={styles.button}
                        onPress={() => handlePress(value)}
                    >
                        <Text style={styles.buttonText}>{value}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    display: {
        fontSize: 36,
        marginBottom: 40,
        textAlign: 'right',
        width: '90%',
        backgroundColor: '#f1f1f1',
        padding: 10,
        borderRadius: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '90%'
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 20,
        margin: 5,
        width: '20%',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});

export default Calculadora;
