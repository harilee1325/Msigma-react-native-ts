    import React, {useState} from 'react';
    import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Image,
    } from 'react-native';

    interface loginBtInterface {
    status: boolean;
    action: () => void;
    text: string;
    }
    function CustomButton({status, action, text}: loginBtInterface) {
    return (
        <>
        {!status ? (
            <TouchableOpacity
            style={styles.button}
            onPress={
                action
                //navigation.navigate('HomeScreen');
            }>
            <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
            style={styles.button}
            onPress={
                action
                // navigation.navigate('HomeScreen');
            }>
            <ActivityIndicator size="small" color="white" />
            </TouchableOpacity>
        )}
        </>
    );
    }

    const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    });

    export default CustomButton;
