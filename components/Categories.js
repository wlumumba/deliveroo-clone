import { View, Text, ScrollView } from "react-native"
import CategoryCard from "./CategoryCard"
import React from "react"

const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
		>
			{/* CategoryCard */}

			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2" />
			<CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing3" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing4" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing5" />
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing6" />
            
		</ScrollView>
	)
}

export default Categories
