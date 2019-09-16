import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchBox = ({ children, style }) => {
    return(
        <View style={{...styles.searchBox, ...style}}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        elevation: 1
    }
});

export default SearchBox;