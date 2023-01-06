import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({ id, title, description }) {
    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">
                    {title}
                </Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            <Text className="text-xs text-gray-500 px-4">{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                {/* Restaurante Cards */}
                <RestaurantCard
                    id={123}
                    imgURL="https://links.papareact.com/gn7"
                    title="Ai Yo Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="321 Rua Pele"
                    short_description="This is a Test Descrition"
                    dishes={{}}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgURL="https://links.papareact.com/gn7"
                    title="Ai Yo Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="321 Rua Pele"
                    short_description="This is a Test Descrition"
                    dishes={{}}
                    long={20}
                    lat={0}
                />

                <RestaurantCard
                    id={123}
                    imgURL="https://links.papareact.com/gn7"
                    title="Ai Yo Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="321 Rua Pele"
                    short_description="This is a Test Descrition"
                    dishes={{}}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}