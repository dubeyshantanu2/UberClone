import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const data = [
    {
        id: "Uber-X-125",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
        price: " Rs.1586"
    },
    {
        id: "Uber-XL-589",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
        price: "Rs. 2963",
    },
    {
        id: "Uber-LUX-889",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
        price: "Rs. 3463"
    },
];


const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>

            <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-2 p-3 z-50 rounded-full`}  >
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>
                Select a Ride - 530 km
            </Text>


            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image, price }, item }) => (
                    <TouchableOpacity onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-5 ${id === selected?.id && "bg-gray-200"}`}>
                        <Image style={{ width: 70, height: 70, resizeMode: "contain" }}
                            source={{ uri: image }} />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration?.text}7 hours 2 mins Travel time </Text>
                        </View>
                        <Text style={tw`text-xl`}>

                            {price}



                        </Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
            >
                <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
};

export default RideOptionsCard;
