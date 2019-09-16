import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import StartRating from 'react-native-star-rating';

const Home = ({ imageURI, description, width, name, price, rating }) => {
    return (
        <View style={{...styles.homeContainer,  width: width/2 - 30, height: width/2 - 30}}>
            <View style={styles.imageContainer}>
                <Image source={imageURI} style={styles.image}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 12, color: '#b63838', fontWeight: '300'}}>{description}</Text>
                <Text style={{fontSize: 14, fontWeight: '500'}}>{name}</Text>
                <Text style={{fontSize: 14}}>${price}/night</Text>
                <StartRating
                    disabled={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
       
    },
    imageContainer: {
        flex: 1
    },
    image: { 
        flex: 1, 
        width: null, 
        height: null, 
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
});

export default Home;