import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({
    id,
    imgURL,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            className="bg-white mr-3 shadow w-64"
            onPress={() => {
                navigation.navigate('Restaurant', {id, imgURL, title, rating, genre, address, short_description, dishes, long, lat })
            }
            }
        >
            <Image
                source={{
                    uri: urlFor(imgURL).url(),
                }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">
                    {title}
                </Text>
                <View>
                    <StarIcon color="green" opacity={0.5} />
                    <Text>
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>

                <View>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500 max-w-full">Nearby . { address }</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}