import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect, useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import {
    ArrowLeftIcon,
    ChevronRightIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
    StarIcon
} from 'react-native-heroicons/solid';
import { useDispatch } from 'react-redux';
import BasketIcon from '../components/BasketIcon';
import DishRow from '../components/DishRow';

import { urlFor } from '../sanity'
import { setRestaurant } from '../slices/restaurantSlice';

export default function RestaurantScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
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
        } } = useRoute();
    
    useEffect(() => {
        dispatch(setRestaurant({
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
        }))
    },[])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <>
            <BasketIcon />

        <ScrollView>
            <View className="relative">
                <Image
                    source={{
                        uri: urlFor(imgURL).url(),
                    }}
                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity
                    onPress={navigation.goBack}
                    className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                    <ArrowLeftIcon size={20} color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                <View className="px-4 pt-4">
                    <Text className="text-3xl font-bold">
                        {title}
                    </Text>
                    <View className="flex-row space-x-2 my-1 mx-1">
                        <View className="flex-row items-center space-x-1">
                            <StarIcon size={22} color='green' opacity={0.5} />
                            <Text>
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>

                        <View className="flex-row items-center space-x-1 w-full">
                            <MapPinIcon size={22} color='gray' opacity={0.4} />
                            <Text className="text-xs text-gray-500 w-[70%]">Nearby . {address}</Text>
                        </View>
                    </View>

                    <Text className="text-gray-500 mt-4 pb-4">{short_description}</Text>
                </View>

                <TouchableOpacity className="flex-row flex-1 items-center space-x-2 p-4 border-y border-gray-300">
                    <QuestionMarkCircleIcon
                        size={20}
                        color='gray'
                        opacity={0.6} 
                        
                        />
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <ChevronRightIcon color='#00CCBB' />
                </TouchableOpacity>
            </View>

            <View className="pb-36">
                <Text className="px-4 pt-6 mb-3 font-bold">
                    Menu
                </Text>

                {/* DishRows */}
                {dishes?.map((dish) => (
                    <DishRow
                        key={dish._id}
                        id={dish._id}
                        name={dish.name}
                        description={dish.short_description}
                        price={dish.price}
                        image={dish.image}
                    />
                ))}
            </View>
            </ScrollView>
        </>
    )
}
