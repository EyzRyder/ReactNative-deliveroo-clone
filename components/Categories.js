import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

export default function Categories() {
    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            >
            {/* CategoryCard */}
            
            <CategoriesCard imgURL="https://links.papareact.com/gn7" title="Testing" />
            <CategoriesCard imgURL="https://links.papareact.com/gn7" title="Testing" />
            <CategoriesCard imgURL='https://links.papareact.com/gn7' title="Testing" />
            <CategoriesCard imgURL="https://links.papareact.com/gn7" title="Testing" />
            <CategoriesCard imgURL="https://links.papareact.com/gn7" title="Testing" />
        </ScrollView>
    )
}