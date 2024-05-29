import {Button, StyleSheet, View, Text, input, result } from "react-native";

const Calculadora = () => {
    return(
        <View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{input}</Text>
                <Text style={styles.resultText}>{result}</Text>
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    resultText: {
        color: 'white',
        fontSize: 24
    },
    resultContainer:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#1E1E1E',
        padding: 20,
    },
    buttonContainer: {
        
    }
})
export default Calculadora;