import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = ({ children, style }) => {
    return(
        <View style={{...styles.header, ...style}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white', 
        borderBottomWidth: 1, 
        borderBottomColor: '#dddddd',
    }
});

export default Header;