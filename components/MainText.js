import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MainText = ({ children, style }) => {
    return (
        <Text style={{ ...styles.text, ...style }}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: 20,
        fontSize: 24,
        fontWeight: '700'
    }
});

export default MainText;