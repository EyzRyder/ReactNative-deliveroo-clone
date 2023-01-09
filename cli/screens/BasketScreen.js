import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { View, Text, Modal, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { urlFor } from '../sanity';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../slices/basketSlice';
import { selectRestaurant } from '../slices/restaurantSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    const basketTotal = useSelector(selectBasketTotal);
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch();


    useMemo(() => {
        const groupItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupItems);
    },[items])

    return (
        <Modal className="relative flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="p-5 border-b border-[#00CCBB] bg-white shadow-sm">
                    <View>
                        <Text className="text-lg font-bold text-center">Basket</Text>
                        <Text className="text-center text-gray-400">
                            {restaurant.title}
                        </Text>

                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className="absolute top-4 right-5 p-2 bg-gray-100 rounded-full">
                        <XCircleIcon size={50} color='#00CCBB' />
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                    <Image
                        source={{
                            uri: "https://links.papareact.com/wru",
                        }}
                    className="h-7 w-7 p-4 bg-gray-300 rounded-full"
                    />
                    <Text className="flex-1">Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text>Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupItemsInBasket).map(([key, items]) => (
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text>{items.length} x </Text>
                            <Image
                                source={{
                                    uri: urlFor(items[0]?.image).url()
                                }}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-600">R$ {items[0]?.price}</Text>
                            <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id:key}))}>
                                <Text className="text-[#00CCBB] text-xs">
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className="p-5 bg-white mt-5 space-y-4">
                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Subtotal</Text>
                        <Text className="text-gray-400">R$ {basketTotal }</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="text-gray-400">Delivery Fee</Text>
                        <Text className="text-gray-400">R$ 5.99</Text>
                    </View>

                    <View className="flex-row justify-between">
                        <Text className="font-extrabold">Order Total</Text>
                        <Text className="font-extrabold">R$ {basketTotal + 5.99}</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00CCBB] p-4">
                        <Text className="text-center text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </Modal>
    )
}

export default BasketScreen