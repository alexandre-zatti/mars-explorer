import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet, TouchableOpacity, View, ImageBackground, Text } from "react-native";
import { RoverData } from "../data/RoverData";
import RoverDataInterface from "../interfaces/RoverDataInterface";
import Rover from "../components/Rover";
import BackNavigation from "../components/BackNavigation";


const Rovers = ({ navigation }: any): JSX.Element => {

    const [Rovers] = useState<RoverDataInterface[]>(RoverData)

    return (
        <View style={styles.wrapper}>
            <ImageBackground source={require('../../assets/rovers-background.png')} resizeMode="cover" style={styles.backImage}>
                <BackNavigation navigation={navigation} />
                <View style={styles.titleContainer}>
                    <Text style={styles.labels}>Explore</Text>
                    <Text style={styles.title}>Rovers</Text>
                </View>
                <View style={styles.container}>
                    <FlatList numColumns={2} contentContainerStyle={styles.list} data={Rovers} renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Filter', item)}>
                            <Rover name={item.name} image={item.image} />
                        </TouchableOpacity>
                    )} />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 2,
    },
    container: {

        marginTop: 10
    },
    backImage: {
        flex: 2
    },
    titleContainer: {
        marginTop: 25,
        marginLeft: 35,
        marginBottom: 10
    },
    list: {
        alignItems: "center",
        justifyContent: "flex-start",
        width: 390,
        marginLeft: 10
    },
    title: {
        fontFamily: "ChakraPetch_700Bold",
        color: "#DDDDDD",
        fontSize: 40,
        marginTop: -20,
    },
    labels: {
        fontFamily: "ChakraPetch_300Light",
        color: "#DDDDDD",
        fontSize: 20,
    },
});

export default Rovers