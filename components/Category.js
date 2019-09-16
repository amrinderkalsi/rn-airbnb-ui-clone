import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Category = ({ imageURI, categoryName }) => {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.imageContainer}>
                <Image source={imageURI} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text>{categoryName}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: 130,
        width: 130,
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 15,
        marginLeft: 20,
        overflow: 'hidden'
    },
    imageContainer: {
        flex: 3
    },
    image: { 
        flex: 1, 
        width: null, 
        height: null, 
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    }
});

export default Category;