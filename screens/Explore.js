import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    TextInput, 
    Platform, 
    StatusBar, 
    ScrollView, 
    Image, 
    Dimensions, 
    Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Category from '../components/Category';
import MainText from '../components/MainText';
import Home from '../components/Home';

const { height, width } = Dimensions.get('window');

class Explore extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.masterContainer}>
                <View style={styles.container}>
                    <Header style={styles.header}>
                        <SearchBox>
                            <Icon name="ios-search" size={20} style={styles.icon} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Try Toronto"
                                placeholderTextColor='grey'
                                style={styles.textInput} />
                        </SearchBox>
                        <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: 20 }}>
                            <View style={{ minHeight: 20, minWidth: 40, marginRight: 5, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2 }}>
                                <Text style={{ fontWeight: '700', fontSize: 10 }}>Guests</Text>
                            </View>
                            <View style={{ minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 1, borderRadius: 2 }}>
                                <Text style={{ fontWeight: '700', fontSize: 10 }}>Dates</Text>
                            </View>
                        </Animated.View>
                    </Header>

                    <ScrollView>
                        <View style={styles.bodyContainer}>
                            <MainText>What can we help you find, Amrinder?</MainText>
                            <View style={styles.categoryContainer}>
                                <ScrollView scrollEventThrottle={16} horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Category imageURI={require('../assets/home.jpg')} categoryName="Home" />
                                    <Category imageURI={require('../assets/experiences.jpg')} categoryName="Experiences" />
                                    <Category imageURI={require('../assets/restaurant.jpg')} categoryName="Restaurants" />
                                    <Category imageURI={require('../assets/home.jpg')} categoryName="Adventures" />
                                </ScrollView>
                            </View>
                        </View>

                        <View style={styles.airbnbPlusContainer}>
                            <MainText style={{ paddingHorizontal: null }}>Introducing Airbnb Plus</MainText>
                            <Text style={styles.airbnbPlusText}>A new selection of homes verified for quality & confort</Text>

                            <View style={styles.airbnbPlusImageContainer}>
                                <Image
                                    source={require('../assets/home.jpg')}
                                    style={styles.airbnbPlusImage}
                                    resizeMode='cover'
                                />
                            </View>
                        </View>

                        <View style={styles.homesContainer}>
                            <MainText>Homes around the world</MainText>
                            <View style={styles.homesCardContainer}>
                                <Home
                                    imageURI={require('../assets/home.jpg')}
                                    description="PRIVATE ROOM - LONDON"
                                    width={width}
                                    name="The Cozy Palace"
                                    price="117"
                                    rating={4}
                                />
                                <Home
                                    imageURI={require('../assets/experiences.jpg')}
                                    description="ENTIRE APARTMENT - TORONTO"
                                    width={width}
                                    name="Perfectly Located Castro"
                                    price="220"
                                    rating={3}
                                />
                                <Home
                                    imageURI={require('../assets/restaurant.jpg')}
                                    description="PRIVATE ROOM - PARIS"
                                    width={width}
                                    name="The Grand Palace"
                                    price="145"
                                    rating={4}
                                />
                                <Home
                                    imageURI={require('../assets/home.jpg')}
                                    description="ENTIRE HOUSE - DELHI"
                                    width={width}
                                    name="SINTRA"
                                    price="560"
                                    rating={4}
                                />
                            </View>
                        </View>

                    </ScrollView>

                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    masterContainer: {
        flex: 1
    },
    container: {
        flex: 1
    },
    header: {
        marginTop: Platform.OS == 'android' ? 30 : 10,
        height: Platform.OS == 'android' ? 90 + StatusBar.currentHeight : 100
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: '#FFFFFF'
    },
    bodyContainer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    categoryContainer: {
        height: 130,
        marginTop: 20
    },
    airbnbPlusContainer: {
        marginTop: 40,
        paddingHorizontal: 20
    },
    airbnbPlusText: {
        fontWeight: '100',
        marginTop: 10
    },
    airbnbPlusImageContainer: {
        width: width - 40,
        height: 200,
        marginTop: 20
    },
    airbnbPlusImage: {
        flex: 1,
        width: null,
        height: null,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    homesContainer: {
        marginTop: 40
    },
    homesCardContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

export default Explore;
