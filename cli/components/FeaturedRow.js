import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from './../sanity'

export default function FeaturedRow({ id, title, description }) {

    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        const rowId = JSON.stringify(id)
        sanityClient.fetch(`
        *[_type == "featured" && _id == ${rowId} ] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                        name
                }
            },
        }[0]
        `).then(data => {
            setRestaurantes(data?.restaurants);
        })
    }, [])

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

                {restaurantes?.map(restaurante => (
                    <RestaurantCard
                        key={restaurante._id}
                        id={restaurante._id}
                        imgURL={restaurante.image}
                        title={restaurante.name}
                        rating={restaurante.rating}
                        genre={restaurante.type.name}
                        address={restaurante.address}
                        short_description={restaurante.short_description}
                        dishes={restaurante.dishes}
                        long={restaurante.long}
                        lat={restaurante.lat}
                    />
                ))}
                
            </ScrollView>
        </View>
    )
}