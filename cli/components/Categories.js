import { ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import sanityClient from './../sanity'
import { urlFor } from '../sanity'

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"] 
        `).then(data => {
            setCategories(data);
        })
    }, [])

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
            {categories?.map(category => (
                <CategoriesCard
                    key={category.name}
                    imgURL={urlFor(category.image).width(200).url()}
                    title={category.name} 
                    />

            ))}
        </ScrollView>
    )
}